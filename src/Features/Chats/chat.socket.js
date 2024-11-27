import { logger } from "../../Middlewares/logger.middleware.js";
import Chat from "./chatModel.js";
// import { redis } from "../../config/Redis/redis.js"
export const chatSocket = (socket) => {

    socket.on('join', async ({ reciever }) => {
        try {
            const sender = socket.user;
            const roomId = [reciever, sender].sort().join("_");
            socket.join(roomId);
            socket.emit('joinedRoom', { roomId, message: `You have joined room ${roomId}` });
        } catch (error) {
            logger.error(error)
        }
    });

    socket.on("sendMessage", async (messageData) => {
        try {

            const recieverId = messageData.reciever;
            const sender = socket.user;
            if (sender != recieverId) {


                const roomId = [recieverId, sender].sort().join("_");
                messageData.roomId = roomId;
                messageData.sender = sender;
                const message = await Chat.create(messageData);
                messageData.user = sender;


                if (socket.rooms.has(roomId)) {

                    socket.to(roomId).emit("receivedMessage", message);

                }
            }
        } catch (error) {
            logger.error(error)
        }
    })

    socket.on("isActive", async (messageData) => {
        try {
            const reciever = messageData.reciever;
            const sender = socket.user;
            const roomId = [reciever, sender.id].sort().join("_");

            if (socket.rooms.has(roomId)) {
                socket.emit("userIsActive", { userId: reciever, isActive: isRecipientActive });
            }
        } catch (error) {
            logger.error(error)
        }
    });
};
