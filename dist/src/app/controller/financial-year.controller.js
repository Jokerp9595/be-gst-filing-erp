"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialYearController = void 0;
const controller_1 = require("./controller");
const response_json_1 = __importDefault(require("../../configs/response.json"));
const configs_1 = require("../../configs");
const model_1 = require("../model");
class FinancialYearController extends controller_1.Controller {
    constructor() {
        super();
    }
    /**
     * add function is created for check and add financial year
     *
     * @memberof FinancialYearController
     */
    async add() {
        try {
            const body = this.req.body;
            body.action = "CHECK";
            const userCheckData = await new model_1.FinancialYearModel().tblFinancialYearCRUD(body);
            if (userCheckData.length === 0) {
                body.action = "INSERT";
                await new model_1.FinancialYearModel().tblFinancialYearCRUD(body);
                return this.res.status(200).send({ status: 1, message: response_json_1.default["201"] });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response_json_1.default["401"] });
            }
        }
        catch (err) {
            configs_1.applicationLogger.error(`FinancialYearController add`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response_json_1.default['100'], error: err.toString() });
        }
    }
    /**
     * update function is created for check and update Financial year details
     *
     * @memberof FinancialYearController
     */
    async update() {
        try {
            const body = this.req.body;
            body.action = "SELECTBYID";
            const userData = await new model_1.FinancialYearModel().tblFinancialYearCRUD(body);
            if (userData.length > 0) {
                body.action = "CHECK";
                const userCheckData = await new model_1.FinancialYearModel().tblFinancialYearCRUD(body);
                if (userCheckData.length === 0) {
                    body.action = "UPDATE";
                    await new model_1.FinancialYearModel().tblFinancialYearCRUD(body);
                    return this.res.status(200).send({ status: 1, message: response_json_1.default["200"] });
                }
                else {
                    return this.res.status(200).send({ status: 0, message: response_json_1.default["401"] });
                }
            }
            else {
                return this.res.status(200).send({ status: 0, message: response_json_1.default["205"] });
            }
        }
        catch (err) {
            configs_1.applicationLogger.error(`FinancialYearController update`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response_json_1.default['100'], error: err.toString() });
        }
    }
    /**
     * status function is created for update financial year status
     *
     * @memberof FinancialYearController
     */
    async status() {
        try {
            const body = this.req.body;
            body.action = "SELECTBYID";
            const userData = await new model_1.FinancialYearModel().tblFinancialYearCRUD(body);
            if (userData.length > 0) {
                body.action = "STATUS";
                await new model_1.FinancialYearModel().tblFinancialYearCRUD(body);
                return this.res.status(200).send({ status: 1, message: response_json_1.default["200"] });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response_json_1.default["205"] });
            }
        }
        catch (err) {
            configs_1.applicationLogger.error(`FinancialYearController status`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response_json_1.default['100'], error: err.toString() });
        }
    }
    /**
     * selectAll function is created for get all financial years
     *
     * @memberof FinancialYearController
     */
    async selectAll() {
        try {
            const body = {};
            body.action = "SELECTALL";
            const userData = await new model_1.FinancialYearModel().tblFinancialYearCRUD(body);
            if (userData.length > 0) {
                return this.res.status(200).send({ status: 1, message: response_json_1.default["200"], data: userData });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response_json_1.default["400"] });
            }
        }
        catch (err) {
            configs_1.applicationLogger.error(`FinancialYearController selectAll`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response_json_1.default['100'], error: err.toString() });
        }
    }
    /**
     * selectActive function is created for get active financial year
     *
     * @memberof FinancialYearController
     */
    async selectActive() {
        try {
            const body = {
                userTypeId: this.req.params.userTypeId,
            };
            body.action = "SELECTACTIVE";
            const userData = await new model_1.FinancialYearModel().tblFinancialYearCRUD(body);
            if (userData.length > 0) {
                return this.res.status(200).send({ status: 1, message: response_json_1.default["200"], data: userData });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response_json_1.default["400"] });
            }
        }
        catch (err) {
            configs_1.applicationLogger.error(`FinancialYearController selectActive`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response_json_1.default['100'], error: err.toString() });
        }
    }
    /**
     * selectById function is created for get financial year details
     *
     * @memberof FinancialYearController
     */
    async selectById() {
        try {
            const body = {
                financialYearId: this.req.params.financialYearId,
            };
            body.action = "SELECTBYID";
            const userData = await new model_1.FinancialYearModel().tblFinancialYearCRUD(body);
            if (userData.length > 0) {
                return this.res.status(200).send({ status: 1, message: response_json_1.default["200"], data: userData[0] });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response_json_1.default["205"] });
            }
        }
        catch (err) {
            configs_1.applicationLogger.error(`FinancialYearController selectById`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response_json_1.default['100'], error: err.toString() });
        }
    }
}
exports.FinancialYearController = FinancialYearController;
//# sourceMappingURL=financial-year.controller.js.map