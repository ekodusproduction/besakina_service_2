import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import { connectRedis } from './Redis/redis.js'

export const mongooseConnection = async function () {
    console.log('MongoDB URI:', process.env.MONGODB_URI);

    const uri = process.env.MONGODB_URI;
    try {
        await mongoose.connect(uri);
        const db = mongoose.connection.db;
        const collections = await db.listCollections().toArray();

        // const redis = await connectRedis()

        console.log('Connected to MongoDB using Mongoose and reindexed all collections');
    } catch (err) {
        console.error('Failed to connect to MongoDB using Mongoose', err);
        throw err;
    }
}
