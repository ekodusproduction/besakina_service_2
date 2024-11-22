import { getDB } from "../../mongodb.js";
import { logger } from "../../../Middlewares/logger.middleware.js";
import { redis } from "../redis.js";
import { getCategoryWithTags } from "./fetchTags.js";

const CATEGORY_LIST_KEY = "categoriesList";
const CATEGORY_SCHEMA_KEY = "categoriesSchema";
const CATEGORY_TAGS_KEY = "categoriesTags";

// Helper method to delete a key if it exists
const asyncDel = async (key) => {
    const exists = await redis.exists(key);
    if (exists) {
        await redis.del(key);
    }
};

// Helper method to set JSON array data in Redis
const asyncJsonArraySet = async (key, value) => {
    await redis.json.set(key, '$', value);  // Store as JSON array
};

// Helper method to set JSON object data in Redis
const asyncJsonObjectSet = async (key, path, value) => {
    await redis.json.set(key, path, value);  // Store as JSON object
};

// Helper method to get JSON data from Redis
const asyncJsonGet = async (key, path) => {
    return await redis.json.get(key, { path });
};

// Category List Loader (for listing categories with subcategories and schemas)
export const categoryListLoader = async function () {
    try {
        const categoriesList = await getDB().collection("category").find({ is_active: true }).select("name icon subcategory").sort({ rank: 1 }).toArray();
        // Get categories with combined tags
        // Extract relevant data for categories
        // Delete existing keys in Redis
        await asyncDel(CATEGORY_LIST_KEY);

        // Store categories as a JSON array in Redis
        await asyncJsonArraySet(CATEGORY_LIST_KEY, categoriesList);

        logger.info("Categories list loaded into Redis successfully.");
        return categoriesList.length;
    } catch (err) {
        logger.error("Error loading categories into Redis:", err);
        return 0;
    }
};

// Category Schema Loader (for loading categories with schemas in Redis)
export const categorySchemaLoader = async function () {
    try {
        const categoriesList = await getDB().collection("category").find({ is_active: true }).select("subcategory sellsSchema marketingSchema").sort({ rank: 1 }).toArray();
        // Loop through categories to store schemas in Redis
        for (const category of categoriesList) {
            await asyncJsonObjectSet(CATEGORY_SCHEMA_KEY, `$.${category._id.toString()}`, category);
        }

        logger.info("Categories schemas loaded into Redis successfully.");
    } catch (err) {
        logger.error(`Error loading category schemas: ${err}`);
        return false;
    }
};

// Category Tags Loader (for fetching category/subcategory tags in one go)
export const categoryTagsLoader = async function () {
    try {
        const categoriesWithTags = await getCategoryWithTags();
        if (!categoriesWithTags) return [];

        // Delete existing tags in Redis before setting new ones
        await asyncDel(CATEGORY_TAGS_KEY);

        // Store tags data as JSON objects in Redis
        for (const category of categoriesWithTags) {
            await asyncJsonObjectSet(CATEGORY_TAGS_KEY, `$.${category._id.toString()}`, category.tags);
        }

        logger.info("Category tags loaded into Redis successfully.");
        return categoriesWithTags.length;
    } catch (err) {
        logger.error(`Error fetching category tags: ${err.message}`);
        return [];
    }
};

// Fetch a single category by ID
export const checkCategoryById = async function (id) {
    try {
        const category = await asyncJsonGet(CATEGORY_LIST_KEY, `$.${id}`);
        return category || false;
    } catch (err) {
        logger.error(`Error fetching category with id ${id}:`, err);
        return null;
    }
};

// Fetch all categories
export const getAllCategoryList = async function () {
    try {
        const categories = await asyncJsonGet(CATEGORY_LIST_KEY, '$');
        return categories || [];
    } catch (err) {
        logger.error("Error fetching all categories:", err);
        return [];
    }
};

// Fetch all tags or tags for a specific category
export const getTagsByIds = async function (category, subCategoryId = []) {
    try {
        // Initialize a set to hold tags (sets automatically handle duplicates)
        const tagsSet = new Set([...category.tags]);

        // If subCategoryId is provided and it's an array with elements
        if (subCategoryId && subCategoryId.length > 0) {
            // Loop through the provided subcategory IDs
            for (const subId of subCategoryId) {
                const subCategoryKey = `${category._id}:${subId}`;
                // Try fetching the tags for the subcategory from Redis
                const subTags = await asyncJsonGet(CATEGORY_TAGS_KEY, `$.${subCategoryKey}`);
                if (subTags) {
                    // Add subcategory tags to the set (Set will avoid duplicates)
                    subTags.forEach(tag => tagsSet.add(tag));
                }
            }
        }

        // Convert the set back to an array and return
        return [...tagsSet];
    } catch (err) {
        logger.error(`Error fetching tags for categoryId ${category._id}: ${err.message}`);
        return [];
    }
};

// Fetch all schemas or schema for a specific category
export const getCategorySchema = async function (id = null) {
    try {
        const schemaData = await asyncJsonGet(CATEGORY_SCHEMA_KEY, '$');
        if (!schemaData) return false;

        const schemas = schemaData;
        return id ? schemas.find((schema) => schema._id === id) : schemas;
    } catch (err) {
        logger.error(`Error fetching category schema with id ${id}:`, err);
        return null;
    }
};
