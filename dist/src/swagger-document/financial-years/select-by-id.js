"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_constant_1 = __importDefault(require("../tag-constant"));
const response_json_1 = __importDefault(require("../../configs/response.json"));
const financialYearSelectById = {
    get: {
        tags: [tag_constant_1.default.financialYear],
        description: 'Select financial year details based on financial year id',
        operationId: 'financialYearSelectById',
        security: [
            {
                'bearerAuth': []
            }
        ],
        parameters: [
            {
                name: 'financialYearId',
                in: 'path',
                required: true,
                schema: {
                    $ref: '#/components/schemas/financialYearSelectByIdInput'
                }
            }
        ],
        responses: {
            '200': {
                description: response_json_1.default['200'],
                content: {
                    'application/pdf': {
                        schema: {
                            $ref: '#/components/schemas/financialYearSelectOutPutOutput'
                        }
                    }
                }
            }
        }
    }
};
exports.default = Object.assign({}, financialYearSelectById);
//# sourceMappingURL=select-by-id.js.map