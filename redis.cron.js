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
        logger.info(`Cron job started at ${new Date().toISOString()}`);

        // Load categories
        const categoryCount = await categoriesLoader();
        logger.info(`Number of categories loaded: ${categoryCount}`);

        const categorySchemaLoaderCount = await categorySchemaLoader();
        logger.info(`Number of category schemas loaded: ${categorySchemaLoaderCount}`);

        const categoryTagsLoaderCount = await categoryTagsLoader();
        logger.info(`Number of category tags loaded: ${categoryTagsLoaderCount}`);

        // Load advertisements
        const advertisementCount = await advertisementListLoader();
        logger.info(`Number of advertisements loaded: ${advertisementCount}`);

        const advertisementJsonLoaderCount = await advertisementHashLoader();
        logger.info(`Number of advertisements loaded into Redis hash: ${advertisementJsonLoaderCount}`);
    } catch (err) {
        logger.error("Error in nightly cron job:", err);
    }
});

// Start the cron job
cronNightlyJob.start();
logger.info('Nightly cron job has been started.');
