import User from "./Models/UserModel.js";
export const addUserDetails = async function (id, body) {
    try {
        console.log("body", body);
        const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
        return updatedUser;
    } catch (error) {
        next(error);
    }
};


export default {
    addUserDetails
}