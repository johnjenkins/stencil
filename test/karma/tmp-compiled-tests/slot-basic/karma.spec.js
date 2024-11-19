"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
describe('slot-basic', function () {
    var _this = this;
    var _a = (0, util_1.setupDomTests)(document), setupDom = _a.setupDom, tearDownDom = _a.tearDownDom;
    var app;
    beforeEach(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, setupDom('/slot-basic/index.html')];
                case 1:
                    app = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterEach(tearDownDom);
    it('button click rerenders', function () { return __awaiter(_this, void 0, void 0, function () {
        function testValues(inc) {
            var result = app.querySelector('.inc');
            expect(result.textContent).toEqual('Rendered: ' + inc);
            result = app.querySelector('.results1 article');
            expect(result.textContent).toEqual('AB');
            result = app.querySelector('.results2 article');
            expect(result.textContent).toEqual('AB');
            result = app.querySelector('.results2 article span');
            expect(result.textContent).toEqual('B');
            result = app.querySelector('.results3 article');
            expect(result.textContent).toEqual('AB');
            result = app.querySelector('.results3 article div');
            expect(result.textContent).toEqual('B');
            result = app.querySelector('.results4 article footer');
            expect(result.textContent).toEqual('AB');
            result = app.querySelector('.results4 article footer div');
            expect(result.textContent).toEqual('B');
            result = app.querySelector('.results5 article');
            expect(result.textContent).toEqual('AB');
            result = app.querySelector('.results5 article span');
            expect(result.textContent).toEqual('A');
            result = app.querySelector('.results6 article');
            expect(result.textContent).toEqual('AB');
            var results = app.querySelectorAll('.results6 article span');
            expect(results[0].textContent).toEqual('A');
            expect(results[1].textContent).toEqual('B');
            result = app.querySelector('.results7 article');
            expect(result.textContent).toEqual('AB');
            result = app.querySelector('.results7 article span');
            expect(result.textContent).toEqual('A');
            result = app.querySelector('.results7 article div');
            expect(result.textContent).toEqual('B');
            result = app.querySelector('.results8 article');
            expect(result.textContent).toEqual('AB');
            result = app.querySelector('.results8 article div');
            expect(result.textContent).toEqual('A');
            result = app.querySelector('.results9 article');
            expect(result.textContent).toEqual('AB');
            result = app.querySelector('.results9 article div');
            expect(result.textContent).toEqual('A');
            result = app.querySelector('.results9 article span');
            expect(result.textContent).toEqual('B');
            result = app.querySelector('.results10 article');
            expect(result.textContent).toEqual('AB');
            results = app.querySelectorAll('.results10 article div');
            expect(results[0].textContent).toEqual('A');
            expect(results[1].textContent).toEqual('B');
            result = app.querySelector('.results11 article');
            expect(result.textContent).toEqual('ABC');
            results = app.querySelectorAll('.results11 article div');
            expect(results[0].textContent).toEqual('A');
            expect(results[1].textContent).toEqual('B');
            expect(results[2].textContent).toEqual('C');
            result = app.querySelector('.results11 article footer');
            expect(result.textContent).toEqual('B');
        }
        var button;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    testValues(1);
                    button = app.querySelector('button');
                    button.click();
                    return [4 /*yield*/, (0, util_1.waitForChanges)()];
                case 1:
                    _a.sent();
                    testValues(2);
                    button.click();
                    return [4 /*yield*/, (0, util_1.waitForChanges)()];
                case 2:
                    _a.sent();
                    testValues(3);
                    return [2 /*return*/];
            }
        });
    }); });
});
