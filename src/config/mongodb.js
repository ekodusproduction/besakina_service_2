import dotenv from 'dotenv';
dotenv.config();
import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URI;
let client;
export const connectToMongoDB = async () => {
    try {
        client = await MongoClient.connect(url);
        const db = client.db();
    } catch (err) {
        throw err;
    }
};

export const getDB = () => {
    if (!client) {
        throw new Error("You must connect to MongoDB first!");
    }
    return client.db();
};
