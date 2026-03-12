"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormService = void 0;
/****************************
 FORM HANDLING OPERATIONS
 ****************************/
const multiparty_1 = __importDefault(require("multiparty"));
class FormService {
    constructor(request) {
        this.request = request;
    }
    parse() {
        return new Promise((resolve, reject) => {
            try {
                const form = new multiparty_1.default.Form();
                // Parsing the form
                form.parse(this.request, (err, fields, files) => {
                    if (err) {
                        resolve({ message: err.message });
                    }
                    const formParseObject = {};
                    formParseObject.fields = fields;
                    formParseObject.files = files;
                    resolve(formParseObject);
                });
            }
            catch (error) {
                reject({ message: error.toString() });
            }
        });
    }
}
exports.FormService = FormService;
//# sourceMappingURL=form.service.js.map