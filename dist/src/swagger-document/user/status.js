"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_constant_1 = __importDefault(require("../tag-constant"));
const response_json_1 = __importDefault(require("../../configs/response.json"));
const userStatus = {
    put: {
        tags: [tag_constant_1.default.user],
        description: 'Update an user status',
        operationId: 'userStatus',
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
                        $ref: '#/components/schemas/userStatusInput'
                    }
                }
            }
        },
        responses: {
            '200': {
                description: response_json_1.default['200'],
                content: {
                    'application/pdf': {
                        schema: {
                            $ref: '#/components/schemas/userStatusOutput'
                        }
                    }
                }
            }
        }
    }
};
exports.default = Object.assign({}, userStatus);
//# sourceMappingURL=status.js.map