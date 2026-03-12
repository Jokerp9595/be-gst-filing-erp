"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const controller_1 = require("./controller");
const response_json_1 = __importDefault(require("../../configs/response.json"));
const configs_1 = require("../../configs");
const model_1 = require("../model");
class UserController extends controller_1.Controller {
    constructor() {
        super();
    }
    /**
     * addUser function is created for check and add user
     *
     * @memberof UserController
     */
    async addUser() {
        try {
            const body = this.req.body;
            body.createdUpdatedBy = await configs_1.Global.getTokenValue(this.req, "id");
            body.password = await configs_1.Global.encrypt(body.password);
            body.action = "CHECK";
            const userCheckData = await new model_1.UserModel().tblUserCRUD(body);
            if (userCheckData.length === 0) {
                body.action = "INSERT";
                await new model_1.UserModel().tblUserCRUD(body);
                return this.res.status(200).send({ status: 1, message: response_json_1.default["201"] });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response_json_1.default["406"] });
            }
        }
        catch (err) {
            configs_1.applicationLogger.error(`UserController addUser`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response_json_1.default['100'], error: err.toString() });
        }
    }
    /**
     * updateUser function is created for check and update user details
     *
     * @memberof UserController
     */
    async updateUser() {
        try {
            const body = this.req.body;
            body.createdUpdatedBy = await configs_1.Global.getTokenValue(this.req, "id");
            body.action = "SELECTBYID";
            const userData = await new model_1.UserModel().tblUserCRUD(body);
            if (userData.length > 0) {
                body.action = "CHECK";
                const userCheckData = await new model_1.UserModel().tblUserCRUD(body);
                if (userCheckData.length === 0) {
                    body.action = "UPDATE";
                    await new model_1.UserModel().tblUserCRUD(body);
                    return this.res.status(200).send({ status: 1, message: response_json_1.default["200"] });
                }
                else {
                    return this.res.status(200).send({ status: 0, message: response_json_1.default["406"] });
                }
            }
            else {
                return this.res.status(200).send({ status: 0, message: response_json_1.default["205"] });
            }
        }
        catch (err) {
            configs_1.applicationLogger.error(`UserController updateUser`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response_json_1.default['100'], error: err.toString() });
        }
    }
    /**
     * statusUser function is created for update user status
     *
     * @memberof UserController
     */
    async statusUser() {
        try {
            const body = this.req.body;
            body.createdUpdatedBy = await configs_1.Global.getTokenValue(this.req, "id");
            body.action = "SELECTBYID";
            const userData = await new model_1.UserModel().tblUserCRUD(body);
            if (userData.length > 0) {
                body.action = "STATUS";
                await new model_1.UserModel().tblUserCRUD(body);
                return this.res.status(200).send({ status: 1, message: response_json_1.default["200"] });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response_json_1.default["205"] });
            }
        }
        catch (err) {
            configs_1.applicationLogger.error(`UserController statusUser`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response_json_1.default['100'], error: err.toString() });
        }
    }
    /**
     * selectUser function is created for get all user
     *
     * @memberof UserController
     */
    async selectAllUser() {
        try {
            const body = {};
            body.action = "SELECTALL";
            const userData = await new model_1.UserModel().tblUserCRUD(body);
            if (userData.length > 0) {
                return this.res.status(200).send({ status: 1, message: response_json_1.default["200"], data: userData });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response_json_1.default["400"] });
            }
        }
        catch (err) {
            configs_1.applicationLogger.error(`UserController selectAllUser`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response_json_1.default['100'], error: err.toString() });
        }
    }
    /**
     * selectUser function is created for get active user by type
     *
     * @memberof UserController
     */
    async selectActiveUser() {
        try {
            const body = {
                userTypeId: this.req.params.userTypeId,
            };
            body.action = "SELECTACTIVE";
            const userData = await new model_1.UserModel().tblUserCRUD(body);
            if (userData.length > 0) {
                return this.res.status(200).send({ status: 1, message: response_json_1.default["200"], data: userData });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response_json_1.default["400"] });
            }
        }
        catch (err) {
            configs_1.applicationLogger.error(`UserController selectActiveUser`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response_json_1.default['100'], error: err.toString() });
        }
    }
    /**
     * selectById function is created for get user details
     *
     * @memberof UserController
     */
    async selectById() {
        try {
            const body = {
                userId: this.req.params.userId,
            };
            body.action = "SELECTBYID";
            const userData = await new model_1.UserModel().tblUserCRUD(body);
            if (userData.length > 0) {
                return this.res.status(200).send({ status: 1, message: response_json_1.default["200"], data: userData[0] });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response_json_1.default["205"] });
            }
        }
        catch (err) {
            configs_1.applicationLogger.error(`UserController select By Id`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response_json_1.default['400'], error: err.toString() });
        }
    }
    /**
     * selectUser function is created for get user details
     *
     * @memberof UserController
     */
    async selectUser() {
        try {
            const body = {};
            body.userId = await configs_1.Global.getTokenValue(this.req, "id");
            body.action = "SELECTBYID";
            const userData = await new model_1.UserModel().tblUserCRUD(body);
            if (userData.length > 0) {
                return this.res.status(200).send({ status: 1, message: response_json_1.default["200"], data: userData[0] });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response_json_1.default["400"] });
            }
        }
        catch (err) {
            configs_1.applicationLogger.error(`UserController selectUser`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response_json_1.default['100'], error: err.toString() });
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map