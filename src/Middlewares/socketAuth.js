import { verifyToken } from "./auth.middleware.js"; 

export const socketAuth = async function (socket, next) {
    try {
        const token = socket.handshake.headers.token || socket.handshake.headers.authorization;
        if (!token) {
            throw new Error("No token provided. Please provide a valid token.");
        }

        const { isValid, decoded, error } = verifyToken(token);
        if (isValid) {
            socket.user = decoded.user;
            next();
        } else {
            throw new Error(`Invalid token. ${error}`);
        }
    } catch (error) {
        next(error);
    }
};
