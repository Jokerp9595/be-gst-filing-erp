"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_constant_1 = __importDefault(require("../tag-constant"));
const response_json_1 = __importDefault(require("../../configs/response.json"));
const userSelectActiveByTypeId = {
    get: {
        tags: [tag_constant_1.default.user],
        description: 'Select active user details based on user type id',
        operationId: 'userSelectActiveByTypeId',
        security: [
            {
                'bearerAuth': []
            }
        ],
        parameters: [
            {
                name: 'userTypeId',
                in: 'path',
                required: true,
                schema: {
                    $ref: '#/components/schemas/userSelectActiveByTypeIdInput'
                }
            }
        ],
        responses: {
            '200': {
                description: response_json_1.default['200'],
                content: {
                    'application/pdf': {
                        schema: {
                            $ref: '#/components/schemas/userSelectArrayOutput'
                        }
                    }
                }
            }
        }
    }
};
exports.default = Object.assign({}, userSelectActiveByTypeId);
//# sourceMappingURL=select-active.js.map