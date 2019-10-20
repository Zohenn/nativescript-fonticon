"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var file_system_1 = require("tns-core-modules/file-system");
var lib = require("./lib");
var TNSFontIcon = (function () {
    function TNSFontIcon() {
    }
    TNSFontIcon.css = {};
    TNSFontIcon.paths = {};
    TNSFontIcon.debug = false;
    TNSFontIcon.loadFile = function (name, path) {
        if (TNSFontIcon.debug) {
            console.log('----------');
            console.log("Loading collection '" + name + "' from file: " + path);
        }
        var cssFile = file_system_1.knownFolders.currentApp().getFile(path);
        return new Promise(function (resolve, reject) {
            cssFile.readText().then(function (data) {
                TNSFontIcon.css[name] = lib.mapCss(data, TNSFontIcon.debug);
                resolve();
            }, function (err) {
                reject(err);
            });
        });
    };
    TNSFontIcon.loadFileSync = function (name, path) {
        if (TNSFontIcon.debug) {
            console.log('----------');
            console.log("Loading collection '" + name + "' from file: " + path);
        }
        var cssFile = file_system_1.knownFolders.currentApp().getFile(path);
        var data = cssFile.readTextSync();
        TNSFontIcon.css[name] = lib.mapCss(data, TNSFontIcon.debug);
    };
    TNSFontIcon.parseAndMapCSS = function (name, data) {
        if (TNSFontIcon.debug) {
            console.log('----------');
            console.log("Loading collection '" + name + "' from data " + data);
        }
        TNSFontIcon.css[name] = lib.mapCss(data, TNSFontIcon.debug);
    };
    TNSFontIcon.loadCss = function () {
        if (TNSFontIcon.debug) {
            console.log("Collections to load: " + TNSFontIcon.paths);
        }
        return Promise.all(Object.keys(TNSFontIcon.paths).map(function (currentName) {
            TNSFontIcon.css[currentName] = {};
            var data = TNSFontIcon.paths[currentName];
            if (!data) {
                return;
            }
            if (typeof data === 'string') {
                return TNSFontIcon.loadFile(currentName, data);
            }
            else {
                return TNSFontIcon.parseAndMapCSS(currentName, data[0][1]);
            }
        }));
    };
    TNSFontIcon.loadCssSync = function () {
        if (TNSFontIcon.debug) {
            console.log("Collections to load: " + TNSFontIcon.paths);
        }
        Object.keys(TNSFontIcon.paths).map(function (currentName) {
            TNSFontIcon.css[currentName] = {};
            var data = TNSFontIcon.paths[currentName];
            if (!data) {
                return;
            }
            if (typeof data === 'string') {
                return TNSFontIcon.loadFileSync(currentName, data);
            }
            else {
                return TNSFontIcon.parseAndMapCSS(currentName, data[0][1]);
            }
        });
    };
    return TNSFontIcon;
}());
exports.TNSFontIcon = TNSFontIcon;
function fonticon(values) {
    if (!values) {
        return undefined;
    }
    if (!Array.isArray(values)) {
        values = [values];
    }
    if (TNSFontIcon.debug) {
        console.log("fonticon: " + values);
    }
    for (var index = 0; index < values.length; index++) {
        var value = values[index];
        if (value.indexOf('-') > -1) {
            var prefix = value.split('-')[0];
            var result = TNSFontIcon.css[prefix][value];
            if (TNSFontIcon.debug) {
                console.log("found fonticon " + result + " for " + values);
            }
            if (result) {
                return result;
            }
        }
        else {
            return value;
        }
    }
    return values[0];
}
exports.fonticon = fonticon;
//# sourceMappingURL=nativescript-fonticon.js.map