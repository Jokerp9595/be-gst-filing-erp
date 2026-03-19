"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_constant_1 = __importDefault(require("../tag-constant"));
const response_json_1 = __importDefault(require("../../configs/response.json"));
const financialYearAdd = {
    post: {
        tags: [tag_constant_1.default.financialYear],
        description: 'Add an financial year',
        operationId: 'financialYearAdd',
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
                        $ref: '#/components/schemas/financialYearAddInput'
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
                            $ref: '#/components/schemas/financialYearAddOutput'
                        }
                    }
                }
            }
        }
    }
};
exports.default = Object.assign({}, financialYearAdd);
//# sourceMappingURL=add.js.map