"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSettingSanitize = exports.selectByIdSanitize = exports.selectActiveSanitize = exports.statusSanitize = exports.updateSanitize = exports.addSanitize = exports.userSchemas = void 0;
const html_entities_1 = require("html-entities");
const joi_1 = __importDefault(require("joi"));
const configs_1 = require("../../configs");
const field_helper_service_1 = require("../../services/field-helper.service");
exports.userSchemas = {
    AddSchema: joi_1.default.object({
        fullName: joi_1.default.string().trim().max(500).required().messages({
            "string.empty": `Full name is required.`,
            "any.required": `Full name is required.`,
            "string.max": `Full name length must be less than or equal to 500 characters long.`,
        }),
        companyName: joi_1.default.string().trim().max(500).required().messages({
            "string.empty": `Company name is required.`,
            "any.required": `Company name is required.`,
            "string.max": `Company name length must be less than or equal to 500 characters long.`,
        }),
        mobile: joi_1.default.string().trim().max(10).required().messages({
            "string.empty": `Mobile no. is required.`,
            "any.required": `Mobile no. is required.`,
            "string.max": `Mobile no. length must be less than or equal to 10 characters long.`,
        }),
        email: joi_1.default.string().trim().max(320).pattern(new RegExp(configs_1.configuration.emailAddressPattern)).required().allow("").messages({
            "string.empty": `Email address is required.`,
            "any.required": `Email address is required.`,
            "string.max": `Email address length must be less than or equal to 320 characters long.`,
            'string.pattern.base': `Email address is invalid.`,
        }),
        password: joi_1.default.string().trim().max(100).required().messages({
            "string.empty": `Password is required.`,
            "any.required": `Password is required.`,
            "string.max": `Password length must be less than or equal to 100 characters long.`,
        }),
    }),
    UpdateSchema: joi_1.default.object({
        userId: joi_1.default.number().integer().positive().required().messages({
            "any.required": `User id is required.`,
            "number.base": `User id must be a number`,
            "number.positive": `User id must be a positive number`,
        }),
        fullName: joi_1.default.string().trim().max(500).required().messages({
            "string.empty": `Full name is required.`,
            "any.required": `Full name is required.`,
            "string.max": `Full name length must be less than or equal to 500 characters long.`,
        }),
        companyName: joi_1.default.string().trim().max(500).required().messages({
            "string.empty": `Company name is required.`,
            "any.required": `Company name is required.`,
            "string.max": `Company name length must be less than or equal to 500 characters long.`,
        }),
        mobile: joi_1.default.string().trim().max(10).required().messages({
            "string.empty": `Mobile no. is required.`,
            "any.required": `Mobile no. is required.`,
            "string.max": `Mobile no. length must be less than or equal to 10 characters long.`,
        }),
        email: joi_1.default.string().trim().max(320).pattern(new RegExp(configs_1.configuration.emailAddressPattern)).required().allow("").messages({
            "string.empty": `Email address is required.`,
            "any.required": `Email address is required.`,
            "string.max": `Email address length must be less than or equal to 320 characters long.`,
            'string.pattern.base': `Email address is invalid.`,
        }),
        emailVerified: joi_1.default.number().integer().valid(0, 1).required().messages({
            "any.required": `Email verified status is required.`,
            "number.base": `Email verified status must be a number`,
            'any.only': `Email verified status must be one of 0 or 1.`
        }),
    }),
    StatusSchema: joi_1.default.object({
        userId: joi_1.default.number().integer().positive().required().messages({
            "any.required": `User id is required.`,
            "number.base": `User id must be a number`,
            "number.positive": `User id must be a positive number`,
        }),
        status: joi_1.default.string().valid('active', 'inactive', 'pending').required().messages({
            "any.required": `User status is required.`,
            "string.base": `User status must be a string`,
            'any.only': `User status must be one of 'active', 'inactive', or 'pending' status.`
        }),
    }),
    SelectActiveSchema: joi_1.default.object({
        userTypeId: joi_1.default.number().integer().positive().required().messages({
            "any.required": `User type id is required.`,
            "number.base": `User type id must be a number`,
            "number.positive": `User type id must be a positive number`,
        })
    }),
    SelectByIdSchema: joi_1.default.object({
        userId: joi_1.default.number().integer().positive().required().messages({
            "any.required": `User id is required.`,
            "number.base": `User id must be a number`,
            "number.positive": `User id must be a positive number`,
        })
    }),
    UpdateSettingSchema: joi_1.default.object({
        userId: joi_1.default.number().integer().positive().required().messages({
            "any.required": `User id is required.`,
            "number.base": `User id must be a number`,
            "number.positive": `User id must be a positive number`,
        }),
        defaultCollectionType: joi_1.default.string().trim().max(100).required().messages({
            "string.empty": `Default collection type is required.`,
            "any.required": `Default collection type is required.`,
            "string.max": `Default collection type length must be less than or equal to 100 characters long.`,
        })
    }),
};
const addSanitize = (req, res, next) => {
    const fieldsToSanitize = ['fullName', 'mobile', 'email', 'password', "companyName"];
    for (const field of fieldsToSanitize) {
        if (field_helper_service_1.FieldHelperService.undefinedAndNullCheck(req.body[field])) {
            req.body[field] = (0, html_entities_1.decode)(req.sanitize(req.body[field] + ""));
        }
    }
    next();
};
exports.addSanitize = addSanitize;
const updateSanitize = (req, res, next) => {
    const fieldsToSanitize = ['userId', 'fullName', 'mobile', 'email', 'password', "companyName", "emailVerified"];
    for (const field of fieldsToSanitize) {
        if (field_helper_service_1.FieldHelperService.undefinedAndNullCheck(req.body[field])) {
            req.body[field] = (0, html_entities_1.decode)(req.sanitize(req.body[field] + ""));
        }
    }
    next();
};
exports.updateSanitize = updateSanitize;
const statusSanitize = (req, res, next) => {
    if (field_helper_service_1.FieldHelperService.undefinedAndNullCheck(req.body.userId)) {
        req.body.userId = (0, html_entities_1.decode)(req.sanitize(req.body.userId));
    }
    if (field_helper_service_1.FieldHelperService.undefinedAndNullCheck(req.body.status)) {
        req.body.status = (0, html_entities_1.decode)(req.sanitize(req.body.status + ""));
    }
    next();
};
exports.statusSanitize = statusSanitize;
const selectActiveSanitize = (req, res, next) => {
    if (field_helper_service_1.FieldHelperService.undefinedAndNullCheck(req.params.userTypeId)) {
        req.params.userTypeId = (0, html_entities_1.decode)(req.sanitize(req.params.userTypeId));
    }
    next();
};
exports.selectActiveSanitize = selectActiveSanitize;
const selectByIdSanitize = (req, res, next) => {
    if (field_helper_service_1.FieldHelperService.undefinedAndNullCheck(req.params.userId)) {
        req.params.userId = (0, html_entities_1.decode)(req.sanitize(req.params.userId));
    }
    next();
};
exports.selectByIdSanitize = selectByIdSanitize;
const updateSettingSanitize = (req, res, next) => {
    if (field_helper_service_1.FieldHelperService.undefinedAndNullCheck(req.body.userId)) {
        req.body.userId = (0, html_entities_1.decode)(req.sanitize(req.body.userId));
    }
    if (field_helper_service_1.FieldHelperService.undefinedAndNullCheck(req.body.defaultCollectionType)) {
        req.body.defaultCollectionType = (0, html_entities_1.decode)(req.sanitize(req.body.defaultCollectionType));
    }
    next();
};
exports.updateSettingSanitize = updateSettingSanitize;
//# sourceMappingURL=user.schema.js.map