import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import { redis } from './Redis/redis.js'

import {
    categoryListLoader,
    categorySchemaLoader,
    categoryTagsLoader
} from './Redis/data/category.seeder.js';

import {
    advertisementListLoader,
    advertisementHashLoader
} from './Redis/data/advertisement.seeder.js';

export const mongooseConnection = async function () {
    console.log('MongoDB URI:', process.env.MONGODB_URI);

    const uri = process.env.MONGODB_URI;
    try {
        await mongoose.connect(uri);
        const db = mongoose.connection.db;
        const collections = await db.listCollections().toArray();
        console.log('Connected to MongoDB using Mongoose and reindexed all collections');

        redis.on('ready', async () => {

            console.log('Redis client Redis (Inside mongoose)');
            // Call data loading functions once Redis is connected
            console.log(`Redis category loading job executed at ${new Date().toISOString()}`);
            const categoryCount = await categoryListLoader();
            console.log(`Number of categories loaded: ${categoryCount}`);

            const categorySchemaCount = await categorySchemaLoader();
            console.log(`Number of category schema loaded: ${categorySchemaCount}`);

            const categoryTagsCount = await categoryTagsLoader();
            console.log(`Number of category tags loaded: ${categoryTagsCount}`);

            console.log(`Redis advertisement loading job executed at ${new Date().toISOString()}`);

            const advertisementCount = await advertisementListLoader();
            console.log(`Number of advertisements loaded: ${advertisementCount}`);

            const advertisementHashCount = await advertisementHashLoader();
            console.log(`Number of advertisement hashes loaded: ${advertisementHashCount}`);

        })

    } catch (err) {
        console.error('Failed to connect to MongoDB using Mongoose', err);
        throw err;
    }
}
