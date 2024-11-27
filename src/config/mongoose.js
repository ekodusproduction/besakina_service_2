import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import { connectRedis } from './Redis/redis.js'
import { logger } from '../Middlewares/logger.middleware.js';



export const mongooseConnection = async function () {

    const uri = process.env.MONGODB_URI;
    try {
        await mongoose.connect(uri);
        const db = mongoose.connection.db;
        const collections = await db.listCollections().toArray();
        console.log('Connected to MongoDB using Mongoose and reindexed all collections');

        await connectRedis()

    } catch (err) {
        logger.log(err)
        throw err;
    }
}
