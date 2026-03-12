"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordSanitize = exports.loginSanitize = exports.authenticationSchemas = void 0;
const joi_1 = __importDefault(require("joi"));
const field_helper_service_1 = require("../../services/field-helper.service");
const html_entities_1 = require("html-entities");
exports.authenticationSchemas = {
    LoginSchema: joi_1.default.object({
        mobile: joi_1.default.string().trim().max(320).required().messages({
            "string.empty": `Mobile no. is required.`,
            "any.required": `Mobile no. is required.`,
            "string.max": `Mobile no. length must be less than or equal to 320 characters long.`,
        }),
        password: joi_1.default.string().trim().max(100).required().messages({
            "string.empty": `Password is required.`,
            "any.required": `Password is required.`,
            "string.max": `Password length must be less than or equal to 100 characters long.`,
        }),
    }),
    ChangePasswordSchema: joi_1.default.object({
        password: joi_1.default.string().trim().max(100).required().messages({
            "string.empty": `Password is required.`,
            "any.required": `Password is required.`,
            "string.max": `Password length must be less than or equal to 100 characters long.`,
        }),
        userId: joi_1.default.number().optional(),
    })
};
const loginSanitize = (req, res, next) => {
    if (field_helper_service_1.FieldHelperService.undefinedAndNullCheck(req.body.mobile)) {
        req.body.mobile = (0, html_entities_1.decode)(req.sanitize(req.body.mobile));
    }
    if (field_helper_service_1.FieldHelperService.undefinedAndNullCheck(req.body.password)) {
        req.body.password = (0, html_entities_1.decode)(req.sanitize(req.body.password));
    }
    next();
};
exports.loginSanitize = loginSanitize;
const changePasswordSanitize = (req, res, next) => {
    if (field_helper_service_1.FieldHelperService.undefinedAndNullCheck(req.body.password)) {
        req.body.password = (0, html_entities_1.decode)(req.sanitize(req.body.password));
    }
    next();
};
exports.changePasswordSanitize = changePasswordSanitize;
//# sourceMappingURL=authentication.schema.js.map