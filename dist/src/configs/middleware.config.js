"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const _1 = require("./");
const middleware = (schema, property) => {
    return async (req, res, next) => {
        try {
            const requestBody = req[property];
            const body = await schema.validateAsync(requestBody);
            req[property] = body;
            next();
        }
        catch (error) {
            const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
            _1.applicationLogger.error(`Middleware`, { fullUrl: fullUrl, error: error });
            if (error.details) {
                res.status(422).send({ status: 0, message: error.details[0].message });
            }
            else {
                res.status(422).send({ status: 0, message: error.toString() });
            }
        }
    };
};
exports.middleware = middleware;
//# sourceMappingURL=middleware.config.js.map