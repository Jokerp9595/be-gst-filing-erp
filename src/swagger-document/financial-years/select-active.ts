import tags from '../tag-constant';
import response from '../../configs/response.json';
const financialYearSelectActiveByTypeId = {
    get: {
        tags: [tags.financialYear],
        description: 'Select active financial year details based on financial year type id',
        operationId: 'financialYearSelectActiveByTypeId',
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

export default { ...financialYearSelectActiveByTypeId };