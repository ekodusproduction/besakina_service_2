import Redis from 'ioredis';
import dotenv from 'dotenv';


dotenv.config();

const redisHost = process.env.REDIS_HOST || '127.0.0.1';
const redisPort = process.env.REDIS_PORT || 6379;
const redisPassword = process.env.REDIS_PASSWORD;

const redis = new Redis({
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
});

// Function to log connection status

// Call loaders when Redis is connected

redis.on('connect', async () => {
    console.log('Redis client connected');

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

// Export redis client and connectRedis function
export { redis }
