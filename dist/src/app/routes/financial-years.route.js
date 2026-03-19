"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = require("../../configs");
const controller_1 = require("../controller");
const schema_1 = require("../schema");
const financialYearsRoute = function (app, express) {
    const router = express.Router();
    const routerPath = "/FinancialYear/";
    router.post(routerPath + 'Add', [configs_1.Global.isAuthorized, schema_1.addFinancialYearSanitize, (0, configs_1.middleware)(schema_1.financialYearSchemas.AddSchema, 'body')], (req, res) => {
        const task = (new controller_1.FinancialYearController()).boot(req, res);
        return task.add();
    });
    router.put(routerPath + 'Update', [configs_1.Global.isAuthorized, schema_1.updateFinancialYearSanitize, (0, configs_1.middleware)(schema_1.financialYearSchemas.UpdateSchema, 'body')], (req, res) => {
        const task = (new controller_1.FinancialYearController()).boot(req, res);
        return task.update();
    });
    router.put(routerPath + 'Status', [configs_1.Global.isAuthorized, schema_1.statusSanitize, (0, configs_1.middleware)(schema_1.financialYearSchemas.statusUpdateSchema, 'body')], (req, res) => {
        const task = (new controller_1.FinancialYearController()).boot(req, res);
        return task.status();
    });
    router.get(routerPath + 'SelectAll', [configs_1.Global.isAuthorized], (req, res) => {
        const task = (new controller_1.FinancialYearController()).boot(req, res);
        return task.selectAll();
    });
    router.get(routerPath + 'SelectActive', [configs_1.Global.isAuthorized], (req, res) => {
        const task = (new controller_1.FinancialYearController()).boot(req, res);
        return task.selectActive();
    });
    router.get(routerPath + 'SelectById/:financialYearId', [configs_1.Global.isAuthorized, schema_1.selectByIdFinancialYearSanitize, (0, configs_1.middleware)(schema_1.financialYearSchemas.SelectByIdSchema, 'params')], (req, res) => {
        const task = (new controller_1.FinancialYearController()).boot(req, res);
        return task.selectById();
    });
    app.use(configs_1.configuration.baseApiUrl, router);
    return app;
};
exports.default = financialYearsRoute;
//# sourceMappingURL=financial-years.route.js.map