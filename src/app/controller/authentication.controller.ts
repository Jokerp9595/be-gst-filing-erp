import { applicationLogger, Global } from '../../configs';
import response from '../../configs/response.json';
import { FieldHelperService } from '../../services';
import { UserModel } from '../model';
import { Controller } from './controller';

export class AuthenticationController extends Controller {

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
            body.password = await Global.encrypt(body.password);
            body.mobileNo = body.mobileNoOrEmailAddress;
            body.emailAddress = body.mobileNoOrEmailAddress;
            body.action = "LOGIN";
            var userData: any = await new UserModel().tblUserCRUD(body);
            if (userData.length > 0) {
                userData = userData[0];
                if (userData.status.toLowerCase() === 'active') {
                    const tokenArray = {
                        id: userData.user_id,
                        role: userData.user_type_name,
                        tokenType: "Access",
                        ipAddress: this.req.ip
                    };
                    userData['access_token'] = await Global.token(tokenArray);
                    userData['refresh_token'] = await Global.token(tokenArray, true);
                    return this.res.status(200).send({ status: 1, message: response["203"], data: userData });
                }
                else {
                    return this.res.status(200).send({ status: 0, message: response["202"] });
                }
            }
            else {
                return this.res.status(200).send({ status: 0, message: response["201"] });
            }
        } catch (err: any) {
            applicationLogger.error(`AuthenticationController login`, { body: this.req.body, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response['100'], error: err.toString() });
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
            body.userId = body.userId ? body.userId : await Global.getTokenValue(this.req, "id");
            body.password = await Global.encrypt(body.password);
            body.action = "SELECTBYID";
            const userData: any = await new UserModel().tblUserCRUD(body);
            if (userData.length > 0) {
                body.action = "CHANGE PASSWORD";
                await new UserModel().tblUserCRUD(body);
                return this.res.status(200).send({ status: 1, message: response["204"] });
            }
            else {
                return this.res.status(200).send({ status: 0, message: response["205"] });
            }
        } catch (err: any) {
            applicationLogger.error(`AuthenticationController changePassword`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response['100'], error: err.toString() });
        }
    }

    /**
     * refreshToken function is created for generate a new token for an user
     *
     * @memberof AuthenticationController
     */
    async refreshToken() {
        try {
            const body: any = {};
            body.userId = await Global.getTokenValue(this.req, "id");
            body.role = await Global.getTokenValue(this.req, "role");

            const tokenArray = {
                id: body.userId,
                role: body.role,
                tokenType: "Access",
                ipAddress: this.req.ip
            };

            const userData: any = {};
            userData['access_token'] = await Global.token(tokenArray);
            userData['refresh_token'] = await Global.token(tokenArray, true);

            return this.res.status(200).send({ status: 1, message: response["201"], data: userData });
        } catch (err: any) {
            applicationLogger.error(`AuthenticationController refreshToken`, { body: this.req.body, authorization: this.req.headers.authorization, error: err.toString() });
            return this.res.status(500).send({ status: 0, message: response['100'], error: err.toString() });
        }
    }
}