webpackJsonp(["parent.module"],{

/***/ "./src/app/main/parent/parent.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/parent/parent.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <a routerLink=\"./settings\">Settings</a>\n  <a routerLink=\"./home\">Home</a>\n  <a routerLink=\"./faq\">FAQ</a>\n  <a routerLink=\"./verify\">Verify</a>\n</div>\n\n<p>\n  parent works!\n</p>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/main/parent/parent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentComponent; });
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

var ParentComponent = /** @class */ (function () {
    function ParentComponent() {
    }
    ParentComponent.prototype.ngOnInit = function () {
        ga('set', 'page', window.location.pathname);
        ga('send', 'pageview');
    };
    ParentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-parent',
            template: __webpack_require__("./src/app/main/parent/parent.component.html"),
            styles: [__webpack_require__("./src/app/main/parent/parent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "./src/app/main/parent/parent.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentModule", function() { return ParentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__parent_component__ = __webpack_require__("./src/app/main/parent/parent.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ParentModule = /** @class */ (function () {
    function ParentModule() {
    }
    ParentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__parent_component__["a" /* ParentComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_3__parent_component__["a" /* ParentComponent */],
                        children: [
                            {
                                path: 'settings',
                                loadChildren: './settings/settings.module#SettingsModule'
                            },
                            {
                                path: 'home',
                                loadChildren: './parent-home/parent-home.module#ParentHomeModule'
                            },
                            {
                                path: 'faq',
                                loadChildren: './faq/faq.module#FaqModule'
                            },
                            {
                                path: 'verify',
                                loadChildren: './verify/verify.module#VerifyModule'
                            }
                        ]
                    }
                ])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__parent_component__["a" /* ParentComponent */]]
        })
    ], ParentModule);
    return ParentModule;
}());



/***/ })

});
//# sourceMappingURL=parent.module.chunk.js.map