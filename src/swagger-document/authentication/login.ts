import tags from '../tag-constant';
import response from '../../configs/response.json';

const authenticationLogin = {
    post: {
        tags: [tags.authentication],
        description: 'Check mobile no. or email address and password and return details accordingly',
        operationId: 'authenticationLogin',
        requestBody: {
            required: true,
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/authenticationLoginInput'
                    }
                }
            }
        },
        responses: {
            '200': {
                description: response['203'],
                content: {
                    'application/pdf': {
                        schema: {
                            $ref: '#/components/schemas/authenticationLoginOutput'
                        }
                    }
                }
            }
        }
    }
};

export default { ...authenticationLogin };