"use strict";
/****************************
 FIELD VALIDATION OPERATIONS
 ****************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldHelperService = void 0;
class FieldHelperService {
    // Method to check undefined and null
    static undefinedAndNullCheckWithOutBlankValue(name) {
        return name !== undefined && name !== null;
    }
    // Method to check undefined and null
    static undefinedAndNullCheck(name) {
        return name !== undefined && name !== null && name !== '';
    }
    // Method to check JSON input
    static isValidJson(str) {
        try {
            JSON.parse(str);
        }
        catch (e) {
            return false;
        }
        return true;
    }
}
exports.FieldHelperService = FieldHelperService;
//# sourceMappingURL=field-helper.service.js.map