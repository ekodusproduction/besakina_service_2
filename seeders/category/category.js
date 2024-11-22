import { categories } from "./besakina_dev.category.js";
import axios from 'axios';
import FormData from 'form-data';
import path from 'path';

// Resolve __dirname correctly
const __dirname = path.dirname(new URL(import.meta.url).pathname);

/**
 * Add multiple categories by sending POST requests.
 * @param {string} token - Authorization token.
 * @param {string} baseUrl - Base URL of the API.
 */
export const addCategories = async (token, baseUrl) => {
    try {
        for (const category of categories) {
          
            

            // Axios configuration for the request
            const config = {
                method: 'post',
                url: `https://${baseUrl}/dev/api/category`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    ...data.getHeaders(),
                },
                data: category,
            };

            // Make the API request
            const response = await axios.request(config);
            console.log("Category added successfully:", JSON.stringify(response.data.data));
        }
    } catch (error) {
        console.error("Error adding category:", error.response?.data || error.message);
    }
};
