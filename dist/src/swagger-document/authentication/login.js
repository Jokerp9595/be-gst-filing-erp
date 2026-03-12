"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_constant_1 = __importDefault(require("../tag-constant"));
const response_json_1 = __importDefault(require("../../configs/response.json"));
const authenticationLogin = {
    post: {
        tags: [tag_constant_1.default.authentication],
        description: 'Check mobile no. or email address and password and return details accordingly',
        operationId: 'authenticationLogin',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/authenticationLoginInput'
                    }
                }
            }
        },
        responses: {
            '200': {
                description: response_json_1.default['203'],
                content: {
                    'application/pdf': {
                        schema: {
                            $ref: '#/components/schemas/authenticationLoginOutput'
                        }
                    }
                }
            }
        }
    }
};
exports.default = Object.assign({}, authenticationLogin);
//# sourceMappingURL=login.js.map