webpackJsonp(["kid.module"],{

/***/ "./src/app/main/kid/kid.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/kid/kid.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <a routerLink=\"./home\">Home</a>\n  <a routerLink=\"./earn\">Earn</a>\n  <a routerLink=\"./rewards\">Rewards</a>\n</div>\n\n<p>\n  kid works!\n</p>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/main/kid/kid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KidComponent; });
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

var KidComponent = /** @class */ (function () {
    function KidComponent() {
    }
    KidComponent.prototype.ngOnInit = function () {
        ga('set', 'page', window.location.pathname);
        ga('send', 'pageview');
    };
    KidComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-kid',
            template: __webpack_require__("./src/app/main/kid/kid.component.html"),
            styles: [__webpack_require__("./src/app/main/kid/kid.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KidComponent);
    return KidComponent;
}());



/***/ }),

/***/ "./src/app/main/kid/kid.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidModule", function() { return KidModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kid_component__ = __webpack_require__("./src/app/main/kid/kid.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var KidModule = /** @class */ (function () {
    function KidModule() {
    }
    KidModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__kid_component__["a" /* KidComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_3__kid_component__["a" /* KidComponent */],
                        children: [
                            {
                                path: 'question/:standard/:question/:id',
                                loadChildren: './question/question.module#QuestionModule'
                            },
                            {
                                path: 'question/:standard/:question',
                                loadChildren: './question/question.module#QuestionModule'
                            },
                            {
                                path: 'friends',
                                loadChildren: './friends/friends.module#FriendsModule'
                            },
                            {
                                path: 'reports',
                                loadChildren: './reports/reports.module#ReportsModule'
                            },
                            {
                                loadChildren: './home/home.module#HomeModule',
                                path: 'home'
                            },
                            {
                                loadChildren: './earn/earn.module#EarnModule',
                                path: 'earn'
                            },
                            {
                                loadChildren: './rewards/rewards.module#RewardsModule',
                                path: 'rewards'
                            }
                        ]
                    }
                ])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__kid_component__["a" /* KidComponent */]]
        })
    ], KidModule);
    return KidModule;
}());



/***/ })

});
//# sourceMappingURL=kid.module.chunk.js.map