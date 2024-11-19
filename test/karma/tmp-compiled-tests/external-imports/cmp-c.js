"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalImportB = void 0;
var core_1 = require("@stencil/core");
var external_data_1 = require("./external-data");
var ExternalImportB = /** @class */ (function () {
    function ExternalImportB() {
    }
    ExternalImportB.prototype.componentWillLoad = function () {
        this.first = (0, external_data_1.data)().first;
        this.last = (0, external_data_1.data)().last;
    };
    ExternalImportB.prototype.render = function () {
        return ((0, core_1.h)("div", null,
            this.first,
            " ",
            this.last));
    };
    ExternalImportB = __decorate([
        (0, core_1.Component)({
            tag: 'external-import-c',
        })
    ], ExternalImportB);
    return ExternalImportB;
}());
exports.ExternalImportB = ExternalImportB;
