import repository from "./banner.repository.js";
import { logger } from "../../Middlewares/logger.middleware.js";
import { sendError, sendResponse } from "../../Utility/response.js";

export const addBanner = async (req, res, next) => {
    try {
        req.body.user = req.user;
        const result = await repository.addBanner(req.body, req.images);
        if (result.error) {
            return sendError(res, result.data.message, result.data.statusCode);
        }
        return sendResponse(res, result.data.message, 201, result.data.data);
    } catch (error) {
        logger.error(error);
        next(error);
    }
};

export const getBanner = async (req, res, next) => {
    try {
        const { type } = req.query;
        const result = await repository.getBanner(type);
        if (result.error) {
            return sendError(res, result.data.message, result.data.statusCode);
        }
        return sendResponse(res, result.data.message, 200, result.data.data);
    } catch (error) {
        logger.error(error);
        next(error);
    }
};

export const editBanner = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await repository.editBanner(id, req.body, req.files);
        if (result.error) {
            return sendError(res, result.data.message, result.data.statusCode);
        }
        return sendResponse(res, result.data.message, 200);
    } catch (error) {
        logger.error(error);
        next(error);
    }
};

export const deleteBanner = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await repository.deleteBanner(id);
        if (result.error) {
            return sendError(res, result.data.message, result.data.statusCode);
        }
        return sendResponse(res, result.data.message, 200);
    } catch (error) {
        logger.error(error);
        next(error);
    }
};
