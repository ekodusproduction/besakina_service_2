import { Router } from "express";
import { fileUpload } from "../../Middlewares/multer.middlewares.js";
import { createCategory, listCategory, listSubCategory, deleteSubCategory, deleteCategory, UpdateSubCategory, UpdateCategory } from "./category.controller.js";
import { jwtAuth } from "../../Middlewares/auth.middleware.js";
// import { login, sendOtp } from "./users.controller.js";
const categoryRouter = Router()

categoryRouter.post("/", jwtAuth, createCategory)
categoryRouter.get("/", listCategory)
categoryRouter.get("/:categoryId", listSubCategory)
categoryRouter.put("/:categoryId", jwtAuth, fileUpload, UpdateCategory)
categoryRouter.put("/:categoryId/subcategory/:subcategoryId", jwtAuth, fileUpload, UpdateSubCategory)
categoryRouter.delete("/:categoryId", jwtAuth, deleteCategory)
categoryRouter.delete("/:categoryId/subcategory/:subcategoryId", jwtAuth, deleteSubCategory)

export default categoryRouter  