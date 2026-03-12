"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationLogger = void 0;
const moment_1 = __importDefault(require("moment"));
const winston_1 = require("winston");
const { combine, timestamp, json } = winston_1.format;
const newFilename = (0, moment_1.default)().format("DD-MM-YYYY");
exports.applicationLogger = (0, winston_1.createLogger)({
    levels: winston_1.config.syslog.levels,
    format: combine(timestamp({
        format: 'HH:mm:ss'
    }), json({
        space: 2
    })),
    transports: [
        new winston_1.transports.File({
            filename: './public/logs/' + newFilename + '.log'
        })
    ]
});
//# sourceMappingURL=logger.config.js.map