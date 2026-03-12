import tags from '../tag-constant';
import response from '../../configs/response.json';
const userSelect = {
    get: {
        tags: [tags.user],
        description: 'Select user details based on access token',
        operationId: 'userSelect',
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
                            $ref: '#/components/schemas/userSelectOutPutOutput'
                        }
                    }
                }
            }
        }
    }
};

export default { ...userSelect };