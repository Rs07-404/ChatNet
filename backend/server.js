import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connect.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import userRoutes from './routes/user.route.js';
import conversationRoutes from './routes/conversation.route.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: process.env.client,
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
    }
))

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes)
app.use("/api/conversation", conversationRoutes)

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Listening on http://localhost:${PORT}.`)
})