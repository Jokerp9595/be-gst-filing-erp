"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_constant_1 = __importDefault(require("../tag-constant"));
const response_json_1 = __importDefault(require("../../configs/response.json"));
const authenticationChangePassword = {
    put: {
        tags: [tag_constant_1.default.authentication],
        description: 'Update a password based on the token',
        operationId: 'authenticationChangePassword',
        security: [
            {
                'bearerAuth': []
            }
        ],
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/authenticationChangePasswordInput'
                    }
                }
            }
        },
        responses: {
            '200': {
                description: response_json_1.default['204'],
                content: {
                    'application/pdf': {
                        schema: {
                            $ref: '#/components/schemas/authenticationChangePasswordOutput'
                        }
                    }
                }
            }
        }
    }
};
exports.default = Object.assign({}, authenticationChangePassword);
//# sourceMappingURL=change-password.js.map