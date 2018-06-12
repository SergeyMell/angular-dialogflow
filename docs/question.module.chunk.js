webpackJsonp(["question.module"],{

/***/ "./src/app/main/kid/question/question.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/kid/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  question works!\n</p>\n"

/***/ }),

/***/ "./src/app/main/kid/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionComponent = /** @class */ (function () {
    function QuestionComponent() {
    }
    QuestionComponent.prototype.ngOnInit = function () {
        ga('set', 'page', window.location.pathname);
        ga('send', 'pageview');
    };
    QuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question',
            template: __webpack_require__("./src/app/main/kid/question/question.component.html"),
            styles: [__webpack_require__("./src/app/main/kid/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/main/kid/question/question.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionModule", function() { return QuestionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__question_component__ = __webpack_require__("./src/app/main/kid/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var QuestionModule = /** @class */ (function () {
    function QuestionModule() {
    }
    QuestionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__question_component__["a" /* QuestionComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_0__question_component__["a" /* QuestionComponent */]
                    }
                ])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_0__question_component__["a" /* QuestionComponent */]]
        })
    ], QuestionModule);
    return QuestionModule;
}());



/***/ })

});
//# sourceMappingURL=question.module.chunk.js.map