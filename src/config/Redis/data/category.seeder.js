import Category from "../../../Features/Categories/categoryModel.js";
import { logger } from "../../../Middlewares/logger.middleware.js";
import { asyncSet, asyncDel, asyncGet, asyncHset, asyncHgetall, asyncHget } from "../redis.methods.js";

const CATEGORY_KEY = "categoriesList";
const CATEGORY_SCHEMA_KEY = "categoriesSchema";
const CATEGORY_TAGS_KEY = "categoriesTags";

export const categoriesLoader = async function () {
    try {
        const categories = await Category.find({ is_active: true }).sort({ rank: 1 });
        console.log("categories", categories)
        // Extract relevant data
        const categoriesList = categories.map((category) => ({
            _id: category._id,
            name: category.name,
            icon: category.icon,
            subcategory: category.subcategory?.map((sub) => ({
                _id: sub._id,
                name: sub.name,
            })),
        }));

        const categoriesSchema = categories.map((category) => ({
            _id: category._id,
            sellSchema: category.sellSchema,
            marketingSchema: category.marketingSchema,
        }));

        const categoriesTags = categories.map((category) => ({
            _id: category._id,
            tags: category.tags,
            subcategory: category.subcategory,
        }));

        // Delete existing keys in Redis
        await asyncDel(CATEGORY_KEY);
        await asyncDel(CATEGORY_SCHEMA_KEY);
        await asyncDel(CATEGORY_TAGS_KEY);

        // Store categories in Redis
        for (const category of categoriesList) {
            await asyncHset(CATEGORY_KEY, category._id.toString(), JSON.stringify(category));
        }

        // Store schemas and tags as single entries
        await asyncSet(CATEGORY_SCHEMA_KEY, JSON.stringify(categoriesSchema));
        await asyncSet(CATEGORY_TAGS_KEY, JSON.stringify(categoriesTags));

        logger.info("Categories, schemas, and tags loaded into Redis successfully.");
        return categories.length;
    } catch (err) {
        logger.error("Error loading categories into Redis:", err);
        return 0;
    }
};

// Fetch a single category by ID
export const checkCategoryById = async function (id) {
    try {
        const category = await asyncHget(CATEGORY_KEY, id);
        return category ? JSON.parse(category) : false;
    } catch (err) {
        logger.error(`Error fetching category with id ${id}:`, err);
        return null;
    }
};

// Fetch all categories
export const getAllCategoryList = async function () {
    try {
        const categories = await asyncHgetall(CATEGORY_KEY);
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
export const getTagsByIds = async function (category, subCategoryId = {}) {
    try {
        const tags = [...category.tags];
        if (subCategoryId.length > 0 && category.subcategory) {
            const subcategoryTags = category.subcategory
                .filter((sub) => subCategoryId[sub._id])
                .flatMap((sub) => sub.tags || []);
            tags.push(...subcategoryTags);
        }

        // Remove duplicate tags
        return [...new Set(tags)];
    } catch (err) {
        logger.error(`Error fetching tags for categoryId ${category._id}: ${err.message}`);
        return [];
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
