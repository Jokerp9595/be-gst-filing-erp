"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusUpdateFinancialYearSanitize = exports.selectByIdFinancialYearSanitize = exports.updateFinancialYearSanitize = exports.addFinancialYearSanitize = exports.financialYearSchemas = void 0;
const html_entities_1 = require("html-entities");
const joi_1 = __importDefault(require("joi"));
const field_helper_service_1 = require("../../services/field-helper.service");
exports.financialYearSchemas = {
    AddSchema: joi_1.default.object({
        name: joi_1.default.string().trim().max(500).required().messages({
            "string.empty": `Financial year name is required.`,
            "any.required": `Financial year name is required.`,
            "string.max": `Financial year name length must be less than or equal to 500 characters long.`,
        }),
        fyFrom: joi_1.default.string().trim().max(10).required().messages({
            "string.empty": `Financial year from date is required.`,
            "any.required": `Financial year from date is required.`,
            "string.max": `Financial year from date length must be less than or equal to 10 characters long.`,
        }),
        fyTo: joi_1.default.string().trim().max(10).required().messages({
            "string.empty": `Financial year to date is required.`,
            "any.required": `Financial year to date is required.`,
            "string.max": `Financial year to date length must be less than or equal to 10 characters long.`,
        }),
        isClosed: joi_1.default.number().integer().valid(0, 1).required().messages({
            "any.required": `Financial year closed status is required.`,
            "number.base": `Financial year closed status must be a number`,
            'any.only': `Financial year closed status must be one of 0 or 1.`
        }),
    }),
    UpdateSchema: joi_1.default.object({
        financialYearId: joi_1.default.number().integer().positive().required().messages({
            "any.required": `Financial year id is required.`,
            "number.base": `Financial year id must be a number`,
            "number.positive": `Financial year id must be a positive number`,
        }),
        name: joi_1.default.string().trim().max(500).required().messages({
            "string.empty": `Financial year name is required.`,
            "any.required": `Financial year name is required.`,
            "string.max": `Financial year name length must be less than or equal to 500 characters long.`,
        }),
        fyFrom: joi_1.default.string().trim().max(10).required().messages({
            "string.empty": `Financial year from date is required.`,
            "any.required": `Financial year from date is required.`,
            "string.max": `Financial year from date length must be less than or equal to 10 characters long.`,
        }),
        fyTo: joi_1.default.string().trim().max(10).required().messages({
            "string.empty": `Financial year to date is required.`,
            "any.required": `Financial year to date is required.`,
            "string.max": `Financial year to date length must be less than or equal to 10 characters long.`,
        }),
        isClosed: joi_1.default.number().integer().valid(0, 1).required().messages({
            "any.required": `Financial year closed status is required.`,
            "number.base": `Financial year closed status must be a number`,
            'any.only': `Financial year closed status must be one of 0 or 1.`
        }),
    }),
    statusUpdateSchema: joi_1.default.object({
        financialYearId: joi_1.default.number().integer().positive().required().messages({
            "any.required": `Financial year id is required.`,
            "number.base": `Financial year id must be a number`,
            "number.positive": `Financial year id must be a positive number`,
        }),
        status: joi_1.default.number().integer().valid(0, 1).required().messages({
            "any.required": `Financial year status is required.`,
            "number.base": `Financial year status must be a number`,
            'any.only': `Financial year status must be one of 0 or 1.`
        }),
    }),
    SelectByIdSchema: joi_1.default.object({
        financialYearId: joi_1.default.number().integer().positive().required().messages({
            "any.required": `Financial year id is required.`,
            "number.base": `Financial year id must be a number`,
            "number.positive": `Financial year id must be a positive number`,
        })
    }),
};
const addFinancialYearSanitize = (req, res, next) => {
    const fieldsToSanitize = ['name', 'fyFrom', 'fyTo', 'isClosed'];
    for (const field of fieldsToSanitize) {
        if (field_helper_service_1.FieldHelperService.undefinedAndNullCheck(req.body[field])) {
            req.body[field] = (0, html_entities_1.decode)(req.sanitize(req.body[field] + ""));
        }
    }
    next();
};
exports.addFinancialYearSanitize = addFinancialYearSanitize;
const updateFinancialYearSanitize = (req, res, next) => {
    const fieldsToSanitize = ['financialYearId', 'name', 'fyFrom', 'fyTo', 'isClosed'];
    for (const field of fieldsToSanitize) {
        if (field_helper_service_1.FieldHelperService.undefinedAndNullCheck(req.body[field])) {
            req.body[field] = (0, html_entities_1.decode)(req.sanitize(req.body[field] + ""));
        }
    }
    next();
};
exports.updateFinancialYearSanitize = updateFinancialYearSanitize;
const selectByIdFinancialYearSanitize = (req, res, next) => {
    if (field_helper_service_1.FieldHelperService.undefinedAndNullCheck(req.params.financialYearId)) {
        req.params.financialYearId = (0, html_entities_1.decode)(req.sanitize(req.params.financialYearId));
    }
    next();
};
exports.selectByIdFinancialYearSanitize = selectByIdFinancialYearSanitize;
const statusUpdateFinancialYearSanitize = (req, res, next) => {
    const fieldsToSanitize = ['financialYearId', 'status'];
    for (const field of fieldsToSanitize) {
        if (field_helper_service_1.FieldHelperService.undefinedAndNullCheck(req.body[field])) {
            req.body[field] = (0, html_entities_1.decode)(req.sanitize(req.body[field] + ""));
        }
    }
    next();
};
exports.statusUpdateFinancialYearSanitize = statusUpdateFinancialYearSanitize;
//# sourceMappingURL=financial-year.schema.js.map