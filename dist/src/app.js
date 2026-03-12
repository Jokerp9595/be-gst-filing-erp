"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/****************************
 SERVER MAIN FILE
 ****************************/
process.env.TZ = 'Asia/Kolkata';
const express_1 = __importDefault(require("express"));
const configs_1 = require("./configs");
// Include Modules
const app = (0, configs_1.expressConfig)();
/* Old path for serving public folder */
app.use('/', express_1.default.static(__dirname + '/'));
app.use(express_1.default.urlencoded({
    extended: true
}));
app.use(express_1.default.json());
app.listen(configs_1.configuration.serverPort, () => {
    console.log(`Server running at :${configs_1.configuration.apiUrl}`);
});
//# sourceMappingURL=app.js.map