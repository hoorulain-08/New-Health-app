"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.path = exports.fs = exports.multer = exports.io = exports.server = exports.app = void 0;
//import express, {Application} from "express";
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const multer_1 = __importDefault(require("multer"));
exports.multer = multer_1.default;
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
exports.fs = fs_1.default;
//import {server as SocketServer} from "socket.io";;
const path_1 = __importDefault(require("path"));
exports.path = path_1.default;
const Db_1 = require("./Database/Db");
//import mysql from "mysql2/promise";
const app = (0, express_1.default)();
exports.app = app;
const server = http_1.default.createServer(app);
exports.server = server;
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
    },
});
exports.io = io;
app.use(express_1.default.json({ limit: "50mb" }));
app.use((0, cors_1.default)());
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
(0, Db_1.testDbConnection)();
// import cors from "cors";        
// app.use(cors());        
// import { Server } from "socket.io";
// import http from "http";
// import { Socket } from "socket.io";
// import { createServer } from "http";
//# sourceMappingURL=Server.js.map