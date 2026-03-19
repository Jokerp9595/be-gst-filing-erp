import response from '../../configs/response.json';
const components = {
    schemas: {
        financialYearAddInput: {
            type: 'object',
            properties: {
                'name': {
                    type: 'string',
                    description: 'The financial year name with 500 char limit',
                    example: "Admin"
                },
                'fyFrom': {
                    type: 'string',
                    description: 'The financial year from date',
                    example: "2020-04-01"
                },
                'fyTo': {
                    type: 'string',
                    description: 'The financial year to date',
                    example: "2021-03-31"
                },
                'isClosed': {
                    type: 'boolean',
                    description: 'The financial year closed status',
                    example: false
                }
            }
        },
        financialYearAddOutput: {
            type: 'object',
            properties: {
                'status': {
                    type: 'integer',
                    example: 1
                },
                'message': {
                    type: 'string',
                    example: response['200']
                }
            }
        },
        financialYearUpdateInput: {
            type: 'object',
            properties: {
                'financialYearId': {
                    type: 'integer',
                    description: 'The financial year id',
                    example: 1
                },
                'name': {
                    type: 'string',
                    description: 'The financial year name with 500 char limit',
                    example: "Admin"
                },
                'fyFrom': {
                    type: 'string',
                    description: 'The financial year from date',
                    example: "2020-04-01"
                },
                'fyTo': {
                    type: 'string',
                    description: 'The financial year to date',
                    example: "2021-03-31"
                },
                'isClosed': {
                    type: 'boolean',
                    description: 'The financial year closed status',
                    example: false
                }
            }
        },
        financialYearUpdateOutput: {
            type: 'object',
            properties: {
                'status': {
                    type: 'integer',
                    example: 1
                },
                'message': {
                    type: 'string',
                    description: 'The financial year update message',
                    example: "Financial year updated successfully"
                }
            }
        },
        financialYearStatusInput: {
            type: 'object',
            properties: {
                'financialYearId': {
                    type: 'integer',
                    description: 'The financial year id',
                    example: 1
                },
                'isClosed': {
                    type: 'boolean',
                    description: 'The financial year closed status',
                    example: false
                }
            }
        },

        financialYearStatusOutput: {
            type: 'object',
            properties: {
                'status': {
                    type: 'integer',
                    example: 1
                },
                'message': {
                    type: 'string',
                    example: response['200']
                }
            }
        },

        financialYearOutputData: {
            type: 'object',
            properties: {
                'financial_year_id': {
                    type: 'integer',
                    description: 'The financial year id',
                    example: 1
                },
                'name': {
                    type: 'string',
                    description: 'The financial year name with 500 char limit',
                    example: "Admin"
                },
                'fyFrom': {
                    type: 'string',
                    description: 'The financial year from date',
                    example: "2020-04-01"
                },
                'fyTo': {
                    type: 'string',
                    description: 'The financial year to date',
                    example: "2021-03-31"
                },
                'isClosed': {
                    type: 'boolean',
                    description: 'The financial year closed status',
                    example: false
                }
            }
        },
        financialYearOutputDataArray: {
            type: 'array',
            items: {
                $ref: '#/components/schemas/financialYearOutputData'
            }
        },
        financialYearSelectActiveByTypeIdInput: {
            type: 'integer',
            description: 'financialYearId',
            example: 1
        },
        financialYearSelectArrayOutput: {
            type: 'object',
            properties: {
                'status': {
                    type: 'integer',
                    example: 1
                },
                'message': {
                    type: 'string',
                    example: response['200']
                },
                'data': {
                    type: 'array',
                    items: {
                        $ref: '#/components/schemas/financialYearOutputData'
                    }
                }
            }
        },
        financialYearSelectByIdInput: {
            type: 'integer',
            description: 'financialYearId',
            example: 1
        },
        financialYearSelectOutPutOutput: {
            type: 'object',
            properties: {
                'status': {
                    type: 'integer',
                    example: 1
                },
                'message': {
                    type: 'string',
                    example: response['200']
                },
                'data': {
                    type: 'object',
                    $ref: '#/components/schemas/financialYearOutputData'
                }
            }
        },
    }
};

export default { ...components };