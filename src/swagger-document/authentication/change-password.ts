import tags from '../tag-constant';
import response from '../../configs/response.json';

const authenticationChangePassword = {
    put: {
        tags: [tags.authentication],
        description: 'Update a password based on the token',
        operationId: 'authenticationChangePassword',
        security: [
            {
                'bearerAuth': []
            }
        ],
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/authenticationChangePasswordInput'
                    }
                }
            }
        },
        responses: {
            '200': {
                description: response['204'],
                content: {
                    'application/pdf': {
                        schema: {
                            $ref: '#/components/schemas/authenticationChangePasswordOutput'
                        }
                    }
                }
            }
        }
    }
};

export default { ...authenticationChangePassword };