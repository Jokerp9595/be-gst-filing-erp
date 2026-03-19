import tags from '../tag-constant';
import response from '../../configs/response.json';
const financialYearSelectById = {
    get: {
        tags: [tags.financialYear],
        description: 'Select financial year details based on financial year id',
        operationId: 'financialYearSelectById',
        security: [
            {
                'bearerAuth': []
            }
        ],
        parameters: [
            {
                name: 'financialYearId',
                in: 'path',
                required: true,
                schema: {
                    $ref: '#/components/schemas/financialYearSelectByIdInput'
                }
            }
        ],
        responses: {
            '200': {
                description: response['200'],
                content: {
                    'application/pdf': {
                        schema: {
                            $ref: '#/components/schemas/financialYearSelectOutPutOutput'
                        }
                    }
                }
            }
        }
    }
};

export default { ...financialYearSelectById };