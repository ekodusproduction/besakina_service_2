import { Router } from "express";
import {
    deactivateAdvertisement, updateAdvertisement, filterAdvertisement,
    getListAdvertisement, addAdvertisement, addImage, deleteImage, getAdvertisement, activateAdvertisement,
    deleteAdvertisement,
} from "./base.controller.js"

import { requestBodyValidator } from "../../../Middlewares/validationMiddleware.js";
import { fileUpload } from "../../../Middlewares/multer.middlewares.js";
import { jwtAuth } from "../../../Middlewares/auth.middleware.js";
import { advCategoryValidationMiddleware } from "../../../Middlewares/advCategory.middleware.js";
const advRouter = Router()
//protected routes id=> advertisement id
advRouter.post("/category/:categoryId", jwtAuth, advCategoryValidationMiddleware, fileUpload(), addAdvertisement)
advRouter.get("/filter", filterAdvertisement)
advRouter.put("/id/:id", jwtAuth, updateAdvertisement)
advRouter.put("/activate/id/:id", jwtAuth, activateAdvertisement)
advRouter.delete("/deactivate/id/:id", jwtAuth, deactivateAdvertisement)
advRouter.get("/id/:id", getAdvertisement)
//id =>advertisement id
advRouter.delete("/image/delete/id/:id", jwtAuth, requestBodyValidator, deleteImage)
advRouter.post("/images/id/:id", jwtAuth, fileUpload("doctors"), addImage)
//category => doctors, education, hospitals, hospitality, vehicles, properties
advRouter.get("/list", getListAdvertisement)
advRouter.delete("/id/:id", jwtAuth, deleteAdvertisement)

// data 
// advRouter.get("/expertise", listExpertise)
// advRouter.post("/expertise", jwtAuth, addExpertise)
// advRouter.put("/expertise/id/:id", jwtAuth, editExpertise)
// advRouter.delete("/expertise/id/:id", jwtAuth, deleteExpertise)

export default advRouter