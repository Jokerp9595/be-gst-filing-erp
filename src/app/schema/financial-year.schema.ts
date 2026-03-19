import { decode } from "html-entities";
import joi from "joi";
import { FieldHelperService } from "../../services/field-helper.service";

export const financialYearSchemas = {
    AddSchema: joi.object({
        name: joi.string().trim().max(500).required().messages({
            "string.empty": `Financial year name is required.`,
            "any.required": `Financial year name is required.`,
            "string.max": `Financial year name length must be less than or equal to 500 characters long.`,
        }),
        fyFrom: joi.string().trim().max(10).required().messages({
            "string.empty": `Financial year from date is required.`,
            "any.required": `Financial year from date is required.`,
            "string.max": `Financial year from date length must be less than or equal to 10 characters long.`,
        }),
        fyTo: joi.string().trim().max(10).required().messages({
            "string.empty": `Financial year to date is required.`,
            "any.required": `Financial year to date is required.`,
            "string.max": `Financial year to date length must be less than or equal to 10 characters long.`,
        }),
        isClosed: joi.number().integer().valid(0, 1).required().messages({
            "any.required": `Financial year closed status is required.`,
            "number.base": `Financial year closed status must be a number`,
            'any.only': `Financial year closed status must be one of 0 or 1.`
        }),
    }),

    UpdateSchema: joi.object({
        financialYearId: joi.number().integer().positive().required().messages({
            "any.required": `Financial year id is required.`,
            "number.base": `Financial year id must be a number`,
            "number.positive": `Financial year id must be a positive number`,
        }),
        name: joi.string().trim().max(500).required().messages({
            "string.empty": `Financial year name is required.`,
            "any.required": `Financial year name is required.`,
            "string.max": `Financial year name length must be less than or equal to 500 characters long.`,
        }),
        fyFrom: joi.string().trim().max(10).required().messages({
            "string.empty": `Financial year from date is required.`,
            "any.required": `Financial year from date is required.`,
            "string.max": `Financial year from date length must be less than or equal to 10 characters long.`,
        }),
        fyTo: joi.string().trim().max(10).required().messages({
            "string.empty": `Financial year to date is required.`,
            "any.required": `Financial year to date is required.`,
            "string.max": `Financial year to date length must be less than or equal to 10 characters long.`,
        }),
        isClosed: joi.number().integer().valid(0, 1).required().messages({
            "any.required": `Financial year closed status is required.`,
            "number.base": `Financial year closed status must be a number`,
            'any.only': `Financial year closed status must be one of 0 or 1.`
        }),
    }),

    statusUpdateSchema: joi.object({
        financialYearId: joi.number().integer().positive().required().messages({
            "any.required": `Financial year id is required.`,
            "number.base": `Financial year id must be a number`,
            "number.positive": `Financial year id must be a positive number`,
        }),
        status: joi.number().integer().valid(0, 1).required().messages({
            "any.required": `Financial year status is required.`,
            "number.base": `Financial year status must be a number`,
            'any.only': `Financial year status must be one of 0 or 1.`
        }),
    }),

    SelectByIdSchema: joi.object({
        financialYearId: joi.number().integer().positive().required().messages({
            "any.required": `Financial year id is required.`,
            "number.base": `Financial year id must be a number`,
            "number.positive": `Financial year id must be a positive number`,
        })
    }),
}

export const addFinancialYearSanitize = (req: any, res: any, next: any) => {
    const fieldsToSanitize = ['name', 'fyFrom', 'fyTo', 'isClosed'];

    for (const field of fieldsToSanitize) {
        if (FieldHelperService.undefinedAndNullCheck(req.body[field])) {
            req.body[field] = decode(req.sanitize(req.body[field] + ""));
        }
    }
    next();
};

export const updateFinancialYearSanitize = (req: any, res: any, next: any) => {
    const fieldsToSanitize = ['financialYearId', 'name', 'fyFrom', 'fyTo', 'isClosed'];

    for (const field of fieldsToSanitize) {
        if (FieldHelperService.undefinedAndNullCheck(req.body[field])) {
            req.body[field] = decode(req.sanitize(req.body[field] + ""));
        }
    }
    next();
};

export const selectByIdFinancialYearSanitize = (req: any, res: any, next: any) => {
    if (FieldHelperService.undefinedAndNullCheck(req.params.financialYearId)) {
        req.params.financialYearId = decode(req.sanitize(req.params.financialYearId));
    }
    next();
};

export const statusUpdateFinancialYearSanitize = (req: any, res: any, next: any) => {
    const fieldsToSanitize = ['financialYearId', 'status'];

    for (const field of fieldsToSanitize) {
        if (FieldHelperService.undefinedAndNullCheck(req.body[field])) {
            req.body[field] = decode(req.sanitize(req.body[field] + ""));
        }
    }
    next();
};