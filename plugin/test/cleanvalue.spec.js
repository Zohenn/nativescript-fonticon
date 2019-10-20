"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var mocha_1 = require("mocha");
var lib = require("../lib");
mocha_1.describe('Test cleanValue function', function () {
    mocha_1.it('with space and semicolon', function () {
        assert.strictEqual(lib.cleanValue('content:   "\\f000";'), '\\uf000');
    });
    mocha_1.it('no space but semicolon', function () {
        assert.strictEqual(lib.cleanValue('content:"\\f000";'), '\\uf000');
    });
    mocha_1.it('without space and semicolon', function () {
        assert.strictEqual(lib.cleanValue('content:"\\f000"'), '\\uf000');
    });
    mocha_1.it('with surrounding space', function () {
        assert.strictEqual(lib.cleanValue('   content:   "\\f000"  ;'), '\\uf000');
    });
    mocha_1.it('with line breaks', function () {
        assert.strictEqual(lib.cleanValue(' \n  content:   "\\f000"  ; \n '), '\\uf000');
    });
    mocha_1.it('with single quotes', function () {
        assert.strictEqual(lib.cleanValue("content: '\\f000'; "), '\\uf000');
    });
});
//# sourceMappingURL=cleanvalue.spec.js.map