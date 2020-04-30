(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-info-app-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app-info/app-info.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-info/app-info.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>About</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/app-info/app-info-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/app-info/app-info-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AppInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoPageRoutingModule", function() { return AppInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-info.page */ "./src/app/app-info/app-info.page.ts");




var routes = [
    {
        path: '',
        component: _app_info_page__WEBPACK_IMPORTED_MODULE_3__["AppInfoPage"]
    }
];
var AppInfoPageRoutingModule = /** @class */ (function () {
    function AppInfoPageRoutingModule() {
    }
    AppInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppInfoPageRoutingModule);
    return AppInfoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-info/app-info.module.ts":
/*!*********************************************!*\
  !*** ./src/app/app-info/app-info.module.ts ***!
  \*********************************************/
/*! exports provided: AppInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoPageModule", function() { return AppInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-info-routing.module */ "./src/app/app-info/app-info-routing.module.ts");
/* harmony import */ var _app_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-info.page */ "./src/app/app-info/app-info.page.ts");







var AppInfoPageModule = /** @class */ (function () {
    function AppInfoPageModule() {
    }
    AppInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _app_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppInfoPageRoutingModule"]
            ],
            declarations: [_app_info_page__WEBPACK_IMPORTED_MODULE_6__["AppInfoPage"]]
        })
    ], AppInfoPageModule);
    return AppInfoPageModule;
}());



/***/ }),

/***/ "./src/app/app-info/app-info.page.scss":
/*!*********************************************!*\
  !*** ./src/app/app-info/app-info.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1pbmZvL2FwcC1pbmZvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app-info/app-info.page.ts":
/*!*******************************************!*\
  !*** ./src/app/app-info/app-info.page.ts ***!
  \*******************************************/
/*! exports provided: AppInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoPage", function() { return AppInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppInfoPage = /** @class */ (function () {
    function AppInfoPage() {
    }
    AppInfoPage.prototype.ngOnInit = function () {
    };
    AppInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-info',
            template: __webpack_require__(/*! raw-loader!./app-info.page.html */ "./node_modules/raw-loader/index.js!./src/app/app-info/app-info.page.html"),
            styles: [__webpack_require__(/*! ./app-info.page.scss */ "./src/app/app-info/app-info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppInfoPage);
    return AppInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-info-app-info-module-es5.js.map