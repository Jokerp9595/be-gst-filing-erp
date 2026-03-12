"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
/****************************
 REQUEST PARAM SET CONTROLLER
 ****************************/
class Controller {
    boot(req, res) {
        this.req = req;
        this.res = res;
        return this;
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map