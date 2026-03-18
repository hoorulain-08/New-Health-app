import { type Application } from "express";
import http from "http";
import multer from "multer";
import fs from "fs";
import path from "path";
declare const app: Application;
declare const server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
declare const io: any;
export { app, server, io, multer, fs, path };
//# sourceMappingURL=Server.d.ts.map