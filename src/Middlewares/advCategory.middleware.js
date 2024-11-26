// import { checkCategoryById, getTagsByIds } from "../config/Redis/data/category.seeder.js";
import { get } from "mongoose";
import { sendError } from "../Utility/response.js";
import { getDB } from "../config/mongodb.js";
import { ObjectId } from "mongodb";
export const advCategoryValidationMiddleware = async (req, res, next) => {
    try {
        // Validate the advertisement type ID from the request parameters
        const categoryId = req.params?.categoryId;
        if (!categoryId) {
            return sendError(res, 'categoryId is missing. Please provide a valid category ID.', 400);
        }

        // Check if the category exists and is active
        // const category = await checkCategoryById(req.body.categoryId)
        const category = await getDB().collection("categories").findOne({ _id: new ObjectId(categoryId) });
        console.log("category", category)
        if (!category) {
            return sendError(res, 'Invalid or inactive categoryId.', 404);
        }
        console.log("forsale ", req.body.forsale)
        if (req?.body?.forsale == 'true') {
            req.schema = category?.sellsSchema;
        } else {
            req.schema = category?.marketingSchema;
        }
        // Attach category details to the request object for further use
        req.category = category;

        // Attach search tags to the request object for further use
        // req.body.tags = await getTagsByIds(category, req.body.subcategoryId);;
        next();
    } catch (error) {
        console.error('Error in categoryId:', error);
        return sendError(res, 'An error occurred while validating the category Id.', 500);
    }
};
