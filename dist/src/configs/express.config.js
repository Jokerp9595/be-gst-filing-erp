"use strict";
/****************************
 EXPRESS AND ROUTING HANDLING
****************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressConfig = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const connect_timeout_1 = __importDefault(require("connect-timeout"));
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
// @ts-ignore
const express_sanitizer_1 = __importDefault(require("express-sanitizer"));
const helmet_1 = __importDefault(require("helmet"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const _1 = require("./");
const swagger_document_1 = require("../swagger-document");
const authentication_route_1 = __importDefault(require("../app/routes/authentication.route"));
const user_route_1 = __importDefault(require("../app/routes/user.route"));
/*************** ROUTES ***************/
const expressConfig = () => {
    const app = (0, express_1.default)();
    /****************************
     SWAGGER
    ****************************/
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_document_1.swaggerDocument));
    app.get("/swagger.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swagger_document_1.swaggerDocument);
    });
    /****************************
     BODY PARSER
    ****************************/
    app.use(body_parser_1.default.urlencoded({
        limit: "50mb",
        extended: true
    }));
    app.use(body_parser_1.default.json({
        limit: "50mb"
    }));
    /****************************
     SECURITY
    ****************************/
    app.use((0, helmet_1.default)());
    app.use((0, express_sanitizer_1.default)());
    /****************************
     TRUST PROXY
    ****************************/
    app.set("trust proxy", 1);
    /****************************
     RATE LIMIT
    ****************************/
    app.use((0, express_rate_limit_1.default)({
        windowMs: 60 * 1000,
        max: 100,
        message: {
            status: 0,
            message: "Too many requests, please try again later."
        }
    }));
    /****************************
     CORS MIDDLEWARE
    ****************************/
    app.use((req, res, next) => {
        const origin = req.headers.origin;
        if (origin) {
            res.header('Access-Control-Allow-Origin', origin);
            res.header('Access-Control-Allow-Credentials', 'true');
        }
        else {
            res.header('Access-Control-Allow-Origin', '*');
        }
        res.header('Access-Control-Allow-Headers', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
        res.header('Access-Control-Allow-Headers', '*');
        res.header('Cross-Origin-Resource-Policy', 'cross-origin');
        next();
    });
    app.options(/.*/, (req, res) => {
        const origin = req.headers.origin;
        if (origin) {
            res.header('Access-Control-Allow-Origin', origin);
            res.header('Access-Control-Allow-Credentials', 'true');
        }
        else {
            res.header('Access-Control-Allow-Origin', '*');
        }
        res.header('Access-Control-Allow-Headers', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
        res.header('Access-Control-Allow-Headers', '*');
        res.header('Cross-Origin-Resource-Policy', 'cross-origin');
        res.sendStatus(200);
    });
    /****************************
     REQUEST TIMEOUT
    ****************************/
    app.use((0, connect_timeout_1.default)(12000000));
    const haltOnTimedOut = (req, res, next) => {
        if (!req.timedout)
            next();
    };
    app.use(haltOnTimedOut);
    /****************************
     ROUTES
    ****************************/
    (0, authentication_route_1.default)(app, express_1.default);
    (0, user_route_1.default)(app, express_1.default);
    /****************************
     STATIC FILES
    ****************************/
    app.use(express_1.default.static("public"));
    /****************************
     NOT FOUND HANDLER
    ****************************/
    app.use(_1.Global.notFound);
    return app;
};
exports.expressConfig = expressConfig;
//# sourceMappingURL=express.config.js.map