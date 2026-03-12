import tags from '../tag-constant';
import response from '../../configs/response.json';
const userSelectActiveByTypeId = {
    get: {
        tags: [tags.user],
        description: 'Select active user details based on user type id',
        operationId: 'userSelectActiveByTypeId',
        security: [
            {
                'bearerAuth': []
            }
        ],
        parameters: [
            {
                name: 'userTypeId',
                in: 'path',
                required: true,
                schema: {
                    $ref: '#/components/schemas/userSelectActiveByTypeIdInput'
                }
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

export default { ...userSelectActiveByTypeId };