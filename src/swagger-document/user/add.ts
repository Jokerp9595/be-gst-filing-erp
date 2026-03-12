import tags from '../tag-constant';
import response from '../../configs/response.json';

const userAdd = {
    post: {
        tags: [tags.user],
        description: 'Add an user',
        operationId: 'userAdd',
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
                        $ref: '#/components/schemas/userAddInput'
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
                            $ref: '#/components/schemas/userAddOutput'
                        }
                    }
                }
            }
        }
    }
};

export default { ...userAdd };