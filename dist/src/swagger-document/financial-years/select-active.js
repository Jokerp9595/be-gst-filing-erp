"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_constant_1 = __importDefault(require("../tag-constant"));
const response_json_1 = __importDefault(require("../../configs/response.json"));
const financialYearSelectActiveByTypeId = {
    get: {
        tags: [tag_constant_1.default.financialYear],
        description: 'Select active financial year details based on financial year type id',
        operationId: 'financialYearSelectActiveByTypeId',
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
                            $ref: '#/components/schemas/financialYearSelectArrayOutput'
                        }
                    }
                }
            }
        }
    }
};
exports.default = Object.assign({}, financialYearSelectActiveByTypeId);
//# sourceMappingURL=select-active.js.map