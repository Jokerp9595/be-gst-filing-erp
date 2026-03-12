import { ResultSetHeader, RowDataPacket } from "mysql2";
import { applicationLogger } from "../../configs";
import { connection } from "../../configs/mysql.config";
import { FieldHelperService } from "../../services";

export class UserModel {

    /**
     * tblUserCRUD model function created for calling a tblUserCRUD stored procedure to CRUD Operation
     * @param JsonObject body
     * 
     * @memberof UserModel
     */
    async tblUserCRUD(body: any) {
        return new Promise(function (resolve, reject) {
            const query = "call tblUserCRUD(?, ?, ?, ?, ?, ?, ?, ?, ?);";
            const queryParameter = [
                FieldHelperService.undefinedAndNullCheck(body.userId) ? body.userId : 0,
                FieldHelperService.undefinedAndNullCheck(body.fullName) ? body.fullName : "",
                FieldHelperService.undefinedAndNullCheck(body.email) ? body.email : "",
                FieldHelperService.undefinedAndNullCheck(body.companyName) ? body.companyName : "",
                FieldHelperService.undefinedAndNullCheck(body.mobile) ? body.mobile : "",
                FieldHelperService.undefinedAndNullCheck(body.password) ? body.password : "",
                FieldHelperService.undefinedAndNullCheck(body.status) ? body.status : "",
                FieldHelperService.undefinedAndNullCheck(body.emailVerified) ? body.emailVerified : 0,
                FieldHelperService.undefinedAndNullCheck(body.action) ? body.action : ""
            ];
            switch (body.action) {
                case 'CHECK':
                case 'SELECTALL':
                case 'SELECTACTIVE':
                case 'SELECTBYID':
                case 'LOGIN':
                    connection.query<RowDataPacket[]>(query, queryParameter, function (err, res: RowDataPacket[]) {
                        if (err) {
                            applicationLogger.error(`UserModel tblUserCRUD check`, { body: body, error: err });
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
                            applicationLogger.error(`UserModel tblUserCRUD default`, { body: body, error: err });
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