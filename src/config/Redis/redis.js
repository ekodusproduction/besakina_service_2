import Redis from 'ioredis';
import dotenv from 'dotenv';

import {
    categoryListLoader,
    categorySchemaLoader,
    categoryTagsLoader
} from './data/category.seeder.js';

import {
    advertisementListLoader,
    advertisementHashLoader
} from './data/advertisement.seeder.js';
dotenv.config();

const redisHost = process.env.REDIS_HOST || '127.0.0.1';
const redisPort = process.env.REDIS_PORT || 6379;
const redisPassword = process.env.REDIS_PASSWORD;

const config = {
    host: redisHost,
    port: redisPort,
    reconnectOnError: (err) => {
        console.error('Redis connection error:', err);
        if (err.message.includes('ECONNREFUSED')) {
            return true;
        }
        return false;
    },
    retryStrategy: (times) => {
        const delay = Math.min(times * 100, 3000); // Exponential backoff
        console.log(`Retrying Redis connection: attempt ${times}, delay ${delay}ms`);
        return delay;
    },
}

let redis
// Function to log connection status
const connectRedis = async function () {
    try {
        redis = new Redis(config);
        redis.on('connect', async () => {
            console.log('Redis client connected');

        });
        redis.on('error', (err) => {
            console.error('Redis Client Error:', err);
        });

        redis.on('close', () => {
            console.log('Redis client disconnected');
        });
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
        redis.on('reconnecting', () => {
            console.log('Reconnecting to Redis...');
        });
    } catch (err) {
        console.error('Redis Error:', err);
    }
}
// Call loaders when Redis is connected



// Export redis client and connectRedis function
export { redis, connectRedis }
