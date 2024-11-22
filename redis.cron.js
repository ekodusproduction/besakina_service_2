import cron from 'node-cron';
import {
    categoriesLoader,
    categorySchemaLoader,
    categoryTagsLoader
} from './src/config/Redis/data/category.seeder.js';
import {
    advertisementListLoader,
    advertisementHashLoader
} from './src/config/Redis/data/advertisement.seeder.js';
import { logger } from './Middlewares/logger.middleware.js';

// Cron job to run every night at 2 AM
const cronNightlyJob = cron.schedule("0 2 * * *", async () => {
    try {
        console.log(`Cron job executed at ${new Date().toISOString()}`);
        logger.info(`Cron job started at ${new Date().toISOString()}`);

        // Load categories
        const categoryCount = await categoriesLoader();
        console.log(`Number of categories loaded: ${categoryCount}`);
        logger.info(`Number of categories loaded: ${categoryCount}`);

        const categorySchemaLoaderCount = await categorySchemaLoader();
        console.log(`Number of category schemas loaded: ${categorySchemaLoaderCount}`);
        logger.info(`Number of category schemas loaded: ${categorySchemaLoaderCount}`);

        const categoryTagsLoaderCount = await categoryTagsLoader();
        console.log(`Number of category tags loaded: ${categoryTagsLoaderCount}`);
        logger.info(`Number of category tags loaded: ${categoryTagsLoaderCount}`);

        // Load advertisements
        const advertisementCount = await advertisementListLoader();
        console.log(`Number of advertisements loaded: ${advertisementCount}`);
        logger.info(`Number of advertisements loaded: ${advertisementCount}`);

        const advertisementJsonLoaderCount = await advertisementHashLoader();
        console.log(`Number of advertisements loaded into Redis hash: ${advertisementJsonLoaderCount}`);
        logger.info(`Number of advertisements loaded into Redis hash: ${advertisementJsonLoaderCount}`);
    } catch (err) {
        console.error("Error in nightly cron job:", err);
        logger.error("Error in nightly cron job:", err);
    }
});

// Start the cron job
cronNightlyJob.start();
console.log('Nightly cron job has been started.');
logger.info('Nightly cron job has been started.');
