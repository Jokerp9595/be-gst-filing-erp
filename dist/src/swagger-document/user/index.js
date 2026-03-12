"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_constant_1 = __importDefault(require("../tag-constant"));
const components_1 = __importDefault(require("./components"));
const add_1 = __importDefault(require("./add"));
const update_1 = __importDefault(require("./update"));
const status_1 = __importDefault(require("./status"));
const select_all_1 = __importDefault(require("./select-all"));
const select_active_1 = __importDefault(require("./select-active"));
const select_by_id_1 = __importDefault(require("./select-by-id"));
const select_user_1 = __importDefault(require("./select-user"));
const user = Object.assign(Object.assign({}, components_1.default), { tags: [
        {
            name: tag_constant_1.default.user,
            description: 'User CRUD API'
        }
    ], paths: {
        '/User/Add': Object.assign({}, add_1.default),
        '/User/Update': Object.assign({}, update_1.default),
        '/User/Status': Object.assign({}, status_1.default),
        '/User/SelectAll': Object.assign({}, select_all_1.default),
        '/User/SelectActive/{userTypeId}': Object.assign({}, select_active_1.default),
        '/User/SelectById/{userId}': Object.assign({}, select_by_id_1.default),
        '/User/SelectUser': Object.assign({}, select_user_1.default),
    } });
exports.default = Object.assign({}, user);
//# sourceMappingURL=index.js.map