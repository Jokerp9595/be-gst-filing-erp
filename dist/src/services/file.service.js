"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
/****************************
 FILE HANDLING OPERATIONS
 ****************************/
const fs_1 = __importDefault(require("fs"));
const path = __importStar(require("path"));
const configs_1 = require("../configs");
class FileService {
    static removeFile(file) {
        try {
            fs_1.default.unlinkSync(path.join(configs_1.configuration.publicDirectory, 'public', file));
        }
        catch (err) {
            configs_1.applicationLogger.error(`FileService removeFile`, { file: file, error: err });
        }
    }
    static uploadFile(file, folder) {
        return new Promise(function (resolve, reject) {
            const fileName = file.originalFilename.split(".");
            const newFileName = Date.now().toString() + Math.floor(100000 + Math.random() * 900000) + '.' + fileName[fileName.length - 1];
            const dir = path.join(configs_1.configuration.publicDirectory, 'public', folder);
            if (!fs_1.default.existsSync(dir)) {
                fs_1.default.mkdirSync(dir, { recursive: true });
            }
            const uploadedFilePath = path.join(configs_1.configuration.publicDirectory, 'public', folder, newFileName);
            fs_1.default.readFile(file.path, (err, data) => {
                if (err) {
                    reject(err.stack);
                }
                else {
                    fs_1.default.writeFile(uploadedFilePath, data, (err) => {
                        if (err) {
                            reject(err.stack);
                        }
                        else {
                            resolve(path.join(folder, newFileName));
                        }
                    });
                }
            });
        });
    }
    static readFile(filepath) {
        return new Promise((resolve, reject) => {
            fs_1.default.readFile(filepath, 'utf-8', (err, html) => {
                if (err) {
                    return reject({ message: err, status: 0 });
                }
                return resolve(html);
            });
        });
    }
    static writeFile(filepath, data) {
        const fileContents = fs_1.default.writeFileSync(filepath, data);
        return fileContents;
    }
    static appendFile(filepath, data) {
        const fileContents = fs_1.default.appendFileSync(filepath, data);
        return fileContents;
    }
}
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map