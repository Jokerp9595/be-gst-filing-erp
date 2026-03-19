import { configuration, Global, middleware } from "../../configs";
import { FinancialYearController } from "../controller";
import { addFinancialYearSanitize, financialYearSchemas, selectByIdFinancialYearSanitize, statusSanitize, updateFinancialYearSanitize } from "../schema";

const financialYearsRoute = function (app: any, express: any) {

    const router = express.Router();
    const routerPath = "/FinancialYear/";

    router.post(routerPath + 'Add', [Global.isAuthorized, addFinancialYearSanitize, middleware(financialYearSchemas.AddSchema, 'body')], (req: any, res: any) => {
        const task = (new FinancialYearController()).boot(req, res);
        return task.add();
    });

    router.put(routerPath + 'Update', [Global.isAuthorized, updateFinancialYearSanitize, middleware(financialYearSchemas.UpdateSchema, 'body')], (req: any, res: any) => {
        const task = (new FinancialYearController()).boot(req, res);
        return task.update();
    });

    router.put(routerPath + 'Status', [Global.isAuthorized, statusSanitize, middleware(financialYearSchemas.statusUpdateSchema, 'body')], (req: any, res: any) => {
        const task = (new FinancialYearController()).boot(req, res);
        return task.status();
    });

    router.get(routerPath + 'SelectAll', [Global.isAuthorized], (req: any, res: any) => {
        const task = (new FinancialYearController()).boot(req, res);
        return task.selectAll();
    });

    router.get(routerPath + 'SelectActive', [Global.isAuthorized], (req: any, res: any) => {
        const task = (new FinancialYearController()).boot(req, res);
        return task.selectActive();
    });

    router.get(routerPath + 'SelectById/:financialYearId', [Global.isAuthorized, selectByIdFinancialYearSanitize, middleware(financialYearSchemas.SelectByIdSchema, 'params')], (req: any, res: any) => {
        const task = (new FinancialYearController()).boot(req, res);
        return task.selectById();
    });

    app.use(configuration.baseApiUrl, router);

    return app;
};

export default financialYearsRoute;