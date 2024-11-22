// Helper method to delete a key if it exists
const asyncDel = async (key) => {
    const exists = await redis.exists(key);
    if (exists) {
        await redis.del(key);
    }
};

// Helper method to set JSON data in Redis
const asyncJsonSet = async (key, path, value) => {
    await redis.json.set(key, path, value);
};

// Helper method to get JSON data from Redis
const asyncJsonGet = async (key, path) => {
    return await redis.json.get(key, { path });
};

/**
 * Fetch all active categories from MongoDB.
 */
const fetchActiveCategories = async () => {
    return await Category.find({ is_active: true }).sort({ rank: 1 });
};

/**
 * Fetch advertisements based on a query from MongoDB in batches.
 */
const fetchAdvertisementsInBatches = async (query, batchSize = 100) => {
    const cursor = getDB().collection("advertisement").find(query).sort({ created_at: -1 });
    let batch = [];
    const results = [];

    while (await cursor.hasNext()) {
        batch.push(await cursor.next());
        if (batch.length === batchSize) {
            results.push(...batch);
            batch = [];
        }
    }

    if (batch.length > 0) {
        results.push(...batch);
    }

    return results;
};

/**
 * Store advertisements into Redis in batches.
 */
const storeAdvertisementsInRedis = async (key, advertisements, batchSize = 100) => {
    let currentData = await asyncJsonGet(key, '$') || [];
    for (let i = 0; i < advertisements.length; i += batchSize) {
        const batch = advertisements.slice(i, i + batchSize);
        currentData = [...currentData, ...batch];
        await asyncJsonSet(key, '$', currentData);
    }
};

/**
 * Load advertisements for a specific category into Redis.
 */
const loadAdvertisementsForCategory = async (category, batchSize = 100) => {
    const categoryKey = `${ADVERTISEMENT_LIST_KEY}:${category._id}`;
    await asyncDel(categoryKey); // Delete the category-specific key in Redis

    const advertisements = await fetchAdvertisementsInBatches({ is_active: true, advType: category.name }, batchSize);
    await storeAdvertisementsInRedis(categoryKey, advertisements, batchSize);
};

/**
 * Load all advertisements into Redis.
 */
const loadAllAdvertisements = async (batchSize = 100) => {
    await asyncDel(ADVERTISEMENT_LIST_KEY); // Delete the main advertisements key

    const advertisements = await fetchAdvertisementsInBatches({ is_active: true }, batchSize);
    await storeAdvertisementsInRedis(ADVERTISEMENT_LIST_KEY, advertisements, batchSize);
};

/**
 * Load featured advertisements into Redis.
 */
const loadFeaturedAdvertisements = async (batchSize = 100) => {
    await asyncDel(FEATURED_LIST_KEY); // Delete the featured advertisements key

    const featuredAdvertisements = await fetchAdvertisementsInBatches({ is_active: true, featured: true }, batchSize);
    await storeAdvertisementsInRedis(FEATURED_LIST_KEY, featuredAdvertisements, batchSize);
};

/**
 * Main loader function to load all advertisements and categories into Redis.
 */
export const advertisementListLoader = async () => {
    try {
        const categories = await fetchActiveCategories();

        // Load advertisements for each category
        for (const category of categories) {
            await loadAdvertisementsForCategory(category);
        }

        // Load all advertisements and featured advertisements
        await loadAllAdvertisements();
        await loadFeaturedAdvertisements();

        logger.info("Advertisements list loaded into Redis successfully.");
        return categories.length;
    } catch (err) {
        logger.error("Error loading advertisements list into Redis:", err);
        return 0;
    }
};

/**
 * Load individual advertisements into Redis hash for fast lookup.
 */
export const advertisementHashLoader = async () => {
    try {
        const advertisements = await getDB().collection("advertisement").find({ is_active: true }).toArray();

        await redis.del(ADVERTISEMENT_HASH_KEY); // Delete existing advertisements hash key

        for (const adv of advertisements) {
            const advId = adv._id.toString();
            await redis.hSet(ADVERTISEMENT_HASH_KEY, advId, JSON.stringify(adv));
        }

        logger.info("Advertisements loaded into Redis Hash successfully.");
        return advertisements.length;
    } catch (err) {
        logger.error("Error loading advertisements into Redis Hash:", err);
        return 0;
    }
};

/**
 * Fetch a single advertisement by ID from Redis.
 */
export const fetchAdvById = async (id) => {
    try {
        const adv = await redis.hGet(ADVERTISEMENT_HASH_KEY, id);
        return adv ? JSON.parse(adv) : false;
    } catch (err) {
        logger.error(`Error fetching advertisement with id ${id}:`, err);
        return null;
    }
};

/**
 * Fetch all advertisements from Redis.
 */
export const getAllAdvList = async () => {
    try {
        const advList = await asyncJsonGet(ADVERTISEMENT_LIST_KEY, '$');
        return advList || [];
    } catch (err) {
        logger.error("Error fetching all advertisements:", err);
        return [];
    }
};
