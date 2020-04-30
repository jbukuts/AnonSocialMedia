(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["your-posts-your-posts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/your-posts/your-posts.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/your-posts/your-posts.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Your Posts</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-text *ngIf=\"yourPosts.length==0\">\n    <h2 style=\"text-align: center;\">You've Made No Post Today</h2>\n  </ion-text>\n\n  <ion-list lines=\"none\" *ngFor=\"let p of yourPosts\" style=\"margin-bottom: 2px; margin-top: 2px;\">\n    <ion-item  (click)=\"goToItem(p)\" style=\"margin-bottom: 0px; margin-top: 0px; border-radius: 2px; width: 100%;\" color=\"tertiary\" >\n      <ion-thumbnail *ngIf=\"p.img\" slot=\"start\">\n        <ion-img [src]=\"p.img\" style=\"border-radius: 50%\"></ion-img>\n      </ion-thumbnail>\n      \n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label>No. {{ p.docId }}</ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-label style=\"font-weight: bold;\">{{ p.title }}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-icon src=\"assets/icon/arrow-forward-outline.svg\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    \n  </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/your-posts/your-posts-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/your-posts/your-posts-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: YourPostsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourPostsPageRoutingModule", function() { return YourPostsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _your_posts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./your-posts.page */ "./src/app/your-posts/your-posts.page.ts");




var routes = [
    {
        path: '',
        component: _your_posts_page__WEBPACK_IMPORTED_MODULE_3__["YourPostsPage"]
    }
];
var YourPostsPageRoutingModule = /** @class */ (function () {
    function YourPostsPageRoutingModule() {
    }
    YourPostsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], YourPostsPageRoutingModule);
    return YourPostsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/your-posts/your-posts.module.ts":
/*!*************************************************!*\
  !*** ./src/app/your-posts/your-posts.module.ts ***!
  \*************************************************/
/*! exports provided: YourPostsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourPostsPageModule", function() { return YourPostsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _your_posts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./your-posts-routing.module */ "./src/app/your-posts/your-posts-routing.module.ts");
/* harmony import */ var _your_posts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./your-posts.page */ "./src/app/your-posts/your-posts.page.ts");







var YourPostsPageModule = /** @class */ (function () {
    function YourPostsPageModule() {
    }
    YourPostsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _your_posts_routing_module__WEBPACK_IMPORTED_MODULE_5__["YourPostsPageRoutingModule"]
            ],
            declarations: [_your_posts_page__WEBPACK_IMPORTED_MODULE_6__["YourPostsPage"]]
        })
    ], YourPostsPageModule);
    return YourPostsPageModule;
}());



/***/ }),

/***/ "./src/app/your-posts/your-posts.page.scss":
/*!*************************************************!*\
  !*** ./src/app/your-posts/your-posts.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvdXItcG9zdHMveW91ci1wb3N0cy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/your-posts/your-posts.page.ts":
/*!***********************************************!*\
  !*** ./src/app/your-posts/your-posts.page.ts ***!
  \***********************************************/
/*! exports provided: YourPostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourPostsPage", function() { return YourPostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item.service */ "./src/app/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var YourPostsPage = /** @class */ (function () {
    function YourPostsPage(itemService, router) {
        this.itemService = itemService;
        this.router = router;
        var self = this;
        self.yourPosts = self.itemService.getYourPosts();
    }
    YourPostsPage.prototype.goToItem = function (post) {
        console.log("Goinf to your post");
        console.log(post);
        this.router.navigate(["./product-detail", post]);
    };
    YourPostsPage.prototype.ngOnInit = function () {
    };
    YourPostsPage.ctorParameters = function () { return [
        { type: _item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    YourPostsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-your-posts',
            template: __webpack_require__(/*! raw-loader!./your-posts.page.html */ "./node_modules/raw-loader/index.js!./src/app/your-posts/your-posts.page.html"),
            styles: [__webpack_require__(/*! ./your-posts.page.scss */ "./src/app/your-posts/your-posts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], YourPostsPage);
    return YourPostsPage;
}());



/***/ })

}]);
//# sourceMappingURL=your-posts-your-posts-module-es5.js.map