import { createClient } from 'redis';
import dotenv from 'dotenv';

import {
    categoryListLoader,
    categoryTagsLoader,
} from './data/category.seeder.js';

import {
    advertisementListLoader,
    advertisementHashLoader,
} from './data/advertisement.seeder.js';

dotenv.config();

const redisHost = process.env.REDIS_HOST || '127.0.0.1';
const redisPort = process.env.REDIS_PORT || 6379;
const redisPassword = process.env.REDIS_PASSWORD;

const redisConfig = {
    socket: {
        host: redisHost,
        port: redisPort,
        reconnectStrategy: (retries) => {
            const delay = Math.min(retries * 100, 3000); // Exponential backoff
            console.log(`Retrying Redis connection: attempt ${retries}, delay ${delay}ms`);
            return delay;
        },
    },
    // password: redisPassword,
};

let redis;

// Function to log connection status and initialize Redis client
const connectRedis = async () => {
    try {
        redis = createClient(redisConfig);

        redis.on('connect', () => {
            console.log('Redis client connected');
        });

        redis.on('ready', async () => {
            console.log('Redis client is ready');

            // Custom JSON command can be directly invoked; redis 6.2+ supports JSON.SET
            console.log(`Redis category loading job executed at ${new Date().toISOString()}`);
            const categoryCount = await categoryListLoader();
            console.log(`Number of categories loaded: ${categoryCount}`);

            // const categorySchemaCount = await categorySchemaLoader();
            // console.log(`Number of category schema loaded: ${categorySchemaCount}`);

            const categoryTagsCount = await categoryTagsLoader();
            console.log(`Number of category tags loaded: ${categoryTagsCount}`);

            console.log(`Redis advertisement loading job executed at ${new Date().toISOString()}`);

            const advertisementCount = await advertisementListLoader();
            console.log(`Number of advertisements loaded: ${advertisementCount}`);

            const advertisementHashCount = await advertisementHashLoader();
            console.log(`Number of advertisement hashes loaded: ${advertisementHashCount}`);
        });

        redis.on('error', (err) => {
            console.error('Redis Client Error:', err);
        });

        redis.on('end', () => {
            console.log('Redis client disconnected');
        });

        redis.on('reconnecting', () => {
            console.log('Reconnecting to Redis...');
        });

        await redis.connect();
    } catch (err) {
        console.error('Redis Error:', err);
    }
};

// Export redis client and connectRedis function
export { redis, connectRedis };
