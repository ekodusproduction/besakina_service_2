import { Router } from "express";
import {
    deactivateAdvertisement, updateAdvertisement, 
    getListAdvertisement, addAdvertisement, addImage, deleteImage, getAdvertisement, activateAdvertisement,
    deleteAdvertisement
} from "./featured.controller.js"

import { fileUpload } from "../../../Middlewares/multer.middlewares.js";
import { jwtAuth } from "../../../Middlewares/auth.middleware.js";
import { requestBodyValidator } from "../../../Middlewares/validationMiddleware.js";
import { checkUserProfileCompletion, checkUserPlanQuotaPermissions } from "../../Users/userMiddlewares.js";

const featuredRouter = Router()

//protected routes id=> advertisement id
featuredRouter.post("/add", jwtAuth, fileUpload("featured"), checkUserProfileCompletion, addAdvertisement)
featuredRouter.put("/id/:id", jwtAuth, updateAdvertisement)
featuredRouter.put("/activate/id/:id", jwtAuth, activateAdvertisement)
featuredRouter.delete("/deactivate/id/:id", jwtAuth, deactivateAdvertisement)
featuredRouter.get("/id/:id", getAdvertisement)
// images
//id =>advertisement id
featuredRouter.delete("/image/delete/id/:id", jwtAuth, requestBodyValidator, deleteImage)
featuredRouter.post("/images/id/:id", jwtAuth, fileUpload("featured"), addImage)
// list user own advertisement //id => user id
//category => doctors, education, hospitals, hospitality, vehicles, properties
featuredRouter.get("/list", getListAdvertisement)
featuredRouter.delete("/id/:id", jwtAuth, deleteAdvertisement)

export default featuredRouter