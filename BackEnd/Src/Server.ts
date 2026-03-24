//import express, {Application} from "express";
import express, { type Application } from "express";
import http from "http"
import multer from "multer";
import cors from "cors";
import fs from "fs";
//import {server as SocketServer} from "socket.io";;
import path from "path";
import { testDbConnection } from "./Database/Db";
//import mysql from "mysql2/promise";
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

//Database connection example
// const db=mysql.createPool({

// // host:"localhost",
//  host: "localhost",
  
// user:"root",
// password:"root123",
// database:"node_db",
// waitForConnections:true,
// connectionLimit:10,
// queueLimit:0,

// })



//database test connection
// db.getConnection()
// .then((connection)=>{
// console.log("Database connected successfully");
// connection.release();
// })
// .catch((error)=>{
// console.error("Database connection failed:",error); 
// });

testDbConnection();





export {app, server, io, multer, fs, path};


// import cors from "cors";        
// app.use(cors());        
// import { Server } from "socket.io";
// import http from "http";
// import { Socket } from "socket.io";
// import { createServer } from "http";