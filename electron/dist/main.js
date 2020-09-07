"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import necesarios
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var win;
function createWindow() {
    win = new electron_1.BrowserWindow({ width: 800, height: 600 });
    win.loadURL(url.format({
        pathname: path.join(__dirname, "/../../dist/Konex/index.html"),
        protocol: 'file:',
        slashes: true
    }));
    win.removeMenu();
    win.on('closed', function () {
        win = null;
    });
}
// Para ver el estado de la app
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (win === null) {
        createWindow();
    }
});
//# sourceMappingURL=main.js.map