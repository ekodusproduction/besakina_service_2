// import cron from 'node-cron';
// import { categoriesLoader } from './data/category.seeder.js';
// import { advertisementLoader } from './data/advertisement.seeder.js';

// const cronCategoryJob = cron.schedule("0 * * * *", async () => {
//     try {
//         console.log(`Cron job executed at ${new Date().toISOString()}`);
//         const categoryCount = await categoriesLoader();
//         console.log(`Number of categories loaded: ${categoryCount}`);

//     } catch (err) {
//         logger.error("Error in cron job:", err);
//     }
// });

// const cronAdvertisementJob = cron.schedule("0 * * * *", async () => {
//     try {
//         console.log(`Cron job executed at ${new Date().toISOString()}`);
//         const advertisementCount = await advertisementLoader();
//         console.log(`Number of advertisement loaded: ${advertisementCount}`);
//     } catch (err) {
//         logger.error("Error in cron job:", err);
//     }
// });
// // Start the cron job
// cronCategoryJob.start();
// cronAdvertisementJob.start();
// console.log('Cron job has been started.');