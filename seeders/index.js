import { addCategories } from "./category/category.js";

export const seeder = async () => {
    try {
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjczYzZiZTJiMDFmZDA0MTgwYzk0ZjBiIiwicGxhbl9pZCI6bnVsbCwiaWF0IjoxNzMyMjc0NjI4LCJleHAiOjE3NjM4MTA2Mjh9.oOrEFSSi1rkgsM3OrZvl7MR6EcNbP_MZ2DbJfE5wuKk`
        const baseUrl = 'besakina.com'
        await addCategories(token, baseUrl);
        console.log("Seeder completed successfully.");
    } catch (error) {
        console.error("Error in seeder:", error);
    }
}
seeder();