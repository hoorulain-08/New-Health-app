"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testDbConnection = testDbConnection;
const promise_1 = __importDefault(require("mysql2/promise"));
//import { create } from 'node:domain';
const db = promise_1.default.createPool({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "node_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
//database test connection
function testDbConnection() {
    db.getConnection()
        .then((connection) => {
        console.log("Database connected successfully");
        connection.release();
    })
        .catch((error) => {
        console.error("Database connection failed:", error);
    });
}
//# sourceMappingURL=Db.js.map