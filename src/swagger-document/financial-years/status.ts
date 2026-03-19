import tags from '../tag-constant';
import response from '../../configs/response.json';

const financialYearStatus = {
    put: {
        tags: [tags.financialYear],
        description: 'Update an financial year status',
        operationId: 'financialYearStatus',
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
                        $ref: '#/components/schemas/financialYearStatusInput'
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
                            $ref: '#/components/schemas/financialYearStatusOutput'
                        }
                    }
                }
            }
        }
    }
};

export default { ...financialYearStatus };