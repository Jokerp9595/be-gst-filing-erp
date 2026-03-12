"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocument = void 0;
const basic_info_1 = require("./basic-info");
const servers_1 = require("./servers");
const user_1 = __importDefault(require("./user"));
const authentication_1 = __importDefault(require("./authentication"));
exports.swaggerDocument = Object.assign(Object.assign({}, basic_info_1.basicInfo), { servers: servers_1.servers, components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            }
        },
        schemas: Object.assign(Object.assign(Object.assign({}, user_1.default.schemas), authentication_1.default.schemas), { error: {
                type: 'object',
                properties: {
                    status: {
                        type: 'integer'
                    },
                    message: {
                        type: 'string'
                    },
                    error: {
                        type: 'string'
                    }
                }
            } })
    }, tags: [
        ...user_1.default.tags,
        ...authentication_1.default.tags
    ], paths: Object.assign(Object.assign({}, user_1.default.paths), authentication_1.default.paths) });
//# sourceMappingURL=index.js.map