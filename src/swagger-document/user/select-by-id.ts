import tags from '../tag-constant';
import response from '../../configs/response.json';
const userSelectById = {
    get: {
        tags: [tags.user],
        description: 'Select user details based on user id',
        operationId: 'userSelectById',
        security: [
            {
                'bearerAuth': []
            }
        ],
        parameters: [
            {
                name: 'userId',
                in: 'path',
                required: true,
                schema: {
                    $ref: '#/components/schemas/userSelectByIdInput'
                }
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

export default { ...userSelectById };