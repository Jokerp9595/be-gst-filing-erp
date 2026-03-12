import tags from '../tag-constant';
import response from '../../configs/response.json';

const authenticationRefreshToken = {
    get: {
        tags: [tags.authentication],
        description: 'Update a token and share a new token',
        operationId: 'authenticationRefreshToken',
        security: [
            {
                'bearerAuth': []
            }
        ],
        responses: {
            '200': {
                description: response['212'],
                content: {
                    'application/pdf': {
                        schema: {
                            $ref: '#/components/schemas/authenticationRefreshTokenOutput'
                        }
                    }
                }
            }
        }
    }
};

export default { ...authenticationRefreshToken };