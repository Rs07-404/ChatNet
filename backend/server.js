import express from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from './db/connect.js';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Listening on http://localhost:${PORT}.`)
})