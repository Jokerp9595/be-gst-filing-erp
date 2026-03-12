"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_constant_1 = __importDefault(require("../tag-constant"));
const response_json_1 = __importDefault(require("../../configs/response.json"));
const userSelect = {
    get: {
        tags: [tag_constant_1.default.user],
        description: 'Select user details based on access token',
        operationId: 'userSelect',
        security: [
            {
                'bearerAuth': []
            }
        ],
        responses: {
            '200': {
                description: response_json_1.default['200'],
                content: {
                    'application/pdf': {
                        schema: {
                            $ref: '#/components/schemas/userSelectOutPutOutput'
                        }
                    }
                }
            }
        }
    }
};
exports.default = Object.assign({}, userSelect);
//# sourceMappingURL=select-user.js.map