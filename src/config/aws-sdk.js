import dotenv from "dotenv";
dotenv.config();
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from 'uuid';
import { ApplicationError } from "../ErrorHandler/applicationError.js";

const spaceBaseUrl = process.env.SP_ORIGIN_ENDPOINT;
// Define s3Client here
export const s3Client = new S3Client({
    forcePathStyle: true,
    region: "ap-south-1",
    endpoint: spaceBaseUrl,
    credentials: {
        accessKeyId: process.env.SP_SPACES_KEY,
        secretAccessKey: process.env.SP_SPACES_SECRET
    },
});

const uploadToSpaces = async (file) => {
    const params = {
        Bucket: 'besakina',
        Key: `${uuidv4()}`,
        Body: file.buffer,
        ContentType: file.mimetype
    };

    try {
        const command = new PutObjectCommand(params);
        console.log("command", command)
        const data = await s3Client.send(command);
        console.log("file data", data)
        //endpoint/object/public/besakina/2a43b29a-67ab-4e54-9952-b94ce15a4ca3
        const fileUrl = `https://baymzlfblrjzezsxitxq.supabase.co/storage/v1/object/public/besakina/${params.Key}`;
        return { fieldname: file.fieldname, path: fileUrl };
    } catch (error) {
        throw new ApplicationError('Failed to upload file to supabase', 400);
    }
};

export default uploadToSpaces;