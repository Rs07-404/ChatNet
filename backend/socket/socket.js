import { Server } from "socket.io";
import http from "http";
import express from "express";
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: [process.env.client, "http://localhost:3000"],
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type'],
    }
});

const userSocketMap = {};

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

io.on('connection', (socket)=>{
    console.log("A user connected ",socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != undefined && userId != "undefined"){
        userSocketMap[userId] = socket.id;
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("A user disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})

export {app, server, io};