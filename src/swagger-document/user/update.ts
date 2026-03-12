import tags from '../tag-constant';
import response from '../../configs/response.json';

const userUpdate = {
    put: {
        tags: [tags.user],
        description: 'Update an user',
        operationId: 'userUpdate',
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
                        $ref: '#/components/schemas/userUpdateInput'
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
                            $ref: '#/components/schemas/userUpdateOutput'
                        }
                    }
                }
            }
        }
    }
};

export default { ...userUpdate };