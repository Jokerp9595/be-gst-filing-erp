import { basicInfo } from './basic-info';
import { servers } from './servers';
import User from './user';
import authentication from './authentication';

export const swaggerDocument = {
    ...basicInfo,
    servers: servers,
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT'
            }
        },
        schemas: {
            ...User.schemas,
            ...authentication.schemas,
            error: {
                type: 'object',
                properties: {
                    status: {
                        type: 'integer'
                    },
                    message: {
                        type: 'string'
                    },
                    error: {
                        type: 'string'
                    }
                }
            }
        }
    },
    tags: [
        ...User.tags,
        ...authentication.tags
    ],
    paths: {
        ...User.paths,
        ...authentication.paths
    }
};