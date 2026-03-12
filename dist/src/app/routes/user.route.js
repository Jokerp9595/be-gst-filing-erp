"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("../../configs");
const controller_1 = require("../controller");
const schema_1 = require("../schema");
const userRoute = function (app, express) {
    const router = express.Router();
    const routerPath = "/User/";
    router.post(routerPath + 'Add', [configs_1.Global.isAuthorized, schema_1.addSanitize, (0, configs_1.middleware)(schema_1.userSchemas.AddSchema, 'body')], (req, res) => {
        const task = (new controller_1.UserController()).boot(req, res);
        return task.addUser();
    });
    router.put(routerPath + 'Update', [configs_1.Global.isAuthorized, schema_1.updateSanitize, (0, configs_1.middleware)(schema_1.userSchemas.UpdateSchema, 'body')], (req, res) => {
        const task = (new controller_1.UserController()).boot(req, res);
        return task.updateUser();
    });
    router.put(routerPath + 'Status', [configs_1.Global.isAuthorized, schema_1.statusSanitize, (0, configs_1.middleware)(schema_1.userSchemas.StatusSchema, 'body')], (req, res) => {
        const task = (new controller_1.UserController()).boot(req, res);
        return task.statusUser();
    });
    router.get(routerPath + 'SelectAll', [configs_1.Global.isAuthorized], (req, res) => {
        const task = (new controller_1.UserController()).boot(req, res);
        return task.selectAllUser();
    });
    router.get(routerPath + 'SelectActive/:userTypeId', [configs_1.Global.isAuthorized, schema_1.selectActiveSanitize, (0, configs_1.middleware)(schema_1.userSchemas.SelectActiveSchema, 'params')], (req, res) => {
        const task = (new controller_1.UserController()).boot(req, res);
        return task.selectActiveUser();
    });
    router.get(routerPath + 'SelectById/:userId', [configs_1.Global.isAuthorized, schema_1.selectByIdSanitize, (0, configs_1.middleware)(schema_1.userSchemas.SelectByIdSchema, 'params')], (req, res) => {
        const task = (new controller_1.UserController()).boot(req, res);
        return task.selectById();
    });
    router.get(routerPath + 'SelectUser', [configs_1.Global.isAuthorized], (req, res) => {
        const task = (new controller_1.UserController()).boot(req, res);
        return task.selectUser();
    });
    app.use(configs_1.configuration.baseApiUrl, router);
    return app;
};
exports.default = userRoute;
//# sourceMappingURL=user.route.js.map