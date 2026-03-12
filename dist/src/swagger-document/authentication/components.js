"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_json_1 = __importDefault(require("../../configs/response.json"));
const components = {
    schemas: {
        authenticationLoginInput: {
            type: 'object',
            properties: {
                'mobile': {
                    type: 'string',
                    description: 'The mobile no. of the user',
                    example: '9876543210'
                },
                'password': {
                    type: 'string',
                    description: 'The new password',
                    example: '1'
                }
            }
        },
        authenticationLoginOutputData: {
            type: 'object',
            properties: {
                'user_id': {
                    type: 'integer',
                    description: 'The login user id',
                    example: 1
                },
                'user_name': {
                    type: 'string',
                    description: 'The login user name with 500 char limit',
                    example: "Admin"
                },
                'mobile_no': {
                    type: 'string',
                    description: 'The login user mobile no. with 10 char limit',
                    example: "9876543210"
                },
                'email_address': {
                    type: 'string',
                    description: 'The login user email address with 320 char limit',
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
                    description: 'The login user status, 1 for Active, 0 for Deactive',
                    example: 1
                },
                'default_collection_type': {
                    type: 'string',
                    description: 'The default collection type code with 100 character limit',
                    example: 'Factory Collection'
                },
                'access_token': {
                    type: 'string',
                    description: 'The new refresh token',
                    example: ''
                },
                'refresh_token': {
                    type: 'string',
                    description: 'The new refresh token',
                    example: ''
                }
            }
        },
        authenticationLoginOutput: {
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
                    $ref: '#/components/schemas/authenticationLoginOutputData'
                }
            }
        },
        authenticationChangePasswordInput: {
            type: 'object',
            properties: {
                'password': {
                    type: 'string',
                    description: 'The new password',
                    example: '1'
                }
            }
        },
        authenticationChangePasswordOutput: {
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
        authenticationRefreshTokenOutputData: {
            type: 'object',
            properties: {
                'access_token': {
                    type: 'string',
                    description: 'The new refresh token',
                    example: ''
                },
                'refresh_token': {
                    type: 'string',
                    description: 'The new refresh token',
                    example: ''
                }
            }
        },
        authenticationRefreshTokenOutput: {
            type: 'object',
            properties: {
                'status': {
                    type: 'integer',
                    example: 1
                },
                'message': {
                    type: 'string',
                    example: response_json_1.default['201']
                },
                'data': {
                    type: 'object',
                    $ref: '#/components/schemas/authenticationRefreshTokenOutputData'
                }
            }
        }
    }
};
exports.default = Object.assign({}, components);
//# sourceMappingURL=components.js.map