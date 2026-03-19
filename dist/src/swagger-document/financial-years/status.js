"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_constant_1 = __importDefault(require("../tag-constant"));
const response_json_1 = __importDefault(require("../../configs/response.json"));
const financialYearStatus = {
    put: {
        tags: [tag_constant_1.default.financialYear],
        description: 'Update an financial year status',
        operationId: 'financialYearStatus',
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
                        $ref: '#/components/schemas/financialYearStatusInput'
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
                            $ref: '#/components/schemas/financialYearStatusOutput'
                        }
                    }
                }
            }
        }
    }
};
exports.default = Object.assign({}, financialYearStatus);
//# sourceMappingURL=status.js.map