import fs from "fs/promises";

export const deleteFiles = async function (files) {
    try {
        // Map each file deletion to a Promise
        const filePaths = files.map(file => {
            return file.path
        });
        console.log(filePaths)
        // Map each file deletion to a Promise
        const deletePromises = filePaths.map(path => fs.unlink(path));

        // Await all file deletion Promises
        await Promise.all(deletePromises);
    } catch (error) {
        console.error("Error deleting files:", error);
        throw error;
    }
}; 
