"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("../../configs");
const controller_1 = require("../controller");
const schema_1 = require("../schema");
const authenticationRoute = function (app, express) {
    const router = express.Router();
    const routerPath = "/Authentication/";
    router.post(routerPath + 'Login', [schema_1.loginSanitize, (0, configs_1.middleware)(schema_1.authenticationSchemas.LoginSchema, 'body')], (req, res) => {
        const task = (new controller_1.AuthenticationController()).boot(req, res);
        return task.login();
    });
    router.put(routerPath + 'ChangePassword', [configs_1.Global.isAuthorized, schema_1.changePasswordSanitize, (0, configs_1.middleware)(schema_1.authenticationSchemas.ChangePasswordSchema, 'body')], (req, res) => {
        const task = (new controller_1.AuthenticationController()).boot(req, res);
        return task.changePassword();
    });
    router.get(routerPath + 'RefreshToken', [configs_1.Global.isAuthorized], (req, res) => {
        const task = (new controller_1.AuthenticationController()).boot(req, res);
        return task.refreshToken();
    });
    app.use(configs_1.configuration.baseApiUrl, router);
    return app;
};
exports.default = authenticationRoute;
//# sourceMappingURL=authentication.route.js.map