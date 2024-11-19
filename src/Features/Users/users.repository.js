import User from "./Models/UserModel.js";
export const addUserDetails = async function (id, body) {
    try {
        const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
        return updatedUser;
    } catch (error) {
        next(error);
    }
};


export default {
    addUserDetails
}