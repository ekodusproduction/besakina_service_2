import { getDB } from "../../mongodb.js";
import { logger } from "../../../Middlewares/logger.middleware.js";
import { redis } from "../redis.js";
import { getCategoryWithTags } from "./fetchTags.js";
import { ADVERTISEMENT_JSON_KEY, ADVERTISEMENT_LIST_KEY, FEATURED_LIST_KEY } from '../redis.keys.js'
// Helper method to delete a key if it exists
const asyncDel = async (key) => {
    if (await redis.exists(key)) {
        await redis.del(key);
    }
};

// Helper method to append JSON data to an array in Redis
const asyncJsonAppend = async (key, path, values) => {
    const currentArray = await redis.json.get(key, { path });
    const updatedArray = currentArray ? currentArray.concat(values) : values;

    // Set the updated array back to Redis
    await redis.json.set(key, path, updatedArray);
};


// Fetch all active categories
const fetchActiveCategories = async () => {
    return await await getDB()
        .collection("categories")
        .find({ is_active: true })
        .project({ _id: 1 }) // Use .project() instead of .select()
        .toArray();
};

// Fetch advertisements in batches
const fetchAdvertisementsInBatches = async (query, batchSize = 100) => {
    const cursor = getDB().collection("advertisement").find(query).sort({ created_at: -1 });
    const results = [];

    while (await cursor.hasNext()) {
        results.push(await cursor.next());
    }

    return results;
};

// Store advertisements into Redis in batches using array append
const storeAdvertisementsInRedis = async (key, advertisements, batchSize = 100) => {
    await asyncDel(key); // Ensure key is cleared
    await redis.json.set(key, '$', []); // Initialize as an empty array

    for (let i = 0; i < advertisements.length; i += batchSize) {
        const batch = advertisements.slice(i, i + batchSize);
        await asyncJsonAppend(key, '$', batch); // Append batch to the array
    }
};

// Load advertisements for a specific category into Redis
const loadAdvertisementsForCategory = async (category, batchSize = 100) => {
    const categoryKey = `${ADVERTISEMENT_LIST_KEY}:${category._id}`;
    const advertisements = await fetchAdvertisementsInBatches({ is_active: true, advType: category.name }, batchSize);
    await storeAdvertisementsInRedis(categoryKey, advertisements, batchSize);
};

// Load all advertisements into Redis
const loadAllAdvertisements = async (batchSize = 100) => {
    const advertisements = await fetchAdvertisementsInBatches({ is_active: true }, batchSize);
    await storeAdvertisementsInRedis(ADVERTISEMENT_LIST_KEY, advertisements, batchSize);
};

// Load featured advertisements into Redis
const loadFeaturedAdvertisements = async (batchSize = 100) => {
    const featuredAdvertisements = await fetchAdvertisementsInBatches({ is_active: true, featured: true }, batchSize);
    await storeAdvertisementsInRedis(FEATURED_LIST_KEY, featuredAdvertisements, batchSize);
};

// Load all advertisements and categories into Redis
const advertisementListLoader = async () => {
    try {
        const categories = await fetchActiveCategories();

        for (const category of categories) {
            await loadAdvertisementsForCategory(category);
        }

        await loadAllAdvertisements();
        await loadFeaturedAdvertisements();

        logger.info("Advertisements list loaded into Redis successfully.");
        return categories.length;
    } catch (err) {
        logger.error("Error loading advertisements list into Redis:", err);
        return 0;
    }
};

// Load individual advertisements into Redis JSON
const advertisementHashLoader = async () => {
    try {
        const advertisements = await getDB()
            .collection("advertisement")
            .find({ is_active: true })
            .toArray();

        for (const adv of advertisements) {
            const advId = adv._id.toString();
            await redis.json.set(`${ADVERTISEMENT_JSON_KEY}:${advId}`, '$', adv);
        }

        logger.info("Advertisements loaded into RedisJSON successfully.");
        return advertisements.length;
    } catch (err) {
        logger.error("Error loading advertisements into RedisJSON:", err);
        return 0;
    }
};

// Fetch a single advertisement by ID
const fetchAdvById = async (id) => {
    try {
        const adv = await redis.json.get(`${ADVERTISEMENT_JSON_KEY}:${id}`, { path: '$' });
        return adv || null;
    } catch (err) {
        logger.error(`Error fetching advertisement with id ${id}:`, err);
        return null;
    }
};

// Fetch all advertisements
const getAllAdvList = async () => {
    try {
        const advList = await redis.json.get(ADVERTISEMENT_LIST_KEY, { path: '$' });
        return advList || [];
    } catch (err) {
        logger.error("Error fetching all advertisements:", err);
        return [];
    }
};

export {
    advertisementListLoader,
    advertisementHashLoader,
    fetchAdvById,
    getAllAdvList,
};
