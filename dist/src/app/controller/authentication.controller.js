"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationController = void 0;
const configs_1 = require("../../configs");
const response_json_1 = __importDefault(require("../../configs/response.json"));
const model_1 = require("../model");
const controller_1 = require("./controller");
class AuthenticationController extends controller_1.Controller {
    constructor() {
        super();
    }
    /**
     * login function is created for login any user based on role
     *
     * @memberof AuthenticationController
     */
    async login() {
        try {
            const body = this.req.body;
            body.password = await configs_1.Global.encrypt(body.password);
            body.mobileNo = body.mobileNoOrEmailAddress;
            body.emailAddress = body.mobileNoOrEmailAddress;
            body.action = "LOGIN";
            var userData = await new model_1.UserModel().tblUserCRUD(body);
            if (userData.length > 0) {
                userData = userData[0];
                if (userData.status.toLowerCase() === 'active') {
                    const tokenArray = {
                        id: userData.user_id,
                        role: userData.user_type_name,
                        tokenType: "Access",
                        ipAddress: this.req.ip
                    };
                    userData['access_token'] = await configs_1.Global.token(tokenArray);
                    userData['refresh_token'] = await configs_1.Global.token(tokenArray, true);
                    return this.res.status(200).send({ status: 1, message: response_json_1.default["203"], data: userData });
                }
                else {
                    return this.res.status(200).send({ status: 0, message: response_json_1.default["202"] });
                }
            }
            else {
                return this.res.status(200).send({ status: 0, message: response_json_1.default["201"] });
            }
        }
        catch (err) {
            configs_1.applicationLogger.error(`AuthenticationController login`, { body: this.req.body, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response_json_1.default['100'], error: err.toString() });
        }
    }
    /**
     * changePassword function is created for update or change a password for any user
     *
     * @memberof AuthenticationController
     */
    async changePassword() {
        try {
            const body = this.req.body;
            body.userId = body.userId ? body.userId : await configs_1.Global.getTokenValue(this.req, "id");
            body.password = await configs_1.Global.encrypt(body.password);
            body.action = "SELECTBYID";
            const userData = await new model_1.UserModel().tblUserCRUD(body);
            if (userData.length > 0) {
                body.action = "CHANGE PASSWORD";
                await new model_1.UserModel().tblUserCRUD(body);
                return this.res.status(200).send({ status: 1, message: response_json_1.default["204"] });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response_json_1.default["205"] });
            }
        }
        catch (err) {
            configs_1.applicationLogger.error(`AuthenticationController changePassword`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response_json_1.default['100'], error: err.toString() });
        }
    }
    /**
     * refreshToken function is created for generate a new token for an user
     *
     * @memberof AuthenticationController
     */
    async refreshToken() {
        try {
            const body = {};
            body.userId = await configs_1.Global.getTokenValue(this.req, "id");
            body.role = await configs_1.Global.getTokenValue(this.req, "role");
            const tokenArray = {
                id: body.userId,
                role: body.role,
                tokenType: "Access",
                ipAddress: this.req.ip
            };
            const userData = {};
            userData['access_token'] = await configs_1.Global.token(tokenArray);
            userData['refresh_token'] = await configs_1.Global.token(tokenArray, true);
            return this.res.status(200).send({ status: 1, message: response_json_1.default["201"], data: userData });
        }
        catch (err) {
            configs_1.applicationLogger.error(`AuthenticationController refreshToken`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response_json_1.default['100'], error: err.toString() });
        }
    }
}
exports.AuthenticationController = AuthenticationController;
//# sourceMappingURL=authentication.controller.js.map