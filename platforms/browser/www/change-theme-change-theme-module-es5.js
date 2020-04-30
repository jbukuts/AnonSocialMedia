(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["change-theme-change-theme-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/change-theme/change-theme.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-theme/change-theme.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change Theme</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-item lines=\"none\">\n    <ion-label>Current Colors</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <div class=\"theme-dots\" style=\"background: #880db8;\"></div>\n    <ion-label style=\"margin-left: 20px;\">Primary</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <div class=\"theme-dots\" style=\"background: #560477;\"></div>\n    <ion-label style=\"margin-left: 20px;\">Secondary</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <div class=\"theme-dots\" style=\"background: #0a9211;\"></div>\n    <ion-label style=\"margin-left: 20px;\">Emphasis</ion-label>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <div class=\"theme-dots\" style=\"background: #c00909;\"></div>\n    <ion-label style=\"margin-left: 20px;\">Danger</ion-label>\n  </ion-item>\n\n  <ion-item>\n    <div class=\"theme-dots\" style=\"background: black;\"></div>\n    <ion-label style=\"margin-left: 20px;\">Text</ion-label>\n  </ion-item>\n\n  \n  <ion-item>\n    <ion-label>Dark Mode</ion-label>\n    <ion-toggle [(ngModel)]=\"pepperoni\"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Theme</ion-label>\n    <ion-select placeholder=\"Select One\">\n      <ion-select-option value=\"f\">Original</ion-select-option>\n      <ion-select-option value=\"m\">New</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/change-theme/change-theme-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/change-theme/change-theme-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ChangeThemePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeThemePageRoutingModule", function() { return ChangeThemePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _change_theme_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-theme.page */ "./src/app/change-theme/change-theme.page.ts");




var routes = [
    {
        path: '',
        component: _change_theme_page__WEBPACK_IMPORTED_MODULE_3__["ChangeThemePage"]
    }
];
var ChangeThemePageRoutingModule = /** @class */ (function () {
    function ChangeThemePageRoutingModule() {
    }
    ChangeThemePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChangeThemePageRoutingModule);
    return ChangeThemePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/change-theme/change-theme.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/change-theme/change-theme.module.ts ***!
  \*****************************************************/
/*! exports provided: ChangeThemePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeThemePageModule", function() { return ChangeThemePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _change_theme_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-theme-routing.module */ "./src/app/change-theme/change-theme-routing.module.ts");
/* harmony import */ var _change_theme_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-theme.page */ "./src/app/change-theme/change-theme.page.ts");







var ChangeThemePageModule = /** @class */ (function () {
    function ChangeThemePageModule() {
    }
    ChangeThemePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _change_theme_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangeThemePageRoutingModule"]
            ],
            declarations: [_change_theme_page__WEBPACK_IMPORTED_MODULE_6__["ChangeThemePage"]]
        })
    ], ChangeThemePageModule);
    return ChangeThemePageModule;
}());



/***/ }),

/***/ "./src/app/change-theme/change-theme.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/change-theme/change-theme.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".theme-dots {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pidWt1dHMvRG9jdW1lbnRzL0dpdGh1Yi9Bbm9uU29jaWFsTWVkaWEvc3JjL2FwcC9jaGFuZ2UtdGhlbWUvY2hhbmdlLXRoZW1lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhbmdlLXRoZW1lL2NoYW5nZS10aGVtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jaGFuZ2UtdGhlbWUvY2hhbmdlLXRoZW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGVtZS1kb3RzIHtcbiAgICB3aWR0aDogMjVweDsgXG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iLCIudGhlbWUtZG90cyB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/change-theme/change-theme.page.ts":
/*!***************************************************!*\
  !*** ./src/app/change-theme/change-theme.page.ts ***!
  \***************************************************/
/*! exports provided: ChangeThemePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeThemePage", function() { return ChangeThemePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangeThemePage = /** @class */ (function () {
    function ChangeThemePage() {
    }
    ChangeThemePage.prototype.ngOnInit = function () {
    };
    ChangeThemePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-theme',
            template: __webpack_require__(/*! raw-loader!./change-theme.page.html */ "./node_modules/raw-loader/index.js!./src/app/change-theme/change-theme.page.html"),
            styles: [__webpack_require__(/*! ./change-theme.page.scss */ "./src/app/change-theme/change-theme.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChangeThemePage);
    return ChangeThemePage;
}());



/***/ })

}]);
//# sourceMappingURL=change-theme-change-theme-module-es5.js.map