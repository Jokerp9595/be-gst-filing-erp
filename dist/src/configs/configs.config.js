"use strict";
/****************************
 Configuration
 ****************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const environment_config_1 = __importDefault(require("./environment.config"));
exports.configuration = {
    dbOptions: {
        host: environment_config_1.default.dbHost,
        port: environment_config_1.default.dbPort,
        user: environment_config_1.default.dbUser,
        pass: environment_config_1.default.dbPassword,
        database: environment_config_1.default.dbDataBaseName
    },
    securityToken: 'erpisofv1sdjmdl',
    serverPort: environment_config_1.default.serverPort,
    publicDirectory: environment_config_1.default.publicDirectory,
    forgotPasswordTokenExpiry: 600, // Note: in seconds! (10 minutes)
    tokenExpiry: 864000, // Note: in seconds! (10 days)
    refreshTokenExpiry: 2592000, // Note: in seconds! (30 days)
    baseApiUrl: '/' + environment_config_1.default.baseUrl,
    rootUrl: environment_config_1.default.rootUrl + environment_config_1.default.serverPort + '/' + environment_config_1.default.baseUrl + '/',
    apiUrl: environment_config_1.default.rootUrl + environment_config_1.default.serverPort + '/',
    swaggerUrl: environment_config_1.default.swaggerUrl,
    defaultEmailName: 'Dudhika',
    defaultEmailId: 'bhatiadairy@antimtechnologies.in',
    password: 'b;*g5796~YfQ&2eq:r^4d',
    emailAddressPattern: /^[A-Za-z0-9!'#$%&*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!'#$%&*+\/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[a-zA-Z]{2,64}$/,
    mobileNoPattern: /^[6-9]\d{9}$/,
    timePattern: /^[0-9]{2}[:]{1}[0-9]{2}$/,
    imageType: /\.(jpg|JPG|jpeg|JPEG|png|PNG)$/,
    datePattern: /^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/,
    timeLongPattern: /^[0-9]{2}[:]{1}[0-9]{2}[:]{1}[0-9]{2}$/,
    bankIfscCodePattern: /^[A-Z]{4}0[A-Z0-9]{6}$/,
    aadharNoPattern: /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/,
    panCardPattern: /^[A-Z]{3}[ABCFGHLJPTK][A-Z]\d{4}[A-Z]$/,
    gstNoPattern: /^([0-2][0-9]|[3][0-7])[A-Z]{3}[ABCFGHLJPTK][A-Z]\d{4}[A-Z][A-Z0-9][Z][A-Z0-9]$/,
    fileType: /\.(html|HTML)$/
};
//# sourceMappingURL=configs.config.js.map