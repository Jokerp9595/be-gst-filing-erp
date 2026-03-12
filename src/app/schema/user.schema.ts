import { decode } from 'html-entities';
import joi from "joi";
import { configuration } from "../../configs";
import { FieldHelperService } from "../../services/field-helper.service";

export const userSchemas = {
    AddSchema: joi.object({
        fullName: joi.string().trim().max(500).required().messages({
            "string.empty": `Full name is required.`,
            "any.required": `Full name is required.`,
            "string.max": `Full name length must be less than or equal to 500 characters long.`,
        }),
        companyName: joi.string().trim().max(500).required().messages({
            "string.empty": `Company name is required.`,
            "any.required": `Company name is required.`,
            "string.max": `Company name length must be less than or equal to 500 characters long.`,
        }),
        mobile: joi.string().trim().max(10).required().messages({
            "string.empty": `Mobile no. is required.`,
            "any.required": `Mobile no. is required.`,
            "string.max": `Mobile no. length must be less than or equal to 10 characters long.`,
        }),
        email: joi.string().trim().max(320).pattern(new RegExp(configuration.emailAddressPattern)).required().allow("").messages({
            "string.empty": `Email address is required.`,
            "any.required": `Email address is required.`,
            "string.max": `Email address length must be less than or equal to 320 characters long.`,
            'string.pattern.base': `Email address is invalid.`,
        }),
        password: joi.string().trim().max(100).required().messages({
            "string.empty": `Password is required.`,
            "any.required": `Password is required.`,
            "string.max": `Password length must be less than or equal to 100 characters long.`,
        }),
    }),
    UpdateSchema: joi.object({
        userId: joi.number().integer().positive().required().messages({
            "any.required": `User id is required.`,
            "number.base": `User id must be a number`,
            "number.positive": `User id must be a positive number`,
        }),
        fullName: joi.string().trim().max(500).required().messages({
            "string.empty": `Full name is required.`,
            "any.required": `Full name is required.`,
            "string.max": `Full name length must be less than or equal to 500 characters long.`,
        }),
        companyName: joi.string().trim().max(500).required().messages({
            "string.empty": `Company name is required.`,
            "any.required": `Company name is required.`,
            "string.max": `Company name length must be less than or equal to 500 characters long.`,
        }),
        mobile: joi.string().trim().max(10).required().messages({
            "string.empty": `Mobile no. is required.`,
            "any.required": `Mobile no. is required.`,
            "string.max": `Mobile no. length must be less than or equal to 10 characters long.`,
        }),
        email: joi.string().trim().max(320).pattern(new RegExp(configuration.emailAddressPattern)).required().allow("").messages({
            "string.empty": `Email address is required.`,
            "any.required": `Email address is required.`,
            "string.max": `Email address length must be less than or equal to 320 characters long.`,
            'string.pattern.base': `Email address is invalid.`,
        }),
        emailVerified: joi.number().integer().valid(0, 1).required().messages({
            "any.required": `Email verified status is required.`,
            "number.base": `Email verified status must be a number`,
            'any.only': `Email verified status must be one of 0 or 1.`
        }),
    }),
    StatusSchema: joi.object({
        userId: joi.number().integer().positive().required().messages({
            "any.required": `User id is required.`,
            "number.base": `User id must be a number`,
            "number.positive": `User id must be a positive number`,
        }),
        status: joi.string().valid('active','inactive','pending').required().messages({
            "any.required": `User status is required.`,
            "string.base": `User status must be a string`,
            'any.only': `User status must be one of 'active', 'inactive', or 'pending' status.`
        }),
    }),
    SelectActiveSchema: joi.object({
        userTypeId: joi.number().integer().positive().required().messages({
            "any.required": `User type id is required.`,
            "number.base": `User type id must be a number`,
            "number.positive": `User type id must be a positive number`,
        })
    }),
    SelectByIdSchema: joi.object({
        userId: joi.number().integer().positive().required().messages({
            "any.required": `User id is required.`,
            "number.base": `User id must be a number`,
            "number.positive": `User id must be a positive number`,
        })
    }),
    UpdateSettingSchema: joi.object({
        userId: joi.number().integer().positive().required().messages({
            "any.required": `User id is required.`,
            "number.base": `User id must be a number`,
            "number.positive": `User id must be a positive number`,
        }),
        defaultCollectionType: joi.string().trim().max(100).required().messages({
            "string.empty": `Default collection type is required.`,
            "any.required": `Default collection type is required.`,
            "string.max": `Default collection type length must be less than or equal to 100 characters long.`,
        })
    }),
};

export const addSanitize = (req: any, res: any, next: any) => {
    const fieldsToSanitize = ['fullName', 'mobile', 'email', 'password', "companyName"];

    for (const field of fieldsToSanitize) {
        if (FieldHelperService.undefinedAndNullCheck(req.body[field])) {
            req.body[field] = decode(req.sanitize(req.body[field] + ""));
        }
    }
    next();
};

export const updateSanitize = (req: any, res: any, next: any) => {
     const fieldsToSanitize = ['userId', 'fullName', 'mobile', 'email', 'password', "companyName", "emailVerified"];

    for (const field of fieldsToSanitize) {
        if (FieldHelperService.undefinedAndNullCheck(req.body[field])) {
            req.body[field] = decode(req.sanitize(req.body[field] + ""));
        }
    }

    next();
};

export const statusSanitize = (req: any, res: any, next: any) => {
    if (FieldHelperService.undefinedAndNullCheck(req.body.userId)) {
        req.body.userId = decode(req.sanitize(req.body.userId));
    }
    if (FieldHelperService.undefinedAndNullCheck(req.body.status)) {
        req.body.status = decode(req.sanitize(req.body.status + ""));
    }
    next();
};

export const selectActiveSanitize = (req: any, res: any, next: any) => {
    if (FieldHelperService.undefinedAndNullCheck(req.params.userTypeId)) {
        req.params.userTypeId = decode(req.sanitize(req.params.userTypeId));
    }
    next();
};

export const selectByIdSanitize = (req: any, res: any, next: any) => {
    if (FieldHelperService.undefinedAndNullCheck(req.params.userId)) {
        req.params.userId = decode(req.sanitize(req.params.userId));
    }
    next();
};

export const updateSettingSanitize = (req: any, res: any, next: any) => {
    if (FieldHelperService.undefinedAndNullCheck(req.body.userId)) {
        req.body.userId = decode(req.sanitize(req.body.userId));
    }
    if (FieldHelperService.undefinedAndNullCheck(req.body.defaultCollectionType)) {
        req.body.defaultCollectionType = decode(req.sanitize(req.body.defaultCollectionType));
    }
    next();
};