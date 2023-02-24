import path from "path";
import express from "express";
import http from "http";
import {Server} from 'socket.io';
import Filter from "bad-words";
import { generateMessage } from "./util/messages.js";
import { generateLocationMessage } from "./util/messages.js"
import { addUser,removeUser,getUser,getUserInRoom } from "./util/users.js";

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));


io.on("connection",(socket) =>{
    console.log("New websocket connection");

    socket.on("join",({ username,room}) => {
        socket.join(room);

        socket.emit('message',generateMessage("Welcome!"));
        socket.broadcast.to(room).emit('message',generateMessage(username+" has joined!"));
    })

    socket.on('sendMessage',(message,callback) =>{
        const filter = new Filter()
        
        if(filter.isProfane(message)){
            return callback("Profanity is not allowed!");
        }
        io.to("pune").emit("message",generateMessage(message))
        callback()
    })

    socket.on("sendlocation",(coords,callback) =>{
        io.emit(
            "locationMessage",generateLocationMessage("https://google.com/maps?q="+coords.latitude+""+coords.longitude)
        )
        callback()
    })

    socket.on("disconnect",()=>{
        io.emit("message",generateMessage("A user has left!"));
    })
})

server.listen(port,()=>{
    console.log("server is up on port "+ port);
});