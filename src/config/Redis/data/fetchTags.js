import { getDB } from "../../mongodb.js"; // Import your MongoDB connection utility

// Function to get category data with combined tags from category and subcategory
export const getCategoryWithTags = async function () {
    try {
        const result = await getDB().collection("category").aggregate([
            {
                $match: { is_active: true }  // Only active categories
            },
            {
                $unwind: "$subcategory"  // Unwind the subcategory array
            },
            {
                $project: {
                    _id: { 
                        $concat: [
                            { $toString: "$_id" },  // Convert category _id to string
                            ":",  // Add colon separator
                            { $toString: "$subcategory._id" }  // Convert subcategory _id to string
                        ]
                    },
                    name: 1,
                    tags: 1,  // Category tags
                    subcategory: {
                        _id: "$subcategory._id",
                        name: "$subcategory.name",
                        tags: "$subcategory.tags"  // Subcategory tags
                    }
                }
            },
            {
                $addFields: {
                    allTags: {
                        $setUnion: ["$tags", "$subcategory.tags"]  // Combine category tags and subcategory tags
                    }
                }
            },
            {
                $project: {
                    name: 1,
                    is_active: 1,
                    rank: 1,
                    allTags: 1,  // Final tags
                    subcategory: 1
                }
            }
        ]).toArray();  // Convert the aggregation result to an array

        return result;  // Return the aggregated result
    } catch (err) {
        console.error("Error fetching category data with tags:", err);
        return [];  // Return an empty array in case of error
    }
};
