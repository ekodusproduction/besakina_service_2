import { getDB } from "../../mongodb.js";
import { logger } from "../../../Middlewares/logger.middleware.js";
import { redis } from "../redis.js";
import { getCategoryWithTags } from "./fetchTags.js";

const CATEGORY_LIST_KEY = "categoriesList";
const CATEGORY_SCHEMA_KEY = "categoriesSchema";
const CATEGORY_TAGS_KEY = "categoriesTags";

/**
 * Helper to delete a Redis key if it exists.
 */
const asyncDel = async (key) => {
    const exists = await redis.exists(key);
    if (exists) {
        await redis.del(key);
    }
};

/**
 * Helper to set JSON data in Redis.
 */
const asyncJsonSet = async (key, path, value) => {
    await redis.json.set(key, path, value);
};

/**
 * Helper to get JSON data from Redis.
 */
const asyncJsonGet = async (key, path = '$') => {
    return await redis.json.get(key, { path });
};

/**
 * Load all active categories into Redis as a JSON array.
 */
const categoryListLoader = async function () {
    try {
        const categoriesList = await getDB()
            .collection("categories")
            .find({ is_active: true })
            .project({ name: 1, icon: 1, subcategory: 1, rank: 1 })
            .sort({ rank: 1 })
            .toArray();
        console.log("data category", categoriesList[0])
        await asyncDel(CATEGORY_LIST_KEY); // Clear existing data
        await asyncJsonSet(CATEGORY_LIST_KEY, '$', categoriesList);

        logger.info("Categories list loaded into Redis successfully.");
        return categoriesList.length;
    } catch (err) {
        logger.error("Error loading categories into Redis:", err);
        return 0;
    }
};

/**
 * Load schemas for all categories into Redis as JSON objects.
 */
const categorySchemaLoader = async function () {
    try {
        const categoriesList = await getDB()
            .collection("categories")
            .find({ is_active: true })
            .project({ subcategory: 1, sellsSchema: 1, marketingSchema: 1, rank: 1 })
            .sort({ rank: 1 })
            .toArray();

        await asyncDel(CATEGORY_SCHEMA_KEY); // Clear existing data

        for (const category of categoriesList) {
            await asyncJsonSet(CATEGORY_SCHEMA_KEY, `$.${category._id.toString()}`, category);
        }

        logger.info("Category schemas loaded into Redis successfully.");
    } catch (err) {
        logger.error("Error loading category schemas into Redis:", err);
        return false;
    }
};

/**
 * Load category tags into Redis as JSON objects.
 */
const categoryTagsLoader = async function () {
    try {
        const categoriesWithTags = await getCategoryWithTags();
        if (!categoriesWithTags) return [];

        await asyncDel(CATEGORY_TAGS_KEY); // Clear existing tags

        for (const category of categoriesWithTags) {
            console.log("categories", category)
            await asyncJsonSet(CATEGORY_TAGS_KEY, `$.${category._id}`, category.tags);
        }

        logger.info("Category tags loaded into Redis successfully.");
        return categoriesWithTags.length;
    } catch (err) {
        logger.error("Error loading category tags into Redis:", err);
        return [];
    }
};

/**
 * Fetch a single category by ID.
 */
const checkCategoryById = async function (id) {
    try {
        const category = await asyncJsonGet(CATEGORY_LIST_KEY, `$.${id}`);
        return category || null;
    } catch (err) {
        logger.error(`Error fetching category with id ${id}:`, err);
        return null;
    }
};

/**
 * Fetch all categories from Redis.
 */
const getAllCategoryList = async function () {
    try {
        const categories = await asyncJsonGet(CATEGORY_LIST_KEY, '$');
        return categories || [];
    } catch (err) {
        logger.error("Error fetching all categories:", err);
        return [];
    }
};

/**
 * Fetch tags for a specific category or subcategories.
 */
const getTagsByIds = async function (category, subCategoryId = []) {
    try {
        const tagsSet = new Set(category.tags || []);

        for (const subId of subCategoryId) {
            const subTags = await asyncJsonGet(CATEGORY_TAGS_KEY, `$.${category._id}:${subId}`);
            if (subTags) subTags.forEach(tag => tagsSet.add(tag));
        }

        return Array.from(tagsSet);
    } catch (err) {
        logger.error(`Error fetching tags for categoryId ${category._id}:`, err);
        return [];
    }
};

/**
 * Fetch category schemas from Redis.
 */
const getCategorySchema = async function (id = null) {
    try {
        const schemas = await asyncJsonGet(CATEGORY_SCHEMA_KEY, '$');
        return id ? schemas?.[id] || null : schemas;
    } catch (err) {
        logger.error(`Error fetching category schema with id ${id}:`, err);
        return null;
    }
};

// Exporting functions
export {
    categoryListLoader,
    categorySchemaLoader,
    categoryTagsLoader,
    checkCategoryById,
    getAllCategoryList,
    getTagsByIds,
    getCategorySchema
};
