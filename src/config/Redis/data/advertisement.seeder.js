import Category from "../../../Features/Categories/categoryModel.js";
import { logger } from "../../../Middlewares/logger.middleware.js";
import { getDB } from "../../mongodb.js";
import { asyncLrange } from "../redis.methods.js";
import { asyncSet, asyncDel, asyncGet, asyncHset, asyncHgetall, asyncHget } from "./redisMethods.js";

const ADVERTISEMENT_HASH_KEY = "advertisements";
const ADVERTISEMENT_LIST_KEY = "advList"; //for categories :categoryname

export const advertisementLoader = async function () {
    try {
        const advertisement = await getDB().collection("advertisement").find({ is_active: true });

        // Extract relevant data
        const categories = await Category.find({ is_active: true }).sort({ rank: 1 });

        // Delete existing keys in Redis
        await asyncDel(ADVERTISEMENT_LIST_KEY);
        await asyncDel(ADVERTISEMENT_HASH_KEY);

        // Store categories in Redis
        for (const category of categories) {
            await asyncDel(`${ADVERTISEMENT_LIST_KEY}:${category}`);
            const advertisementList = await getDB().collection("advertisement").find({ is_active: true, advType: category }).sort({ created_at: -1 });
            await asyncLpush(`${ADVERTISEMENT_LIST_KEY}:${category}`, adv._id.toString(), JSON.stringify(advertisementList));
        }
        for (const adv of advertisement) {
            await asyncHset(ADVERTISEMENT_HASH_KEY, adv._id.toString(), JSON.stringify(adv));        
        }
        await asyncLpush(`${ADVERTISEMENT_LIST_KEY}`, JSON.stringify(advertisement));
        logger.info("Advertisements loaded into Redis successfully.");
        return categories.length;
    } catch (err) {
        logger.error("Error loading categories into Redis:", err);
        return 0;
    }
};

// Fetch a single category by ID
export const checkAdvById = async function (id) {
    try {
        const adv = await asyncHget(ADVERTISEMENT_HASH_KEY, id);
        return adv ? JSON.parse(adv) : false;
    } catch (err) {
        logger.error(`Error fetching category with id ${id}:`, err);
        return null;
    }
};

// Fetch all categories
export const getAllAdvList = async function () {
    try {
        const categories = await asyncHgetall(ADVERTISEMENT_LIST_KEY);
        return Object.entries(categories).map(([key, value]) => ({
            _id: key,
            ...JSON.parse(value),
        }));
    } catch (err) {
        logger.error("Error fetching all categories:", err);
        return [];
    }
};

// Fetch all tags or tags for a specific category
export const getCategoryTags = async function (id = null) {
    try {
        const tagsData = await asyncGet(CATEGORY_TAGS_KEY);
        if (!tagsData) return false;

        const tags = JSON.parse(tagsData);
        return id ? tags.find((tag) => tag._id === id) : tags;
    } catch (err) {
        logger.error(`Error fetching tags with id ${id}:`, err);
        return null;
    }
};

// Fetch all schemas or schema for a specific category
export const getCategorySchema = async function (id = null) {
    try {
        const schemaData = await asyncGet(CATEGORY_SCHEMA_KEY);
        if (!schemaData) return false;

        const schemas = JSON.parse(schemaData);
        return id ? schemas.find((schema) => schema._id === id) : schemas;
    } catch (err) {
        logger.error(`Error fetching schema with id ${id}:`, err);
        return null;
    }
};
