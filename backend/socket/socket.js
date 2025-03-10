import { Server } from 'socket.io';
import express from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'https://mystichat-appv1.onrender.com',
        methods: ['GET', 'POST', 'DELETE']
    }
});

const userSocketMap = {};

export const getReceiverSocketId = (receiverId) => userSocketMap[receiverId];

io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId;
    if (userId) {
        userSocketMap[userId] = socket.id
        console.log(`User connected, userId = ${userId} and socketId = ${socket.id}`);

    }

    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    socket.on('disconnect', () => {
        if (userId) {
            console.log(`User disconnected, userId = ${userId} and socketId = ${socket.id}`);
            delete userSocketMap[userId];   
            
        }
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    });
});

export {app, server, io};