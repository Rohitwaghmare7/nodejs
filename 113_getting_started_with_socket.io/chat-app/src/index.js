import path from "path";
import express from "express";
import http from "http";
import {Server, Socket} from 'socket.io';

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
})

server.listen(port,()=>{
    console.log("server is up on port "+ port);
});