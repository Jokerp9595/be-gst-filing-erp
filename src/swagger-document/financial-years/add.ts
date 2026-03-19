    import tags from '../tag-constant';
    import response from '../../configs/response.json';

    const financialYearAdd = {
        post: {
            tags: [tags.financialYear],
            description: 'Add an financial year',
            operationId: 'financialYearAdd',
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
                            $ref: '#/components/schemas/financialYearAddInput'
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
                                $ref: '#/components/schemas/financialYearAddOutput'
                            }
                        }
                    }
                }
            }
        }
    };

    export default { ...financialYearAdd };