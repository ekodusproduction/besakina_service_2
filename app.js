import 'dotenv/config';
import express from "express";
import cors from "cors";
import path from 'path';
import helmet from "helmet"; // Security middleware
import { logger, loggerMiddleware } from './src/Middlewares/logger.middleware.js';
import { ApplicationError } from './src/ErrorHandler/applicationError.js';
import { sendError } from './src/Utility/response.js';
//routers
import categoryRouter from './src/Features/Categories/category.routes.js';
import plansRouter from './src/Features/Plans/plans.routes.js';
import userRouter from './src/Features/Users/users.routes.js';
import chatRouter from './src/Features/Chats/chats.routes.js';
import homeRouter from './src/Features/Home/home.routes.js';
import bannerRouter from './src/Features/Banner/banner.routes.js';
import wishlistRoutes from './src/Features/Wishlist/wishlist.routes.js';
import paymentRouter from './src/Features/Payments/paymentRoutes.js';
import adminRouter from './src/Features/Admin/routes.js';
import featuredRouter from './src/Features/Advertisement/FeaturedAds/featured.routes.js';
import advRouter from './src/Features/Advertisement/BaseModel/base.routes.js';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const app = express()
// Middleware setup

app.set('trust proxy', true);
app.use(cors({ credentials: false }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    console.log("ip", req.ip)
    console.log("url", req.url)
    console.log('method', req.method)
    console.log('origin', req.headers.origin)
    console.log("rawBody ", req.body)
    next();
})

app.use(helmet({
    crossOriginResourcePolicy: false,
}));

app.use('/api/public', express.static('public'));

app.get("/api", (req, res) => {
    return res.status(200).send("Welcome to besakina backend server");
});

app.use("/api/users", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/adv", advRouter);
app.use("/api/plans", plansRouter);
app.use('/api/chat', chatRouter)
app.use("/api/home", homeRouter)
app.use("/api/favourites", homeRouter)
app.use("/api/banner", bannerRouter)
app.use('/api/wishlist', wishlistRoutes)
app.use('/api/payments', paymentRouter)
app.use('/api/admin', adminRouter)
app.use('/api/featured', featuredRouter)

app.use(async (err, req, res, next) => {
    logger.info(err);
    console.log("err in global middleware", err)
    if (err instanceof ApplicationError) {
        return await sendError(res, err.message, err.code);
    } else {
        return await sendError(res, "Internal server error!", 500);
    }
});

app.all("*", (req, res) => {
    return res.status(404).send({
        "message": "URL not found",
        "success": false,
        "http_status_code": 404
    });
});

export default app;