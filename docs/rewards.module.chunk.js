webpackJsonp(["rewards.module"],{

/***/ "./src/app/main/kid/rewards/rewards.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/kid/rewards/rewards.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <a routerLink=\"./games\">Games</a>\n  <a routerLink=\"./badges\">Badges</a>\n</div>\n\n<p>\n  rewards works!\n</p>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/main/kid/rewards/rewards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardsComponent; });
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

var RewardsComponent = /** @class */ (function () {
    function RewardsComponent() {
    }
    RewardsComponent.prototype.ngOnInit = function () {
        ga('set', 'page', window.location.pathname);
        ga('send', 'pageview');
    };
    RewardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-rewards',
            template: __webpack_require__("./src/app/main/kid/rewards/rewards.component.html"),
            styles: [__webpack_require__("./src/app/main/kid/rewards/rewards.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RewardsComponent);
    return RewardsComponent;
}());



/***/ }),

/***/ "./src/app/main/kid/rewards/rewards.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RewardsModule", function() { return RewardsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rewards_component__ = __webpack_require__("./src/app/main/kid/rewards/rewards.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RewardsModule = /** @class */ (function () {
    function RewardsModule() {
    }
    RewardsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__rewards_component__["a" /* RewardsComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_3__rewards_component__["a" /* RewardsComponent */],
                        children: [
                            {
                                path: 'games/:id',
                                loadChildren: './games/games.module#GamesModule'
                            },
                            {
                                path: 'games',
                                loadChildren: './games/games.module#GamesModule'
                            },
                            {
                                path: 'badges/:id',
                                loadChildren: './badges/badges.module#BadgesModule'
                            },
                            {
                                path: 'badges',
                                loadChildren: './badges/badges.module#BadgesModule'
                            }
                        ]
                    }
                ])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__rewards_component__["a" /* RewardsComponent */]]
        })
    ], RewardsModule);
    return RewardsModule;
}());



/***/ })

});
//# sourceMappingURL=rewards.module.chunk.js.map