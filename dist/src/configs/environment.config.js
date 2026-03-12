"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
/****************************
 Configuration
 ****************************/
const serverType = ((_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : "development").trim();
let environment;
// if (serverType === "development") {
environment = {
    dbHost: "localhost",
    dbPort: "3306",
    dbUser: "root",
    dbPassword: "root",
    dbDataBaseName: "accounting-erp",
    serverPort: "3000",
    baseUrl: "api/v1",
    rootUrl: "http://localhost:",
    swaggerUrl: "http://localhost:3000/api/v1",
    publicDirectory: path_1.default.join(__dirname, '..', '..', '..')
    // };
};
exports.default = Object.assign({}, environment);
//# sourceMappingURL=environment.config.js.map