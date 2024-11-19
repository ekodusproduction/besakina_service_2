import mongoose from 'mongoose';

const FeaturedDataSchema = new mongoose.Schema({
    fieldname: {
        type: String,
        enum: ['type'],
        required: true
    },
    value: { type: String },
    label: { type: String }
});

const FeaturedFormData = mongoose.model('FeaturedFormData', FeaturedDataSchema);

export default FeaturedFormData;
