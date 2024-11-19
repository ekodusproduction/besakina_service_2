import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema({
    name: { type: String, required: 'Please give name of category' },
    is_active: { type: String, default: true },
}, { timestamps: true });

subCategorySchema.index({ name: 1 })
const Category = mongoose.model('Category', subCategorySchema);

export default Category;
