import { ApplicationError } from "../../ErrorHandler/applicationError.js";
import { logger } from "../../Middlewares/logger.middleware.js";
import { addUserDetails } from "../Users/users.repository.js";
import { getDB } from "../../config/mongodb.js";
import { baseSchema } from "./BaseModel/base.model.js";
import mongoose from 'mongoose';
import { ObjectId } from "mongodb";

export const addAdvertisement = async (requestBody, files, category, schema) => {
    try {
        console.log("schema", schema);
        requestBody.images = files;
        requestBody.category = category.name;
        requestBody.categoryId = category._id;
        requestBody.subcategoryId = JSON.parse(requestBody.subcategoryId)

        if (schema) {
            console.log('inside if repository', schema);
            baseSchema.add(schema);
        } else {
            console.log('inside else');
        }

        const advertisementModel = mongoose.model('advertisement', baseSchema);
        const result = new advertisementModel(requestBody);

        try {
            await result.validate();
        } catch (validationError) {
            console.error("Validation Error:", validationError);
            return {
                error: true,
                message: 'Validation failed. Check input fields.',
                statusCode: 400,
                data: validationError.errors,
            };
        }

        await result.save();
        if (!result) {
            return {
                error: true,
                message: `Error adding advertisement ${category.name}.`,
                statusCode: 400,
                data: null,
            };
        }

        return {
            error: false,
            message: `${category.name} added successfully.`,
            statusCode: 200,
            data: { id: result._id },
        };

    } catch (error) {
        // Handling unexpected errors
        console.log("error", error)
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};

export const getAdvertisement = async (advertisementID) => {
    try {
        const db = getDB();
        await db.collection('advertisement').updateOne(
            { _id: new ObjectId(advertisementID) },
            { $inc: { views: 1 } }
        );

        const result = await db.collection('advertisement').aggregate([
            { $match: { _id: new ObjectId(advertisementID) } },
            {
                $lookup: {
                    from: 'users',
                    localField: 'user',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            {
                $unwind: {
                    path: '$user',
                    preserveNullAndEmptyArrays: true
                }
            }
        ]).toArray();

        console.log("result", result)
        if (result.length === 0) {
            return { error: true, message: `No advertisement to show.`, statusCode: 404, data: null };
        }
        return {
            error: false,
            message: `Fetched advertisement and user data successfully.`, data: result[0], statusCode: 200
        }

    } catch (error) {
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};


export const getListAdvertisement = async (categoryId, limit, offset) => {
    try {
        let result;
        console.log("category", categoryId)
        if (categoryId) {
            result = await getDB().collection('advertisement').find({ is_active: true, categoryId: new ObjectId(categoryId) }).sort({ created_at: -1 }).skip(offset)
                .limit(limit).toArray();
        } else {
            result = await getDB().collection('advertisement').find({ is_active: true }).sort({ created_at: -1 }).skip(offset)
                .limit(limit).toArray();
        }
        console.log("result", result)
        if (result.length === 0) {
            return { error: true, message: `No category to show.`, statusCode: 404, data: null };
        }

        return {
            error: false,
            message: `category: ${categoryId} list.`, data: result, statusCode: 200
        };
    } catch (error) {
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};
const filterAdvertisement = async (inputQuery) => {
    const db = getDB();
    let { categoryId, filter, minPrice, maxPrice } = inputQuery;

    // Ensure minPrice and maxPrice are parsed as integers
    minPrice = parseInt(minPrice) || 0;
    maxPrice = parseInt(maxPrice) || 0;

    try {
        // Parse the filter if it's a string
        let parsedFilter = filter;
        if (filter && typeof filter === 'string') {
            try {
                parsedFilter = JSON.parse(filter);
            } catch (error) {
                console.log("Error parsing filter:", error);
                return { error: true, message: "Invalid filter format", statusCode: 400, data: null };
            }
        }

        // Ensure parsedFilter is an array
        if (parsedFilter && !Array.isArray(parsedFilter)) {
            return { error: true, message: "Filter should be an array", statusCode: 400, data: null };
        }

        // Construct the MongoDB query
        const mongoQuery = {
            is_active: true,
            categoryId: new ObjectId(categoryId),
            ...(parsedFilter && { subcategoryId: { "$in": parsedFilter } }),
        };

        // Add price constraints if provided
        if (minPrice) {
            mongoQuery.price = mongoQuery.price || {};
            mongoQuery.price["$gte"] = minPrice;
        }
        if (maxPrice) {
            mongoQuery.price = mongoQuery.price || {};
            mongoQuery.price["$lte"] = maxPrice;
        }

        // Execute the query
        const advertisements = await db
            .collection('advertisement')
            .find(mongoQuery)
            .sort({ created_at: -1 })
            .toArray();

        if (advertisements.length === 0) {
            return {
                error: true,
                message: `No advertisements for category ${categoryId} to show.`,
                statusCode: 404,
                data: null,
            };
        }

        return {
            error: false,
            message: "Advertisements filter list",
            statusCode: 200,
            data: advertisements,
        };
    } catch (error) {
        logger.error("Error in filterAdvertisement:", {
            error,
            categoryId,
            filter,
            minPrice,
            maxPrice,
        });
        throw new ApplicationError(error, 500);
    }
};



export const updateAdvertisement = async (advertisementID, updateBody, userId, Model) => {
    try {
        if (!updateBody || typeof updateBody !== 'object') {
            return { error: true, data: { message: "Invalid request body", statusCode: 400, data: null } };
        }
        const result = await Model.findOneAndUpdate(
            { _id: advertisementID, user: userId },
            updateBody,
            { new: true }
        );
        if (!result) {
            return { error: true, data: { message: `${Model} not updated. No matching ${Model} found for the provided ID.`, statusCode: 404, data: null } };
        }
        return { error: false, data: { message: `${Model} updated successfully`, statusCode: 200, data: result } };
    } catch (error) {
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};

export const deactivateAdvertisement = async (advertisementID, userId, Model) => {
    try {
        const result = await Model.findOneAndUpdate(
            { _id: advertisementID, user: userId, is_active: true },
            { is_active: false },
            { new: true }
        );
        if (!result) {
            return { error: true, data: { message: `${Model}  not found.`, statusCode: 404, data: null } };
        }
        return { error: false, data: { message: `${Model} deactivated successfully`, statusCode: 200, data: result } };
    } catch (error) {
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};

export const addImage = async (advertisementID, files, userId, Model) => {
    try {
        const result = await Model.findOne({ _id: advertisementID, user: userId });
        if (!result) {
            return { error: true, data: { message: `${Model}  not found.`, statusCode: 404, data: null } };
        }
        result.images.push(files[0]);
        await doctor.save();
        return { error: false, data: { data: [files[0]], message: `${Model} image has been added.`, statusCode: 200 } };
    } catch (error) {
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};

export const deleteImage = async (advertisementID, files, userId) => {
    try {
        const doctor = await Model.findOneAndUpdate(
            { _id: advertisementID, user: userId },
            { $pull: { images: files } },
            { new: true }
        );
        if (!doctor) {
            return { error: true, data: { message: "Doctors not found.", statusCode: 404, data: null } };
        }
        return { error: false, data: { data: null, message: "Images deleted successfully from the doctors", statusCode: 200 } };
    } catch (error) {
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};

export const activateAdvertisement = async (advertisementID, userId) => {
    try {
        const doctor = await Model.findOneAndUpdate(
            { _id: advertisementID, user: userId, is_active: false },
            { is_active: true },
            { new: true }
        );

        if (!doctor) {
            return { error: true, data: { message: "Doctors not found.", statusCode: 404, data: null } };
        }

        return { error: false, data: { data: doctor, message: "Doctors activated successfully", statusCode: 200 } };
    } catch (error) {
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};

export const deleteAdvertisement = async (advertisementID, userId) => {
    try {
        const result = await Model.deleteOne({ _id: advertisementID, user: userId });

        if (result.deletedCount === 0) {
            return { error: true, data: { message: "Doctors not found.", statusCode: 404, data: null } };
        }

        return { error: false, data: { message: "Doctors deleted successfully", statusCode: 200 } };
    } catch (error) {
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};

export default {
    addAdvertisement,
    getAdvertisement,
    getListAdvertisement,
    filterAdvertisement,
    deactivateAdvertisement,
    updateAdvertisement,
    addImage,
    activateAdvertisement,
    deleteImage,
    deleteAdvertisement
};