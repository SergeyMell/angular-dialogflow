webpackJsonp(["intro.module"],{

/***/ "./src/app/intro/intro.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/intro/intro.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <a routerLink=\"./login\">Login</a>\n  <a routerLink=\"./parent\">Parent</a>\n</div>\n\n<p>\n  intro works!\n</p>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
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

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
        ga('set', 'page', window.location.pathname);
        ga('send', 'pageview');
    };
    IntroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-intro',
            template: __webpack_require__("./src/app/intro/intro.component.html"),
            styles: [__webpack_require__("./src/app/intro/intro.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/intro/intro.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroModule", function() { return IntroModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro_component__ = __webpack_require__("./src/app/intro/intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IntroModule = /** @class */ (function () {
    function IntroModule() {
    }
    IntroModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__intro_component__["a" /* IntroComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__intro_component__["a" /* IntroComponent */],
                        children: [
                            {
                                path: 'login',
                                loadChildren: './login/login.module#LoginModule'
                            },
                            {
                                path: 'parent',
                                loadChildren: './intro-parent/intro-parent.module#IntroParentModule'
                            }
                        ]
                    }
                ])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__intro_component__["a" /* IntroComponent */]]
        })
    ], IntroModule);
    return IntroModule;
}());



/***/ })

});
//# sourceMappingURL=intro.module.chunk.js.map