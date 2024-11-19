import { sendResponse } from "../../Utility/response.js";
import Business from "../BusinessListing/Model/BusinessModel.js";
import { getDB } from "../../config/mongodb.js";

export const businessInfo = async (req, res, next) => {
    try {
        let advertisements = await Business.find({ is_active: true })
            .select('created_at category street city locality name')
            .populate({
                path: 'user',
                select: 'plan fullname mobile plan_expiry_date'
            });

        return sendResponse(res, 'Business Info List', 200, advertisements, null);
    } catch (error) {
        next(error);
    }
};

export const advertisementInfo = async (req, res, next) => {
    try {
        const db = await getDB()
        const advertisements = await db.collection("advertisement").aggregate([
            { $match: { is_active: true } },
            {
                $lookup: {
                    from: 'users',
                    localField: 'user',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            {
                $project: {
                    created_at: 1,
                    category: 1,
                    street: 1,
                    city: 1,
                    locality: 1,
                    advType: 1,
                    name: 1,
                    title:1,
                    'user.plan': 1,
                    'user.fullname': 1,
                    'user.mobile': 1,
                    'user.plan_expiry_date':1,
                }
            }
        ]).toArray();

        advertisements.forEach(item => {
            if (Array.isArray(item.user) && item.user.length > 0) {
                item.user = item.user[0];
            }
        });

        return sendResponse(res, 'Advertisement Info List', 200, advertisements, null);
    } catch (error) {
        next(error);
    }
};


