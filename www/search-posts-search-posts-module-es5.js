(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-posts-search-posts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/search-posts/search-posts.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search-posts/search-posts.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Search All Boards</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar\n    [(ngModel)]=\"searchTerm\"\n    (ionChange)=\"setFilteredPosts()\"\n  ></ion-searchbar>\n\n  <ion-list lines=\"none\" *ngFor=\"let p of filterPost\" style=\"margin-bottom: 2px; margin-top: 2px;\">\n    <ion-item (click)=\"goToItem(p)\" style=\"margin: auto; border-radius: 10px; width: 95%;\" color=\"tertiary\" >\n      <ion-thumbnail *ngIf=\"p.img\" slot=\"start\">\n        <ion-img [src]=\"p.img\" style=\"border-radius: 50%\"></ion-img>\n      </ion-thumbnail>\n\n      <ion-thumbnail *ngIf=\"p.img==null\" slot=\"start\">\n        <ion-img [src]=\"'https://www.cowgirlcontractcleaning.com/wp-content/uploads/sites/360/2018/05/placeholder-img-3.jpg'\" style=\"border-radius: 50%\"></ion-img>\n      </ion-thumbnail>\n      \n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label>No. {{ p.docId }}</ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-label style=\"font-weight: bold;\">{{getTitle(p.title)}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-icon src=\"assets/icon/arrow-forward-outline.svg\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/search-posts/search-posts-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/search-posts/search-posts-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SearchPostsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPostsPageRoutingModule", function() { return SearchPostsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_posts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-posts.page */ "./src/app/search-posts/search-posts.page.ts");




var routes = [
    {
        path: '',
        component: _search_posts_page__WEBPACK_IMPORTED_MODULE_3__["SearchPostsPage"]
    }
];
var SearchPostsPageRoutingModule = /** @class */ (function () {
    function SearchPostsPageRoutingModule() {
    }
    SearchPostsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SearchPostsPageRoutingModule);
    return SearchPostsPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/search-posts/search-posts.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/search-posts/search-posts.module.ts ***!
  \*****************************************************/
/*! exports provided: SearchPostsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPostsPageModule", function() { return SearchPostsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_posts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-posts-routing.module */ "./src/app/search-posts/search-posts-routing.module.ts");
/* harmony import */ var _search_posts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-posts.page */ "./src/app/search-posts/search-posts.page.ts");







var SearchPostsPageModule = /** @class */ (function () {
    function SearchPostsPageModule() {
    }
    SearchPostsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _search_posts_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPostsPageRoutingModule"]
            ],
            declarations: [_search_posts_page__WEBPACK_IMPORTED_MODULE_6__["SearchPostsPage"]]
        })
    ], SearchPostsPageModule);
    return SearchPostsPageModule;
}());



/***/ }),

/***/ "./src/app/search-posts/search-posts.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/search-posts/search-posts.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1wb3N0cy9zZWFyY2gtcG9zdHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/search-posts/search-posts.page.ts":
/*!***************************************************!*\
  !*** ./src/app/search-posts/search-posts.page.ts ***!
  \***************************************************/
/*! exports provided: SearchPostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPostsPage", function() { return SearchPostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item.service */ "./src/app/item.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);






var SearchPostsPage = /** @class */ (function () {
    function SearchPostsPage(router, itemService, events) {
        this.router = router;
        this.itemService = itemService;
        this.events = events;
        this.boards = ['original-post', 'random-post', 'media-post'];
        this.searchTerm = "";
    }
    SearchPostsPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, db, _loop_1, _i, _a, b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                self = this;
                self.posts = new Array();
                db = firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"]();
                _loop_1 = function (b) {
                    db.collection(b).get().then(function (querySnapshot) {
                        querySnapshot.forEach(function (doc) {
                            var item = doc.data();
                            self.posts.push({
                                text: item.text,
                                title: item.title,
                                timestamp: item.timestamp,
                                docId: doc.ref.id,
                                board: b
                            });
                            // check to see if item has image
                            if (item.img != null) {
                                self.posts[self.posts.length - 1]['img'] = item.img;
                            }
                        });
                    });
                };
                // get all post from all boards
                for (_i = 0, _a = self.boards; _i < _a.length; _i++) {
                    b = _a[_i];
                    _loop_1(b);
                }
                console.log(self.posts);
                self.filterPost = self.posts;
                return [2 /*return*/];
            });
        });
    };
    SearchPostsPage.prototype.setFilteredPosts = function () {
        var _this = this;
        console.log("filtering: " + this.searchTerm);
        if (this.searchTerm == "") {
            this.filterPost = this.posts;
        }
        this.filterPost = this.posts.filter(function (post) {
            return post.title.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) > -1;
        });
    };
    SearchPostsPage.prototype.getTitle = function (title) {
        return (title.length > 15) ? title.substring(0, 15) + "..." : title;
    };
    SearchPostsPage.prototype.goToItem = function (post) {
        console.log("displaying item info");
        console.log(post);
        this.router.navigate(["./product-detail", post]);
    };
    SearchPostsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] }
    ]; };
    SearchPostsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-posts',
            template: __webpack_require__(/*! raw-loader!./search-posts.page.html */ "./node_modules/raw-loader/index.js!./src/app/search-posts/search-posts.page.html"),
            styles: [__webpack_require__(/*! ./search-posts.page.scss */ "./src/app/search-posts/search-posts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
    ], SearchPostsPage);
    return SearchPostsPage;
}());



/***/ })

}]);
//# sourceMappingURL=search-posts-search-posts-module-es5.js.map