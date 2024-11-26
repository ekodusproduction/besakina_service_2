import mongoose from 'mongoose';

const commonOptions = {
    collection: 'advertisement',
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
};

const priceValidator = {
    validator: function (v) {
        if (v === null) return true;
        const num = parseFloat(v);
        return !isNaN(num);
    },
    message: props => `${props.value} is not a valid price!`
};

export const baseSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    images: [{ type: String, required: true }],
    video: { type: String },
    map_location: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
    verified: { type: Boolean, default: true },
    is_active: { type: Boolean, default: true },
    tags: [{ type: String, default: null }],
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categories', required: true },
    subcategory: [{ type: String, default: null }],
    category: { type: String }, // redunduncy
    subcategoryId: [{ type: String, default: null }],
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: Number, required: true },
    name: { type: String, required: false, default: null },
    description: { type: String, required: true },
    price: { type: Number, default: null, validate: priceValidator },
    views: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
    forSale: { type: Boolean, default: true },
    ratingSum: { type: Number, default: 0 },
    totalRatings: { type: Number, default: 0 },
    reviews: [{ type: String, required: true }],
}, commonOptions);

baseSchema.index({ "categoryId": 1 })
baseSchema.index({ "_id": 1, "user": 1 })
baseSchema.index({ "is_active": 1, "created_at": -1 });
baseSchema.index({
    name: 'text',
    tags: 'text',
});

baseSchema.pre('save', function (next) {
    for (let key in this.toObject()) {
        if (this[key] === "null" || this[key] === "") {
            this[key] = null;
        }
    }
    next();
});

const Base = mongoose.model('Base', baseSchema);
export { baseSchema }
export default Base;
