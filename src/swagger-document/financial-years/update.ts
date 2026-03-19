import tags from '../tag-constant';
import response from '../../configs/response.json';

const financialYearUpdate = {
    put: {
        tags: [tags.financialYear],
        description: 'Update an financial year',
        operationId: 'financialYearUpdate',
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
                        $ref: '#/components/schemas/financialYearUpdateInput'
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
                            $ref: '#/components/schemas/financialYearUpdateOutput'
                        }
                    }
                }
            }
        }
    }
};

export default { ...financialYearUpdate };