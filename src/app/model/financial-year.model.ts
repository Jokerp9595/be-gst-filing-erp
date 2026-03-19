import { ResultSetHeader, RowDataPacket } from "mysql2";
import { applicationLogger } from "../../configs";
import { connection } from "../../configs/mysql.config";
import { FieldHelperService } from "../../services";

export class FinancialYearModel {

    /**
     * tblFinancialYearCRUD model function created for calling a tblFinancialYearCRUD stored procedure to CRUD Operation
     * @param JsonObject body
     * 
     * @memberof FinancialYearModel
     */
    async tblFinancialYearCRUD(body: any) {
        return new Promise(function (resolve, reject) {
            const query = "call tblFinancialYearCRUD(?, ?, ?, ?, ?, ?, ?);";
            const queryParameter = [
                FieldHelperService.undefinedAndNullCheck(body.financialYearId) ? body.financialYearId : 0,
                FieldHelperService.undefinedAndNullCheck(body.name) ? body.name : "",
                FieldHelperService.undefinedAndNullCheck(body.fyFrom) ? body.fyFrom : "",
                FieldHelperService.undefinedAndNullCheck(body.fyTo) ? body.fyTo : "",
                FieldHelperService.undefinedAndNullCheck(body.isClosed) ? body.isClosed : 0,
                FieldHelperService.undefinedAndNullCheck(body.status) ? body.status : 0,
                FieldHelperService.undefinedAndNullCheck(body.action) ? body.action : ""
            ];
            switch (body.action) {
                case 'CHECK':
                case 'SELECTALL':
                case 'SELECTACTIVE':
                case 'SELECTBYID':
                    connection.query<RowDataPacket[]>(query, queryParameter, function (err, res: RowDataPacket[]) {
                        if (err) {
                            applicationLogger.error(`FinancialYearModel tblFinancialYearCRUD check`, { body: body, error: err });
                            reject(err.message);
                        }
                        else {
                            resolve(res[0]);
                        }
                    });
                    break;
                default:
                    connection.query<ResultSetHeader>(query, queryParameter, function (err, res: ResultSetHeader) {
                        if (err) {
                            applicationLogger.error(`FinancialYearModel tblFinancialYearCRUD default`, { body: body, error: err });
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