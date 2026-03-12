import { applicationLogger } from './';

export const middleware = (schema: any, property: any) => {
    return async (req: any, res: any, next: any) => {
        try {
            const requestBody = req[property];
            const body = await schema.validateAsync(requestBody);
            req[property] = body;
            next();
        } catch (error: any) {
            const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
            applicationLogger.error(`Middleware`, { fullUrl: fullUrl, error: error });
            if (error.details) {
                res.status(422).send({ status: 0, message: error.details[0].message });
            }
            else {
                res.status(422).send({ status: 0, message: error.toString() });
            }
        }
    };
};