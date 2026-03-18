//import express, {Application} from "express";
import express, { type Application } from "express";
import http from "http"
import multer from "multer";
import cors from "cors";
import fs from "fs";
//import {server as SocketServer} from "socket.io";;
import path from "path";

const app: Application = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
cors:{

origin:"*",
},
})
app.use(express.json({limit:"50mb"}));
app.use(cors());
//Example export if needed
server.listen(5000, () => {
  console.log("Server running on port 5000");
});
export {app, server, io, multer, fs, path};


// import cors from "cors";        
// app.use(cors());        
// import { Server } from "socket.io";
// import http from "http";
// import { Socket } from "socket.io";
// import { createServer } from "http";