import { Type } from "@aws-sdk/client-s3";
import mongoose, { Schema } from "mongoose";

const subCategorySchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    is_active: { type: Boolean, default: true },
    tags: [{ type: String, trim: true }],
    icon: { type: String }
});

const sellSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    modelName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const marketingSchema = new mongoose.Schema({
    services: [{
        name: { type: String, required: true }
    }],
    serviceTime: { type: String }
})

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 25, trim: true },
    is_active: { type: Boolean, default: true },
    tags: [{ type: String, trim: true }],
    subcategory: [subCategorySchema],
    icon: { type: String },
    rank: { type: Number },
    sellSchema: sellSchema,
    marketingSchema: marketingSchema
});

categorySchema.index({ is_active: 1, rank: 1 })
const Category = mongoose.model("Category", categorySchema);
export default Category;
