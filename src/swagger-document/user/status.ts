import tags from '../tag-constant';
import response from '../../configs/response.json';

const userStatus = {
    put: {
        tags: [tags.user],
        description: 'Update an user status',
        operationId: 'userStatus',
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
                        $ref: '#/components/schemas/userStatusInput'
                    }
                }
            }
        },
        responses: {
            '200': {
                description: response['200'],
                content: {
                    'application/pdf': {
                        schema: {
                            $ref: '#/components/schemas/userStatusOutput'
                        }
                    }
                }
            }
        }
    }
};

export default { ...userStatus };