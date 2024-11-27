import { Router } from "express";
import {
    deactivateAdvertisement, updateAdvertisement, filterAdvertisement,
    getListAdvertisement, addAdvertisement, addImage, deleteImage, getAdvertisement, activateAdvertisement,
    deleteAdvertisement,
} from "./base.controller.js"

import { requestBodyValidator } from "../../Middlewares/validationMiddleware.js";
import { fileUpload } from "../../Middlewares/multer.middlewares.js";
import { jwtAuth } from "../../Middlewares/auth.middleware.js";
import { advCategoryValidationMiddleware } from "../../Middlewares/advCategory.middleware.js";
import { checkUserProfileCompletion } from "../Users/userMiddlewares.js";
const advRouter = Router()

advRouter.get("/category/:categoryId/list", getListAdvertisement)
advRouter.get("/advertisement/:advertisementId", getAdvertisement)
advRouter.get("/filter", filterAdvertisement)

// jwt
advRouter.post("/category/:categoryId", jwtAuth,checkUserProfileCompletion, advCategoryValidationMiddleware, fileUpload(), addAdvertisement)
advRouter.put("/category/:categoryId", jwtAuth, updateAdvertisement)
advRouter.put("/activate/advertisement/:advertisementId", jwtAuth, activateAdvertisement)
advRouter.delete("/deactivate/advertisement/:advertisementId", jwtAuth, deactivateAdvertisement)

advRouter.delete("/images/advertisement/:advertisementId", jwtAuth, requestBodyValidator, deleteImage)
advRouter.post("/images/advertisement/:advertisementId", jwtAuth, fileUpload("doctors"), addImage)
advRouter.delete("/advertisement/:advertisementId", jwtAuth, deleteAdvertisement)

export default advRouter