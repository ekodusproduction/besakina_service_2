import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: { type: String, required: 'Please give the name of category' },
    is_active: { type: String, default: true },
    rank: { type: Number, default: null },
    subcategory: [{
        name: { type: String }, is_active: { type: Boolean, default: true },
    }]
}
    ,
    {
        timestamps: true
    });

categorySchema.index({ name: 1, is_active: 1, rank: 1 })
const Category = mongoose.model('categories', categorySchema);

export default Category;
