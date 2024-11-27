import mongoose from "mongoose";
import { baseSchema } from "../BaseModel/base.model.js";

const featured = new mongoose.Schema({
    featured: { type: Boolean, default: true }
})

const Featured = baseSchema.add(featured)

export default Featured