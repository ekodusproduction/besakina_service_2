import { categories } from "./besakina_dev.category.js";
import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);


export const addCategories = async (token, baseUrl) => {


    try {
        for (const propertyData of categories) {
            const data = new FormData();
            for (const [key, value] of Object.entries(propertyData)) {
                if (key === 'images') {
                    if (Array.isArray(value)) {
                        for (const image of value) {
                            data.append('images', fs.createReadStream(path.resolve("seeders", "images", 'doctors', image)));
                        }
                    }
                } else {
                    data.append(key, value.toString());
                }
            }

            const config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `https://${baseUrl}/dev/api/category`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    ...data.getHeaders()
                },
                data: data
            };

            const response = await axios.request(config);
            console.log(JSON.stringify(response.data.data));
        }
    } catch (error) {
        console.log(error);
    }
}
