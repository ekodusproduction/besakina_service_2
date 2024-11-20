// redisConfig.js
import Redis from 'ioredis';
import dotenv from 'dotenv';
// import { categoriesLoader } from './data/category.seeder.js';
// import { advertisementLoader } from './data/advertisement.seeder.js';

dotenv.config();

const redisHost = process.env.REDIS_HOST || '127.0.0.1';
const redisPort = process.env.REDIS_PORT || 6379;
const redisPassword = process.env.REDIS_PASSWORD;

const redis = new Redis({
    host: redisHost,
    port: redisPort,
    password: redisPassword,
    reconnectOnError: (err) => {
        console.error('Redis connection error:', err);
        // Reconnect only on connection-related errors
        if (err.message.includes('ECONNREFUSED')) {
            return true;
        }
    },
    retryStrategy: (times) => {
        const delay = Math.min(times * 100, 3000); // Retry after increasing delay up to 3 seconds
        console.log(`Retrying Redis connection: attempt ${times}, delay ${delay}`);
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

async function connectRedis() {
    try {
        console.log('Connecting to Redis...');
        await redis.ping(); // Test connection
        console.log('Redis client connected successfully');
        
        console.log(`Redis category loading job executed at ${new Date().toISOString()}`);
        // const categoryCount = await categoriesLoader();
        // console.log(`Number of categories loaded: ${categoryCount}`);
        
        console.log(`Redis advertisement loading job executed at ${new Date().toISOString()}`);
        // const advertisementCount = await advertisementLoader();
        // console.log(`Number of advertisements loaded: ${advertisementCount}`);
    } catch (err) {
        console.error('Redis connection error:', err);
    }
}

export { redis, connectRedis };
