import tags from '../tag-constant';
import response from '../../configs/response.json';
const userSelectAll = {
    get: {
        tags: [tags.user],
        description: 'Select all user details',
        operationId: 'userSelectAll',
        security: [
            {
                'bearerAuth': []
            }
        ],
        responses: {
            '200': {
                description: response['200'],
                content: {
                    'application/pdf': {
                        schema: {
                            $ref: '#/components/schemas/userSelectArrayOutput'
                        }
                    }
                }
            }
        }
    }
};

export default { ...userSelectAll };