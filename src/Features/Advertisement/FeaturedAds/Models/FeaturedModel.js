import mongoose from 'mongoose';
import Base from '../../BaseModel/base.model.js';

const featuredSchema = new mongoose.Schema({
    featured: {type: Boolean, default: true}
});

const Featured = Base.discriminator('featured', featuredSchema);

export default Featured;
