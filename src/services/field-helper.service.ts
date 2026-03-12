/****************************
 FIELD VALIDATION OPERATIONS
 ****************************/

export class FieldHelperService {

    // Method to check undefined and null
    static undefinedAndNullCheckWithOutBlankValue(name: any) {
        return name !== undefined && name !== null;
    }

    // Method to check undefined and null
    static undefinedAndNullCheck(name: any) {
        return name !== undefined && name !== null && name !== '';
    }

    // Method to check JSON input
    static isValidJson(str: any) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
}