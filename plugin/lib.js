"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapCss = function (data, debug) {
    var map = {};
    var sets = data.split('}');
    for (var _i = 0, sets_1 = sets; _i < sets_1.length; _i++) {
        var set = sets_1[_i];
        var pair = set.split('{');
        var preVal = pair[1];
        if (preVal && preVal.indexOf('content:') !== -1) {
            var keyGroups = pair[0];
            var keys = keyGroups.split(',');
            var value = exports.cleanValue(preVal);
            if (!value) {
                continue;
            }
            var realVal = String.fromCharCode(parseInt(value, 16));
            for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
                var key = keys_1[_a];
                key = key
                    .trim()
                    .slice(1)
                    .split(':before')[0].replace(':', '');
                map[key] = realVal;
                if (debug) {
                    console.log(key + ": " + value + " " + realVal);
                }
            }
        }
    }
    return map;
};
exports.cleanValue = function (val) {
    var array = val.trim().split('"');
    if (array.length > 1) {
        var val_1 = array[array.length - 2].substring(1);
        return val_1[0] === 'u' ? val_1.substring(1) : val_1;
    }
    return void 0;
};
//# sourceMappingURL=lib.js.map