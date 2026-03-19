import { Controller } from './controller';
import response from '../../configs/response.json';
import { applicationLogger, Global } from '../../configs';
import { FinancialYearModel, UserModel } from '../model';

export class FinancialYearController extends Controller {

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
            const userCheckData: any = await new FinancialYearModel().tblFinancialYearCRUD(body);
            if (userCheckData.length === 0) {
                body.action = "INSERT";
                await new FinancialYearModel().tblFinancialYearCRUD(body);
                return this.res.status(200).send({ status: 1, message: response["201"] });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response["401"] });
            }
        } catch (err: any) {
            applicationLogger.error(`FinancialYearController add`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response['100'], error: err.toString() });
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
            const userData: any = await new FinancialYearModel().tblFinancialYearCRUD(body);
            if (userData.length > 0) {

                body.action = "CHECK";
                const userCheckData: any = await new FinancialYearModel().tblFinancialYearCRUD(body);
                if (userCheckData.length === 0) {
                    body.action = "UPDATE";
                    await new FinancialYearModel().tblFinancialYearCRUD(body);
                    return this.res.status(200).send({ status: 1, message: response["200"] });
                }
                else {
                    return this.res.status(200).send({ status: 0, message: response["401"] });
                }

            }
            else {
                return this.res.status(200).send({ status: 0, message: response["205"] });
            }
        } catch (err: any) {
            applicationLogger.error(`FinancialYearController update`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response['100'], error: err.toString() });
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
            const userData: any = await new FinancialYearModel().tblFinancialYearCRUD(body);
            if (userData.length > 0) {
                body.action = "STATUS";
                await new FinancialYearModel().tblFinancialYearCRUD(body);
                return this.res.status(200).send({ status: 1, message: response["200"] });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response["205"] });
            }
        } catch (err: any) {
            applicationLogger.error(`FinancialYearController status`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response['100'], error: err.toString() });
        }
    }

    /**
     * selectAll function is created for get all financial years
     *
     * @memberof FinancialYearController
     */
    async selectAll() {
        try {
            const body: any = {};
            body.action = "SELECTALL";
            const userData: any = await new FinancialYearModel().tblFinancialYearCRUD(body);
            if (userData.length > 0) {
                return this.res.status(200).send({ status: 1, message: response["200"], data: userData });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response["400"] });
            }
        } catch (err: any) {
            applicationLogger.error(`FinancialYearController selectAll`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response['100'], error: err.toString() });
        }
    }

    /**
     * selectActive function is created for get active financial year
     *
     * @memberof FinancialYearController
     */
    async selectActive() {
        try {
            const body: any = {
                userTypeId: this.req.params.userTypeId,
            };
            body.action = "SELECTACTIVE";
            const userData: any = await new FinancialYearModel().tblFinancialYearCRUD(body);
            if (userData.length > 0) {
                return this.res.status(200).send({ status: 1, message: response["200"], data: userData });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response["400"] });
            }
        } catch (err: any) {
            applicationLogger.error(`FinancialYearController selectActive`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response['100'], error: err.toString() });
        }
    }

    /**
     * selectById function is created for get financial year details
     *
     * @memberof FinancialYearController
     */
    async selectById() {
        try {
            const body: any = {
                financialYearId: this.req.params.financialYearId,
            };
            body.action = "SELECTBYID";
            const userData: any = await new FinancialYearModel().tblFinancialYearCRUD(body);
            if (userData.length > 0) {
                return this.res.status(200).send({ status: 1, message: response["200"], data: userData[0] });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response["205"] });
            }
        } catch (err: any) {
            applicationLogger.error(`FinancialYearController selectById`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response['100'], error: err.toString() });
        }
    }
}