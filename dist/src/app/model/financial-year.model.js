"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialYearModel = void 0;
const configs_1 = require("../../configs");
const mysql_config_1 = require("../../configs/mysql.config");
const services_1 = require("../../services");
class FinancialYearModel {
    /**
     * tblFinancialYearCRUD model function created for calling a tblFinancialYearCRUD stored procedure to CRUD Operation
     * @param JsonObject body
     *
     * @memberof FinancialYearModel
     */
    async tblFinancialYearCRUD(body) {
        return new Promise(function (resolve, reject) {
            const query = "call tblFinancialYearCRUD(?, ?, ?, ?, ?, ?, ?);";
            const queryParameter = [
                services_1.FieldHelperService.undefinedAndNullCheck(body.financialYearId) ? body.financialYearId : 0,
                services_1.FieldHelperService.undefinedAndNullCheck(body.name) ? body.name : "",
                services_1.FieldHelperService.undefinedAndNullCheck(body.fyFrom) ? body.fyFrom : "",
                services_1.FieldHelperService.undefinedAndNullCheck(body.fyTo) ? body.fyTo : "",
                services_1.FieldHelperService.undefinedAndNullCheck(body.isClosed) ? body.isClosed : 0,
                services_1.FieldHelperService.undefinedAndNullCheck(body.status) ? body.status : 0,
                services_1.FieldHelperService.undefinedAndNullCheck(body.action) ? body.action : ""
            ];
            switch (body.action) {
                case 'CHECK':
                case 'SELECTALL':
                case 'SELECTACTIVE':
                case 'SELECTBYID':
                    mysql_config_1.connection.query(query, queryParameter, function (err, res) {
                        if (err) {
                            configs_1.applicationLogger.error(`FinancialYearModel tblFinancialYearCRUD check`, { body: body, error: err });
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
                            configs_1.applicationLogger.error(`FinancialYearModel tblFinancialYearCRUD default`, { body: body, error: err });
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
exports.FinancialYearModel = FinancialYearModel;
//# sourceMappingURL=financial-year.model.js.map