import mongoose, { Schema } from "mongoose";

const subCategorySchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    is_active: { type: Boolean, default: true },
    tags: [{ type: String, trim: true }],
    icon: { type: String }
});

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 25, trim: true },
    is_active: { type: Boolean, default: true },
    tags: [{ type: String, trim: true }],
    subcategory: [subCategorySchema],
    icon: { type: String },
    rank: { type: Number }, 
    sellSchema:{type:object},
    marketingSchema:{type:object}
});
categorySchema.index({  is_active: 1, rank: 1 })
const Category = mongoose.model("Category", categorySchema);
export default Category;
