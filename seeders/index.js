import { addDoctors } from "./doctors.seeder.js";
import { addEducation } from "./education.seeder.js";
import { addHospitality } from "./hospitality.seeder.js";
import { addHospitals } from "./hospitals.seeder.js";
import { addPlans } from "./plan.seeder.js";
import { addProperties } from "./property.seeder.js";
import { addVehicles } from "./vehicles.seeder.js";
import { addCategories } from "./category/category.js";

export const seeder = async () => {
    try {
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjczYzZiZTJiMDFmZDA0MTgwYzk0ZjBiIiwicGxhbl9pZCI6bnVsbCwiaWF0IjoxNzMyMjc0NjI4LCJleHAiOjE3NjM4MTA2Mjh9.oOrEFSSi1rkgsM3OrZvl7MR6EcNbP_MZ2DbJfE5wuKk`
        const baseUrl = 'besakina.com'
        await addCategories(token, baseUrl);
        // await addProperties(token, baseUrl);
        // await addVehicles(token, baseUrl)
        // await addDoctors(token, baseUrl)
        // await addEducation(token, baseUrl)
        // await addHospitality(token, baseUrl)
        // await addHospitals(token, baseUrl)
        console.log("Seeder completed successfully.");
    } catch (error) {
        console.error("Error in seeder:", error);
    }
}

// Call seeder function
seeder();