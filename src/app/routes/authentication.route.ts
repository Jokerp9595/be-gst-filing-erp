import { configuration, Global, middleware } from "../../configs";
import { AuthenticationController } from "../controller";
import { authenticationSchemas, changePasswordSanitize, loginSanitize } from "../schema";

const authenticationRoute = function (app: any, express: any) {

    const router = express.Router();
    const routerPath = "/Authentication/";

    router.post(routerPath + 'Login', [loginSanitize, middleware(authenticationSchemas.LoginSchema, 'body')], (req: any, res: any) => {
        const task = (new AuthenticationController()).boot(req, res);
        return task.login();
    });

    router.put(routerPath + 'ChangePassword', [Global.isAuthorized, changePasswordSanitize, middleware(authenticationSchemas.ChangePasswordSchema, 'body')], (req: any, res: any) => {
        const task = (new AuthenticationController()).boot(req, res);
        return task.changePassword();
    });

    router.get(routerPath + 'RefreshToken', [Global.isAuthorized], (req: any, res: any) => {
        const task = (new AuthenticationController()).boot(req, res);
        return task.refreshToken();
    });

    app.use(configuration.baseApiUrl, router);

    return app;
};

export default authenticationRoute;