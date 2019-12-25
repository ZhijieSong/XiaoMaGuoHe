"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api = /** @class */ (function () {
    function api() {
    }
    api.openForlder = function (reply, path) {
        reply({ msg: 'openForlder ok' });
        console.log(path);
    };
    return api;
}());
exports.default = api;
//# sourceMappingURL=api.js.map