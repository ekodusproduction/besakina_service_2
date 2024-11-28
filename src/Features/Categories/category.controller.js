
// import { getAllCategoryList } from '../../config/Redis/data/category.seeder.js';
import { sendError, sendResponse } from '../../Utility/response.js';
import Category from './category.model.js';
import { ApplicationError } from '../../ErrorHandler/applicationError.js';
import { getDB } from '../../config/mongodb.js';

export const createCategory = async (req, res, next) => {
    try {
        console.log("body", req.body)
        const newCategory = new Category(req.body);

        const result = await newCategory.save();

        if (!result) {
            return sendError(res, 'Error adding category', 400);
        }
        return sendResponse(res, 'Category added successfully', 201, result);
    } catch (error) {
        next(error);
    }
};


export const listCategory = async (req, res, next) => {
    try {
        const categories = await getDB()
            .collection("categories")
            .find({ is_active: true })
            .project({ _id: 1, name: 1, icon: 1, subcategory: 1 }) // Select specific fields
            .sort({ rank: 1 })
            .toArray();

        if (!categories.length) {
            return await sendError(res, 'Categories not found', 404);
        }

        return await sendResponse(res, 'Categories fetched successfully', 200, categories);
    } catch (error) {
        next(error);
    }
};


export const listSubCategory = async (req, res, next) => {
    try {
        const category = req.params.categoryId
        const categories = await Category.find({ _id: category }).select('subcategory.name subcategory._id');
        if (!categories.length) {
            return await sendError(res, 'Categories not found', 404);
        }
        return await sendResponse(res, 'Categories fetched successfully', 200, categories);
    } catch (error) {
        next(error);
    }
};


export const UpdateCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.params;
        const { name, tags, is_active, subCategories, icon } = req.body;

        const updateFields = {
            name,
            tags,
            is_active,
            icon
        };

        if (subCategories) {
            updateFields.subCategories = subCategories;
        }

        const category = await Category.findByIdAndUpdate(
            categoryId,
            { $set: updateFields },
            { new: true, runValidators: true }
        );

        if (!category) {
            return sendError(res, 'Category not found', 404);
        }
        return sendResponse(res, 'Category updated successfully', 200, category);
    } catch (error) {
        next(error);
    }
};


export const UpdateSubCategory = async (req, res, next) => {
    try {
        const { categoryId, subCategoryId } = req.params;
        const { name, tags, is_active } = req.body;

        const category = await Category.findOneAndUpdate(
            { _id: categoryId, "subCategories._id": subCategoryId },
            {
                $set: {
                    "subCategories.$.name": name,
                    "subCategories.$.tags": tags,
                    "subCategories.$.is_active": is_active
                }
            },
            { new: true, runValidators: true }
        );

        if (!category) {
            return sendError(res, 'Subcategory not found', 404);
        }
        return sendResponse(res, 'Subcategory updated successfully', 200, category);
    } catch (error) {
        next(error);
    }
};

export const deleteCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.params;

        const category = await Category.findByIdAndUpdate(
            categoryId,
            { $set: { is_active: false } },
            { new: true }
        );

        if (!category) {
            return sendError(res, 'Category not found', 404);
        }
        return sendResponse(res, 'Category deleted successfully', 200, category);
    } catch (error) {
        next(error);
    }
};

export const deleteSubCategory = async (req, res, next) => {
    try {
        const { categoryId, subCategoryId } = req.params;

        const category = await Category.findOneAndUpdate(
            { _id: categoryId, "subCategories._id": subCategoryId },
            { $set: { "subCategories.$.is_active": false } },
            { new: true }
        );

        if (!category) {
            return sendError(res, 'Subcategory not found', 404);
        }
        return sendResponse(res, 'Subcategory deleted successfully', 200, category);
    } catch (error) {
        next(error);
    }
};
