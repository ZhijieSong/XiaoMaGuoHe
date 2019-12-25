"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var api_1 = require("../api/api");
var ipcMainService = /** @class */ (function () {
    function ipcMainService() {
    }
    ipcMainService.regist = function () {
        console.log('IpcMain Regist Start.');
        electron_1.ipcMain.on('asynchronous-message', function (event, arg) {
            console.log(arg);
            event.reply('asyncronous-reply', 'pong');
        });
        electron_1.ipcMain.on('synchronous-message', function (event, arg) {
            console.log(arg); // prints "ping"
            event.returnValue = 'pong';
        });
        electron_1.ipcMain.on('api', function (event, actionName) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            console.log("ActionName: " + actionName);
            var reply = function (replyObj, status) {
                if (status === void 0) { status = 'success'; }
                console.log(actionName + "-reply");
                event.sender.send(actionName + "-reply", replyObj, status);
            };
            if (api_1.default[actionName]) {
                api_1.default[actionName].apply(api_1.default, [reply].concat(args));
            }
        });
        console.log('IpcMain Regist End.');
    };
    return ipcMainService;
}());
exports.default = ipcMainService;
//# sourceMappingURL=ipcMainService.js.map