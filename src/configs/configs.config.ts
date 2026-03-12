/****************************
 Configuration
 ****************************/

import environmentVariable from './environment.config';
export const configuration = {
    dbOptions: {
        host: environmentVariable.dbHost,
        port: environmentVariable.dbPort,
        user: environmentVariable.dbUser,
        pass: environmentVariable.dbPassword,
        database: environmentVariable.dbDataBaseName
    },
    securityToken: 'erpisofv1sdjmdl',
    serverPort: environmentVariable.serverPort,
    publicDirectory: environmentVariable.publicDirectory,
    forgotPasswordTokenExpiry: 600, // Note: in seconds! (10 minutes)
    tokenExpiry: 864000, // Note: in seconds! (10 days)
    refreshTokenExpiry: 2592000, // Note: in seconds! (30 days)
    baseApiUrl: '/' + environmentVariable.baseUrl,
    rootUrl: environmentVariable.rootUrl + environmentVariable.serverPort + '/' + environmentVariable.baseUrl + '/',
    apiUrl: environmentVariable.rootUrl + environmentVariable.serverPort + '/',
    swaggerUrl: environmentVariable.swaggerUrl,
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