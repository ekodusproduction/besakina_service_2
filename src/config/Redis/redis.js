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

const redis = new Redis({
    host: redisHost,
    port: redisPort,
    reconnectOnError: (err) => {
        console.error('Redis connection error:', err);
        // Reconnect only for certain errors (e.g., ECONNREFUSED)
        if (err.message.includes('ECONNREFUSED')) {
            return true;
        }
        return false; // Other errors won't trigger reconnection by default
    },
    retryStrategy: (times) => {
        const delay = Math.min(times * 100, 3000); // Exponential backoff with cap
        console.log(`Retrying Redis connection: attempt ${times}, delay ${delay}ms`);
        return delay;
    },
});

redis.on('connect', () => {
    console.log('Redis client connected');
});

redis.on('ready', () => {
    console.log('Redis client ready');
});

redis.on('error', (err) => {
    console.error('Redis Client Error:', err);
});

redis.on('close', () => {
    console.log('Redis client disconnected');
});

redis.on('reconnecting', () => {
    console.log('Reconnecting to Redis...');
});

// Function to check Redis connection
async function connectRedis() {
    try {
        console.log('Attempting to connect to Redis...');

        // Explicitly call redis.connect()
        await redis.connect();

        if (!redis.isReady) {
            console.error('Redis client is not ready after connection attempt!');
            return;
        }

        console.log('Redis client connected successfully. Ping response:', await redis.ping());

        // Example of loading data using Redis if needed:
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
    } catch (err) {
        console.error('Redis connection error:', err);
    }
}


export { redis, connectRedis };
