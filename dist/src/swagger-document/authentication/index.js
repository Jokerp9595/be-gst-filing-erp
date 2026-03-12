"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_constant_1 = __importDefault(require("../tag-constant"));
const components_1 = __importDefault(require("./components"));
const login_1 = __importDefault(require("./login"));
const change_password_1 = __importDefault(require("./change-password"));
const refresh_token_1 = __importDefault(require("./refresh-token"));
const authentication = Object.assign(Object.assign({}, components_1.default), { tags: [
        {
            name: tag_constant_1.default.authentication,
            description: 'Authentication API'
        }
    ], paths: {
        '/Authentication/Login': Object.assign({}, login_1.default),
        '/Authentication/ChangePassword': Object.assign({}, change_password_1.default),
        '/Authentication/RefreshToken': Object.assign({}, refresh_token_1.default)
    } });
exports.default = Object.assign({}, authentication);
//# sourceMappingURL=index.js.map