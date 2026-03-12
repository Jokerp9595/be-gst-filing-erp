"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_json_1 = __importDefault(require("../../configs/response.json"));
const components = {
    schemas: {
        userAddInput: {
            type: 'object',
            properties: {
                'userName': {
                    type: 'string',
                    description: 'The user name with 500 char limit',
                    example: "Admin"
                },
                'mobileNo': {
                    type: 'string',
                    description: 'The user mobile no. with 10 char limit',
                    example: "9876543210"
                },
                'emailAddress': {
                    type: 'string',
                    description: 'The user email address with 320 char limit',
                    example: "email@bhatia.com"
                },
                'password': {
                    type: 'string',
                    description: 'The new password',
                    example: '1'
                },
                'userTypeId': {
                    type: 'integer',
                    description: 'The auto-generated id of the user type master',
                    example: 1
                },
            }
        },
        userAddOutput: {
            type: 'object',
            properties: {
                'status': {
                    type: 'integer',
                    example: 1
                },
                'message': {
                    type: 'string',
                    example: response_json_1.default['200']
                }
            }
        },
        userUpdateInput: {
            type: 'object',
            properties: {
                'userId': {
                    type: 'integer',
                    description: 'The user id',
                    example: 1
                },
                'userName': {
                    type: 'string',
                    description: 'The user name with 500 char limit',
                    example: "Admin"
                },
                'mobileNo': {
                    type: 'string',
                    description: 'The user mobile no. with 10 char limit',
                    example: "9876543210"
                },
                'emailAddress': {
                    type: 'string',
                    description: 'The user email address with 320 char limit',
                    example: "email@bhatia.com"
                }
            }
        },
        userUpdateOutput: {
            type: 'object',
            properties: {
                'status': {
                    type: 'integer',
                    example: 1
                },
                'message': {
                    type: 'string',
                    example: response_json_1.default['200']
                }
            }
        },
        userStatusInput: {
            type: 'object',
            properties: {
                'userId': {
                    type: 'integer',
                    description: 'The user id',
                    example: 1
                },
                'status': {
                    type: 'integer',
                    example: 1
                }
            }
        },
        userStatusOutput: {
            type: 'object',
            properties: {
                'status': {
                    type: 'integer',
                    example: 1
                },
                'message': {
                    type: 'string',
                    example: response_json_1.default['200']
                }
            }
        },
        userOutputData: {
            type: 'object',
            properties: {
                'user_id': {
                    type: 'integer',
                    description: 'The user id',
                    example: 1
                },
                'user_name': {
                    type: 'string',
                    description: 'The user name with 500 char limit',
                    example: "Admin"
                },
                'mobile_no': {
                    type: 'string',
                    description: 'The user mobile no. with 10 char limit',
                    example: "9876543210"
                },
                'email_address': {
                    type: 'string',
                    description: 'The user email address with 320 char limit',
                    example: "email@bhatia.com"
                },
                'user_type_id': {
                    type: 'integer',
                    description: 'The auto-generated id of the user type master',
                    example: 1
                },
                'user_type_name': {
                    type: 'string',
                    description: 'The user type code with 255 character limit',
                    example: 'Admin'
                },
                'status': {
                    type: 'integer',
                    description: 'The user status, 1 for Active, 0 for Deactive',
                    example: 1
                }
            }
        },
        userSelectActiveByTypeIdInput: {
            type: 'integer',
            description: 'userTypeId',
            example: 1
        },
        userSelectArrayOutput: {
            type: 'object',
            properties: {
                'status': {
                    type: 'integer',
                    example: 1
                },
                'message': {
                    type: 'string',
                    example: response_json_1.default['200']
                },
                'data': {
                    type: 'array',
                    items: {
                        $ref: '#/components/schemas/userOutputData'
                    }
                }
            }
        },
        userSelectByIdInput: {
            type: 'integer',
            description: 'userId',
            example: 1
        },
        userSelectOutPutOutput: {
            type: 'object',
            properties: {
                'status': {
                    type: 'integer',
                    example: 1
                },
                'message': {
                    type: 'string',
                    example: response_json_1.default['200']
                },
                'data': {
                    type: 'object',
                    $ref: '#/components/schemas/userOutputData'
                }
            }
        },
    }
};
exports.default = Object.assign({}, components);
//# sourceMappingURL=components.js.map