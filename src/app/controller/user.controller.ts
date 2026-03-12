import { Controller } from './controller';
import response from '../../configs/response.json';
import { applicationLogger, Global } from '../../configs';
import { UserModel } from '../model';

export class UserController extends Controller {

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
            body.createdUpdatedBy = await Global.getTokenValue(this.req, "id");
            body.password = await Global.encrypt(body.password);
            body.action = "CHECK";
            const userCheckData: any = await new UserModel().tblUserCRUD(body);
            if (userCheckData.length === 0) {
                body.action = "INSERT";
                await new UserModel().tblUserCRUD(body);
                return this.res.status(200).send({ status: 1, message: response["201"] });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response["406"] });
            }
        } catch (err: any) {
            applicationLogger.error(`UserController addUser`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response['100'], error: err.toString() });
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
            body.createdUpdatedBy = await Global.getTokenValue(this.req, "id");
            body.action = "SELECTBYID";
            const userData: any = await new UserModel().tblUserCRUD(body);
            if (userData.length > 0) {

                body.action = "CHECK";
                const userCheckData: any = await new UserModel().tblUserCRUD(body);
                if (userCheckData.length === 0) {
                    body.action = "UPDATE";
                    await new UserModel().tblUserCRUD(body);
                    return this.res.status(200).send({ status: 1, message: response["200"] });
                }
                else {
                    return this.res.status(200).send({ status: 0, message: response["406"] });
                }

            }
            else {
                return this.res.status(200).send({ status: 0, message: response["205"] });
            }
        } catch (err: any) {
            applicationLogger.error(`UserController updateUser`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response['100'], error: err.toString() });
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
            body.createdUpdatedBy = await Global.getTokenValue(this.req, "id");
            body.action = "SELECTBYID";
            const userData: any = await new UserModel().tblUserCRUD(body);
            if (userData.length > 0) {
                body.action = "STATUS";
                await new UserModel().tblUserCRUD(body);
                return this.res.status(200).send({ status: 1, message: response["200"] });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response["205"] });
            }
        } catch (err: any) {
            applicationLogger.error(`UserController statusUser`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response['100'], error: err.toString() });
        }
    }

    /**
     * selectUser function is created for get all user
     *
     * @memberof UserController
     */
    async selectAllUser() {
        try {
            const body: any = {};
            body.action = "SELECTALL";
            const userData: any = await new UserModel().tblUserCRUD(body);
            if (userData.length > 0) {
                return this.res.status(200).send({ status: 1, message: response["200"], data: userData });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response["400"] });
            }
        } catch (err: any) {
            applicationLogger.error(`UserController selectAllUser`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response['100'], error: err.toString() });
        }
    }

    /**
     * selectUser function is created for get active user by type
     *
     * @memberof UserController
     */
    async selectActiveUser() {
        try {
            const body: any = {
                userTypeId: this.req.params.userTypeId,
            };
            body.action = "SELECTACTIVE";
            const userData: any = await new UserModel().tblUserCRUD(body);
            if (userData.length > 0) {
                return this.res.status(200).send({ status: 1, message: response["200"], data: userData });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response["400"] });
            }
        } catch (err: any) {
            applicationLogger.error(`UserController selectActiveUser`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response['100'], error: err.toString() });
        }
    }

    /**
     * selectById function is created for get user details
     *
     * @memberof UserController
     */
    async selectById() {
        try {
            const body: any = {
                userId: this.req.params.userId,
            };
            body.action = "SELECTBYID";
            const userData: any = await new UserModel().tblUserCRUD(body);
            if (userData.length > 0) {
                return this.res.status(200).send({ status: 1, message: response["200"], data: userData[0] });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response["205"] });
            }
        } catch (err: any) {
            applicationLogger.error(`UserController select By Id`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response['400'], error: err.toString() });
        }
    }

    /**
     * selectUser function is created for get user details
     *
     * @memberof UserController
     */
    async selectUser() {
        try {
            const body: any = {};
            body.userId = await Global.getTokenValue(this.req, "id");
            body.action = "SELECTBYID";
            const userData: any = await new UserModel().tblUserCRUD(body);
            if (userData.length > 0) {
                return this.res.status(200).send({ status: 1, message: response["200"], data: userData[0] });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response["400"] });
            }
        } catch (err: any) {
            applicationLogger.error(`UserController selectUser`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response['100'], error: err.toString() });
        }
    }
}