import { sendResponse } from "../../Utility/response.js";
import { getDB } from "../../config/mongodb.js";

export const latestAdds = async function (req, res, next) {
    try {
        const limit = parseInt(req.query.limit) || 100;
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * limit;

        const db = getDB();
        const advertisements = await db.collection("advertisement")
            .find({ is_active: true })
            .sort({ paid: 1, created_at: -1 })
            .skip(offset)
            .limit(limit)
            .toArray();

        return await sendResponse(res, "Latest Ads", 200, { advertisements });
    } catch (error) {
        next(error);
    }
};

export const searchAdds = async function (req, res, next) {
    try {
        const db = await getDB();
        const limit = parseInt(req.query.limit) || 4;
        const page = parseInt(req.query.page) || 1;
        let search = req.query.search || '';
        const offset = (page - 1) * limit;

        const regexSearchQuery = search.trim() ? {
            $or: [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { name: { $regex: search, $options: 'i' } },
                { type: { $regex: search, $options: 'i' } },
                { city: { $regex: search, $options: 'i' } },
                { state: { $regex: search, $options: 'i' } },
                { locality: { $regex: search, $options: 'i' } },
                { category: { $regex: search, $options: 'i' } },
                { pincode: { $regex: search, $options: 'i' } },
                { brand: { $regex: search, $options: 'i' } },
                { advType: { $regex: search, $options: 'i' } },
            ]
        } : {};

        const [advResults, businessResults] = await Promise.allSettled([
            db.collection('advertisement')
                .find({ is_active: true, ...regexSearchQuery })
                .skip(offset)
                .limit(limit)
                .toArray(),

            db.collection('businesses')
                .find({ is_active: true, ...regexSearchQuery })
                .skip(offset)
                .limit(limit)
                .toArray()
        ]);

        const advData = advResults.status === 'fulfilled' ? advResults.value : [];
        const businessData = businessResults.status === 'fulfilled' ? businessResults.value : [];

        const advertisements = [...advData, ...businessData];

        return await sendResponse(res, "Search Results", 200, { advertisements });
    } catch (error) {
        next(error);
    }
};
