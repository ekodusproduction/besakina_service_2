import { getDB } from "../../../config/mongodb.js";
import { ApplicationError } from "../../../ErrorHandler/applicationError.js";
import { logger } from "../../../Middlewares/logger.middleware.js";
import Featured from "./featured.model.js";

export const addAdvertisement = async (requestBody, files) => {
    try {
        requestBody.images = files;
        const result = new Featured(requestBody);
        const savedDoctor = await result.save();
        if (!savedDoctor) {
            return { error: true, data: { message: "Error adding Featured.", statusCode: 400, data: null } };
        }
        return { error: false, data: { message: "Feature added successfully", statusCode: 200, data: { id: savedDoctor._id } } };
    } catch (error) {
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};

export const getAdvertisement = async (advertisementID) => {
    try {
        const result = await Featured.findOneAndUpdate(
            { _id: advertisementID },
            { $inc: { views: 1 } },
            { new: true }
        ).populate('user');

        if (!result) {
            return { error: true, data: { message: "No Feature to show.", statusCode: 404, data: null } };
        }

        return { error: false, data: { message: "Feature", statusCode: 200, data: result } };
    } catch (error) {
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};

// Get List of Advertisements
export const getListAdvertisement = async (limit, offset) => {
    try {
        const result = await getDB().collection('advertisement').find({ is_active: true, featured: true }).
            sort({ rank: 1 }).skip(offset).limit(limit).toArray()

        if (result.length === 0) {
            return { error: true, data: { message: "No Feature to show.", statusCode: 404, data: null } };
        }
        return { error: false, data: { message: "Feature list.", statusCode: 200, data: { "Featured": result } } };
    } catch (error) {
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};



export const updateAdvertisement = async (advertisementID, updateBody, userId) => {
    try {
        if (!updateBody || typeof updateBody !== 'object') {
            return { error: true, data: { message: "Invalid request body", statusCode: 400, data: null } };
        }
        const result = await Featured.findOneAndUpdate(
            { _id: advertisementID, user: userId, featured: true },
            updateBody,
            { new: true }
        );
        if (!result) {
            return { error: true, data: { message: "Featured not updated. No matching Feature found for the provided ID.", statusCode: 404, data: null } };
        }
        return { error: false, data: { message: "Feature updated successfully", statusCode: 200, data: result } };
    } catch (error) {
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};

export const deactivateAdvertisement = async (advertisementID, userId) => {
    try {
        const result = await Featured.findOneAndUpdate(
            { _id: advertisementID, user: userId, is_active: true, featured: true },
            { is_active: false },
            { new: true }
        );
        if (!result) {
            return { error: true, data: { message: "Feature not found.", statusCode: 404, data: null } };
        }
        return { error: false, data: { message: "Feature deactivated successfully.", statusCode: 200, data: result } };
    } catch (error) {
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};

export const addImage = async (advertisementID, files, userId) => {
    try {
        const result = await Featured.findOne({ _id: advertisementID, user: userId, featured: true });
        if (!result) {
            return { error: true, data: { message: "Feature not found.", statusCode: 404, data: null } };
        }
        result.images.push(...files);
        await result.save();
        return { error: false, data: { data: [files[0]], message: "Feature image has been added.", statusCode: 200 } };
    } catch (error) {
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};

export const deleteImage = async (advertisementID, files, userId) => {
    try {

        const result = await Featured.findOneAndUpdate(
            { _id: advertisementID, user: userId },
            { $pull: { images: files } },
            { new: true }
        );
        if (!result) {
            return { error: true, data: { message: "Feature not found.", statusCode: 404, data: null } };
        }
        return { error: false, data: { data: null, message: "Images deleted successfully from the Feature.", statusCode: 200 } };
    } catch (error) {
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};

export const activateAdvertisement = async (advertisementID, userId) => {
    try {
        const result = await Featured.findOneAndUpdate(
            { _id: advertisementID, user: userId, is_active: false },
            { is_active: true },
            { new: true }
        );

        if (!result) {
            return { error: true, data: { message: "Feature not found.", statusCode: 404, data: null } };
        }

        return { error: false, data: { data: result, message: "Feature activated successfully", statusCode: 200 } };
    } catch (error) {
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};

export const deleteAdvertisement = async (advertisementID, userId) => {
    try {
        const result = await Featured.deleteOne({ _id: advertisementID, user: userId });

        if (result.deletedCount === 0) {
            return { error: true, data: { message: "Feature not found.", statusCode: 404, data: null } };
        }

        return { error: false, data: { message: "Feature deleted successfully", statusCode: 200 } };
    } catch (error) {
        logger.info(error);
        throw new ApplicationError(error, 500);
    }
};



export default {
    addAdvertisement,
    getAdvertisement,
    getListAdvertisement,
    deactivateAdvertisement,
    updateAdvertisement,
    addImage,
    activateAdvertisement,
    deleteImage,
    deleteAdvertisement
};