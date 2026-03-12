import { configuration, Global, middleware } from "../../configs";
import { UserController } from "../controller";
import { addSanitize, selectActiveSanitize, selectByIdSanitize, statusSanitize, updateSanitize, updateSettingSanitize, userSchemas } from "../schema";

const userRoute = function (app: any, express: any) {

    const router = express.Router();
    const routerPath = "/User/";

    router.post(routerPath + 'Add', [Global.isAuthorized, addSanitize, middleware(userSchemas.AddSchema, 'body')], (req: any, res: any) => {
        const task = (new UserController()).boot(req, res);
        return task.addUser();
    });

    router.put(routerPath + 'Update', [Global.isAuthorized, updateSanitize, middleware(userSchemas.UpdateSchema, 'body')], (req: any, res: any) => {
        const task = (new UserController()).boot(req, res);
        return task.updateUser();
    });

    router.put(routerPath + 'Status', [Global.isAuthorized, statusSanitize, middleware(userSchemas.StatusSchema, 'body')], (req: any, res: any) => {
        const task = (new UserController()).boot(req, res);
        return task.statusUser();
    });

    router.get(routerPath + 'SelectAll', [Global.isAuthorized], (req: any, res: any) => {
        const task = (new UserController()).boot(req, res);
        return task.selectAllUser();
    });

    router.get(routerPath + 'SelectActive/:userTypeId', [Global.isAuthorized, selectActiveSanitize, middleware(userSchemas.SelectActiveSchema, 'params')], (req: any, res: any) => {
        const task = (new UserController()).boot(req, res);
        return task.selectActiveUser();
    });

    router.get(routerPath + 'SelectById/:userId', [Global.isAuthorized, selectByIdSanitize, middleware(userSchemas.SelectByIdSchema, 'params')], (req: any, res: any) => {
        const task = (new UserController()).boot(req, res);
        return task.selectById();
    });

    router.get(routerPath + 'SelectUser', [Global.isAuthorized], (req: any, res: any) => {
        const task = (new UserController()).boot(req, res);
        return task.selectUser();
    });

    app.use(configuration.baseApiUrl, router);

    return app;
};

export default userRoute;