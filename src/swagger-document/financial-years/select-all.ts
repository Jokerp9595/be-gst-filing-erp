import tags from '../tag-constant';
import response from '../../configs/response.json';
const financialYearSelectAll = {
    get: {
        tags: [tags.financialYear],
        description: 'Select all financial year details',
        operationId: 'financialYearSelectAll',
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
                            $ref: '#/components/schemas/financialYearSelectArrayOutput'
                        }
                    }
                }
            }
        }
    }
};

export default { ...financialYearSelectAll };