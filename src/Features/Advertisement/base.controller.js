import { sendError, sendResponse } from "../../Utility/response.js";
import repository from "./base.repository.js";
import { logger } from "../../Middlewares/logger.middleware.js";

export const addAdvertisement = async (req, res, next) => {
    try {
        req.body.user = req.user
        const result = await repository.addAdvertisement(req.body, req.images, req.category, req.schema);
        if (result.error) {
            return await sendError(res, result.message, result.statusCode, result.data);
        }
        return await sendResponse(res, result.message, result.statusCode, result.data);
    } catch (error) {
        logger.info(error)
        next(error);
    }
}

export const getAdvertisement = async (req, res, next) => {
    try {
        const advertisementID = req.params.advertisementId;
        const result = await repository.getAdvertisement(advertisementID);
        if (result.error) {
            return await sendError(res, result.message, result.statusCode)
        }
        return await sendResponse(res, result.message, result.statusCode, result.data);
    } catch (error) {
        logger.info(error)
        next(error);
    }
};

export const getListAdvertisement = async (req, res, next) => {
    try {
        const category = req.query?.categoryId || null
        const limit = parseInt(req.query.limit) || 100;
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * limit;
        const result = await repository.getListAdvertisement(category, limit, offset);
        if (result.error) {
            return await sendError(res, result.message, result.statusCode)
        }
        return await sendResponse(res, result.message, result.statusCode, result.data);
    } catch (error) {
        logger.info(error)
        next(error);
    }
};

export const filterAdvertisement = async (req, res, next) => {
    try {
        const result = await repository.filterAdvertisement(req.query);
        if (result.error) {
            return await sendError(res, result.message, result.statusCode, result.data)
        }
        return await sendResponse(res, result.message, result.statusCode, result.data);
    } catch (error) {
        logger.info(error)
        next(error);
    }
};

export const updateAdvertisement = async (req, res, next) => {
    try {
        const result = await repository.updateAdvertisement(req.params.advertisementId, req.body, req.user);
        if (result.error) {
            return await sendError(res, result.message, result.statusCode)
        }
        return await sendResponse(res, result.message, result.statusCode);
    } catch (error) {
        logger.info(error)
        next(error);
    }
};

export const deactivateAdvertisement = async (req, res, next) => {
    try {
        const result = await repository.deactivateAdvertisement(req.params.advertisementId, req.user);
        if (result.error) {
            return await sendError(res, result.message, result.statusCode)
        }
        return await sendResponse(res, result.message, result.statusCode);
    } catch (error) {
        logger.info(error)
        next(error);
    }
}

export const addImage = async (req, res, next) => {
    try {
        const result = await repository.addImage(req.params.advertisementId, req.body.images, req.user);
        if (result.error) {
            return await sendError(res, result.message, result.statusCode)
        }
        return await sendResponse(res, result.message, 200, result.data);
    } catch (error) {
        logger.info(error)
        next(error);
    }
};

export const deleteImage = async (req, res, next) => {
    try {
        const result = await repository.deleteImage(req.params.advertisementId, req.body.images, req.user);
        if (result.error) {
            return await sendError(res, result.message, result.statusCode)
        }
        return await sendResponse(res, result.data.message, 200);
    } catch (error) {
        logger.info(error)
        next(error);
    }
};

export const activateAdvertisement = async (req, res, next) => {
    try {
        const result = await repository.activateAdvertisement(req.params.advertisementId, req.user);
        if (result.error) {
            return await sendError(res, result.message, result.statusCode)
        }
        return await sendResponse(res, result.message, 200);
    } catch (error) {
        logger.info(error)
        next(error);
    }
};

export const deleteAdvertisement = async (req, res, next) => {
    try {
        const result = await repository.deleteAdvertisement(req.params.advertisementId, req.user);
        if (result.error) {
            return await sendError(res, result.message, result.statusCode)
        }
        return await sendResponse(res, result.message, 200);
    } catch (error) {
        logger.info(error)
        next(error);
    }
};