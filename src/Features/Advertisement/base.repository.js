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
            console.log('inside else', baseSchema);
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
        logger.error(error);
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
        logger.error(error);
        throw new ApplicationError(error, 500);
    }
};


export const getListAdvertisement = async (categoryId = null, limit, offset) => {
    try {
        let result;
        console.log("category", categoryId)
        if (categoryId) {
            console.log('inside if repository', categoryId);

            result = await getDB().collection('advertisement').find({ is_active: true, categoryId: new ObjectId(categoryId) }).sort({ created_at: -1 }).skip(offset)
                .limit(limit).toArray();
        } else {
            console.log('inside if repository', categoryId);

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
        logger.error(error);
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



export const updateAdvertisement = async (advertisementId, updateBody, userId) => {
    try {
        if (!updateBody || typeof updateBody !== 'object') {
            return { error: true, data: { message: "Invalid request body", statusCode: 400, data: null } };
        }
        const result = await getDB().collection("advertisement").updateOne(
            { _id: new ObjectId(advertisementId), user: new ObjectId(userId) },
            { $set: updateBody }
        );

        if (!result) {
            return { error: true, message: `${advertisementId} not updated. No matching ${advertisementId} found for the provided ID.`, statusCode: 404, data: null };
        }
        return { error: false, message: `${advertisementId} updated successfully`, statusCode: 200, data: result };
    } catch (error) {
        logger.error(error);
        throw new ApplicationError(error, 500);
    }
};

export const deactivateAdvertisement = async (advertisementId, userId) => {
    try {
        const result = await getDB().collection("advertisement").updateOne(
            { _id: new ObjectId(advertisementId), user: new ObjectId(userId), is_active: true },
            { $set: { is_active: false } }
        );
        if (!result) {
            return {
                error: true, message: `${advertisementId}  not found.`, statusCode: 404, data: null
            };
        }
        return {
            error: false, message: `Advertisement deactivated.`, statusCode: 200, data: result
        }
    } catch (error) {
        logger.error(error);
        throw new ApplicationError(error, 500);
    }
};

export const addImage = async (advertisementId, files, userId) => {
    try {
        const result = await getDB().collection("advertisement").updateOne(
            { _id: new ObjectId(advertisementId), user: new ObjectId(userId) },
            { $push: { images: files[0] } }
        );

        if (result.matchedCount === 0) {
            return { error: true, message: `${advertisementId} not found.`, statusCode: 404, data: null };
        }
        result.images.push(files[0]);
        await result.save();
        return { error: false, message: `${advertisementId} image has been added.`, data: [files[0]], statusCode: 200 };
    } catch (error) {
        logger.error(error);
        throw new ApplicationError(error, 500);
    }
};

export const deleteImage = async (advertisementId, files, userId) => {
    try {
        const result = await getDB().collection("advertisement").updateOne(
            { _id: new ObjectId(advertisementId), user: new ObjectId(userId) },
            { $pull: { images: files[0] } }
        );
        if (result.matchedCount === 0) {
            return { error: true, message: `${advertisementId} not found.`, statusCode: 404, data: null };
        }
        return { error: false, message: `${advertisementId} Images deleted successfully.`, data: null, statusCode: 200 }
    } catch (error) {
        logger.error(error);
        throw new ApplicationError(error, 500);
    }
};

export const activateAdvertisement = async (advertisementId, userId) => {
    try {
        const result = await getDB().collection("advertisement").updateOne(
            { _id: new ObjectId(advertisementId), user: new ObjectId(userId) },
            { $set: { is_active: true } }
        );

        if (result.matchedCount === 0) {
            return { error: true, message: `${advertisementId} not found.`, statusCode: 404, data: null };
        }

        return { error: false, message: `Advertisement activated.`, data: null, statusCode: 200 }
    } catch (error) {
        logger.error(error);
        throw new ApplicationError(error, 500);
    }
};

export const deleteAdvertisement = async (advertisementId, userId) => {
    try {
        const result = await getDB().collection("advertisement").deleteOne({ _id: new ObjectId(advertisementId), user: new ObjectId(userId) });

        if (result.deletedCount === 0) {
            return { error: true, message: `${advertisementId} not found.`, statusCode: 404, data: null };
        }

        return { error: false, message: `Advertisement deleted.`, data: null, statusCode: 200 }
    } catch (error) {
        logger.error(error);
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