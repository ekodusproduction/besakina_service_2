// redisConfig.js
import { createClient } from 'redis';
import dotenv from 'dotenv';
import { categoriesLoader } from './data/category.seeder.js';
import { advertisementLoader } from './data/advertisement.seeder.js';

dotenv.config();

const redisHost = process.env.REDIS_HOST || '127.0.0.1';
const redisPort = process.env.REDIS_PORT || 6379;
const redisPassword = process.env.REDIS_PASSWORD;

const redisClient = createClient({
    url: `redis://${redisHost}:${redisPort}`,
    password: redisPassword,
    socket: {
        reconnectStrategy: (retries) => Math.min(retries * 100, 3000)
    }
});

redisClient.on('error', (err) => {
    console.error('Redis Client Error', err);
});

redisClient.on('connect', () => {
    console.log('Redis client connected');
});

redisClient.on('end', () => {
    console.log('Redis client disconnected');
});

redisClient.on('reconnecting', (delay, attempt) => {
    console.log(`Reconnecting to Redis: attempt ${attempt}, delay ${delay}`);
});

async function connectRedis() {
    try {
        await redisClient.connect();

        console.log('Redis client connected successfully');
        console.log(`Redis category loading job executed at ${new Date().toISOString()}`);
        const categoryCount = await categoriesLoader();
        console.log(`Number of categories loaded: ${categoryCount}`);
        console.log(`Redis advertisement loading job executed at ${new Date().toISOString()}`);
        const advertisementCount = await advertisementLoader();
        console.log(`Number of advertisement loaded: ${advertisementCount}`);

    } catch (err) {
        console.error('Redis connection error', err);
    }
}

export { redisClient, connectRedis };
