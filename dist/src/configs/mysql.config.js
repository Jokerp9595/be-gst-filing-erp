"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const _1 = require("./");
const createPool = (region, options) => {
    const pool = mysql2_1.default.createPool(options);
    pool.getConnection((err) => {
        if (err) {
            _1.applicationLogger.error(`DB connection ${region} error`, { err: err.toString() });
        }
    });
    pool.on('connection', (conn) => {
        conn.query("SET SESSION wait_timeout=600");
        conn.query("SET SESSION interactive_timeout=600");
    });
    return pool;
};
exports.connection = createPool('default', {
    host: _1.configuration.dbOptions.host,
    port: parseInt(_1.configuration.dbOptions.port, 10),
    user: _1.configuration.dbOptions.user,
    password: _1.configuration.dbOptions.pass,
    database: _1.configuration.dbOptions.database,
    debug: false,
    multipleStatements: true,
    timezone: '+00:00',
    connectTimeout: 20000,
    connectionLimit: 10,
});
//# sourceMappingURL=mysql.config.js.map