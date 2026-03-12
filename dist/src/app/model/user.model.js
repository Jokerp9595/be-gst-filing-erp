"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const configs_1 = require("../../configs");
const mysql_config_1 = require("../../configs/mysql.config");
const services_1 = require("../../services");
class UserModel {
    /**
     * tblUserCRUD model function created for calling a tblUserCRUD stored procedure to CRUD Operation
     * @param JsonObject body
     *
     * @memberof UserModel
     */
    async tblUserCRUD(body) {
        return new Promise(function (resolve, reject) {
            const query = "call tblUserCRUD(?, ?, ?, ?, ?, ?, ?, ?, ?);";
            const queryParameter = [
                services_1.FieldHelperService.undefinedAndNullCheck(body.userId) ? body.userId : 0,
                services_1.FieldHelperService.undefinedAndNullCheck(body.fullName) ? body.fullName : "",
                services_1.FieldHelperService.undefinedAndNullCheck(body.email) ? body.email : "",
                services_1.FieldHelperService.undefinedAndNullCheck(body.companyName) ? body.companyName : "",
                services_1.FieldHelperService.undefinedAndNullCheck(body.mobile) ? body.mobile : "",
                services_1.FieldHelperService.undefinedAndNullCheck(body.password) ? body.password : "",
                services_1.FieldHelperService.undefinedAndNullCheck(body.status) ? body.status : "",
                services_1.FieldHelperService.undefinedAndNullCheck(body.emailVerified) ? body.emailVerified : 0,
                services_1.FieldHelperService.undefinedAndNullCheck(body.action) ? body.action : ""
            ];
            switch (body.action) {
                case 'CHECK':
                case 'SELECTALL':
                case 'SELECTACTIVE':
                case 'SELECTBYID':
                case 'LOGIN':
                    mysql_config_1.connection.query(query, queryParameter, function (err, res) {
                        if (err) {
                            configs_1.applicationLogger.error(`UserModel tblUserCRUD check`, { body: body, error: err });
                            reject(err.message);
                        }
                        else {
                            resolve(res[0]);
                        }
                    });
                    break;
                default:
                    mysql_config_1.connection.query(query, queryParameter, function (err, res) {
                        if (err) {
                            configs_1.applicationLogger.error(`UserModel tblUserCRUD default`, { body: body, error: err });
                            reject(err.message);
                        }
                        else {
                            resolve(res.affectedRows);
                        }
                    });
                    break;
            }
        });
    }
}
exports.UserModel = UserModel;
//# sourceMappingURL=user.model.js.map