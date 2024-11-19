import mongoose from 'mongoose';
import Base from '../../BaseModel/base.model.js';

const featuredSchema = new mongoose.Schema({
    type: { type: String, required: true },
    name: { type: String, required: false, default: null },
    category: { type: String, default: null },
});

const Featured = Base.discriminator('featured', featuredSchema);

export default Featured;
