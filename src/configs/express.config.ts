/****************************
 EXPRESS AND ROUTING HANDLING
****************************/

import bodyParser from "body-parser";
import timeout from "connect-timeout";
import express from "express";
import limiter from 'express-rate-limit';
// @ts-ignore
import expressSanitizer from "express-sanitizer";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import { Global } from "./";
import { swaggerDocument } from "../swagger-document";
import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";
import authenticationRoute from "../app/routes/authentication.route";
import userRoute from "../app/routes/user.route";

/*************** ROUTES ***************/

export const expressConfig = () => {

    const app = express();

    /****************************
     SWAGGER
    ****************************/
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    app.get("/swagger.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerDocument);
    });

    /****************************
     BODY PARSER
    ****************************/
    app.use(bodyParser.urlencoded({
        limit: "50mb",
        extended: true
    }));

    app.use(bodyParser.json({
        limit: "50mb"
    }));

    /****************************
     SECURITY
    ****************************/
    app.use(helmet());
    app.use(expressSanitizer());

    /****************************
     TRUST PROXY
    ****************************/
    app.set("trust proxy", 1);

    /****************************
     RATE LIMIT
    ****************************/
    app.use(limiter({
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
    app.use(timeout(12000000));

    const haltOnTimedOut = (req: any, res: any, next: () => void) => {
        if (!req.timedout) next();
    };

    app.use(haltOnTimedOut);

    /****************************
     ROUTES
    ****************************/
    authenticationRoute(app, express);
    userRoute(app, express);

    /****************************
     STATIC FILES
    ****************************/
    app.use(express.static("public"));

    /****************************
     NOT FOUND HANDLER
    ****************************/
    app.use(Global.notFound);

    return app;
};