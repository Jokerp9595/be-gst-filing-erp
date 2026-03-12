import joi from "joi";
import { FieldHelperService } from "../../services/field-helper.service";
import { decode } from 'html-entities';

export const authenticationSchemas = {
  LoginSchema: joi.object({
    mobile: joi.string().trim().max(320).required().messages({
      "string.empty": `Mobile no. is required.`,
      "any.required": `Mobile no. is required.`,
      "string.max": `Mobile no. length must be less than or equal to 320 characters long.`,
    }),
    password: joi.string().trim().max(100).required().messages({
      "string.empty": `Password is required.`,
      "any.required": `Password is required.`,
      "string.max": `Password length must be less than or equal to 100 characters long.`,
    }),
  }),
  ChangePasswordSchema: joi.object({
    password: joi.string().trim().max(100).required().messages({
      "string.empty": `Password is required.`,
      "any.required": `Password is required.`,
      "string.max": `Password length must be less than or equal to 100 characters long.`,
    }),
    userId: joi.number().optional(),
  })
};

export const loginSanitize = (req: any, res: any, next: any) => {
  if (FieldHelperService.undefinedAndNullCheck(req.body.mobile)) {
    req.body.mobile = decode(req.sanitize(req.body.mobile));
  }
  if (FieldHelperService.undefinedAndNullCheck(req.body.password)) {
    req.body.password = decode(req.sanitize(req.body.password));
  }
  next();
};

export const changePasswordSanitize = (req: any, res: any, next: any) => {
  if (FieldHelperService.undefinedAndNullCheck(req.body.password)) {
    req.body.password = decode(req.sanitize(req.body.password));
  }
  next();
};