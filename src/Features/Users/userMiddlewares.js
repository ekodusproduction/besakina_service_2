import { sendError } from "../../Utility/response.js"
import User from "./Models/UserModel.js"
import Plan from "../Plans/Models/PlanModel.js"

export const checkUserProfileCompletion = async (req, res, next) => {
    try {
        const userProfile = await User.findById(req.user, 'fullname profile_pic mobile city state').exec();

        if (!userProfile) {
            return sendError(res, "Mobile number not registered. Please login.", 400);
        }
        if (!userProfile.fullname || !userProfile.mobile) {
            return sendError(res, "User Profile Incomplete", 400);
        }
        next();
    } catch (error) {
        return sendError(res, "Internal Server Error", 500);
    }
};

export const checkUserPlanQuotaPermissions = async (req, res, next) => {
    try {
        const user = await User.findById(req.user).populate('plan').exec();

        if (!user || !user.plan) {
            return sendError(res, "No plans subscribed. Please subscribe to a plan.", 400);
        }

        const userPostsCount = await Post.countDocuments({ user: req.user });

        if (userPostsCount >= user.plan.no_of_ads) {
            return sendError(res, "Advertisement quota is full. Please upgrade the plan.", 403);
        }

        next();
    } catch (error) {
        return sendError(res, "Internal Server Error", 500);
    }
};
