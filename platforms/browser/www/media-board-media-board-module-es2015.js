(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["media-board-media-board-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/media-board/media-board.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/media-board/media-board.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Media Discussion\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button id=\"newItem\" (click)=\"directNewPost()\">\n        <ion-icon slot=\"icon-only\" name=\"add-circle\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-text *ngIf=\"posts == null || posts.length == 0\">\n    <h2 style=\"text-align: center;\">There are no posts.<br> Go make one!</h2>\n  </ion-text>\n\n  <ion-list lines=\"none\" *ngFor=\"let item of posts\" style=\"margin-bottom: 2px; margin-top: 2px;\">\n    <ion-item (click)=\"goToItem(item)\" style=\"margin-bottom: 0px; margin-top: 0px; border-radius: 2px; width: 100%;\" color=\"tertiary\" >\n      <ion-thumbnail *ngIf=\"item.img\" slot=\"start\">\n        <ion-img [src]=\"item.img\" style=\"border-radius: 50%\"></ion-img>\n      </ion-thumbnail>\n\n      <ion-thumbnail *ngIf=\"item.img==null\" slot=\"start\">\n        <ion-img [src]=\"'https://www.cowgirlcontractcleaning.com/wp-content/uploads/sites/360/2018/05/placeholder-img-3.jpg'\" style=\"border-radius: 50%\"></ion-img>\n      </ion-thumbnail>\n      \n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label>No. {{ item.docId }}</ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-label style=\"font-weight: bold;\">{{getTitle(item.title)}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-icon slot=\"end\" src=\"assets/icon/arrow-forward-outline.svg\"></ion-icon>\n    </ion-item>\n    \n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/media-board/media-board-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/media-board/media-board-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MediaBoardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaBoardPageRoutingModule", function() { return MediaBoardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _media_board_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media-board.page */ "./src/app/media-board/media-board.page.ts");




const routes = [
    {
        path: '',
        component: _media_board_page__WEBPACK_IMPORTED_MODULE_3__["MediaBoardPage"]
    }
];
let MediaBoardPageRoutingModule = class MediaBoardPageRoutingModule {
};
MediaBoardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MediaBoardPageRoutingModule);



/***/ }),

/***/ "./src/app/media-board/media-board.module.ts":
/*!***************************************************!*\
  !*** ./src/app/media-board/media-board.module.ts ***!
  \***************************************************/
/*! exports provided: MediaBoardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaBoardPageModule", function() { return MediaBoardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _media_board_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./media-board-routing.module */ "./src/app/media-board/media-board-routing.module.ts");
/* harmony import */ var _media_board_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./media-board.page */ "./src/app/media-board/media-board.page.ts");







let MediaBoardPageModule = class MediaBoardPageModule {
};
MediaBoardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _media_board_routing_module__WEBPACK_IMPORTED_MODULE_5__["MediaBoardPageRoutingModule"]
        ],
        declarations: [_media_board_page__WEBPACK_IMPORTED_MODULE_6__["MediaBoardPage"]]
    })
], MediaBoardPageModule);



/***/ }),

/***/ "./src/app/media-board/media-board.page.scss":
/*!***************************************************!*\
  !*** ./src/app/media-board/media-board.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGlhLWJvYXJkL21lZGlhLWJvYXJkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/media-board/media-board.page.ts":
/*!*************************************************!*\
  !*** ./src/app/media-board/media-board.page.ts ***!
  \*************************************************/
/*! exports provided: MediaBoardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaBoardPage", function() { return MediaBoardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item.service */ "./src/app/item.service.ts");






let MediaBoardPage = class MediaBoardPage {
    constructor(router, itemService, events, toastController) {
        this.router = router;
        this.itemService = itemService;
        this.events = events;
        this.toastController = toastController;
        this.board = "media-post";
        var self = this;
        events.subscribe('dataloaded', (time) => {
            self.posts = self.itemService.getPosts(this.board);
        });
        console.log(self.posts);
    }
    ngOnInit() {
        var self = this;
        self.posts = self.itemService.getPosts(this.board);
    }
    getTitle(title) {
        return (title.length > 15) ? title.substring(0, 15) + "..." : title;
    }
    // go to the new item page
    directNewPost() {
        console.log("clicked new item");
        let board = { 'board': this.board };
        this.router.navigate(["/new-item", board]);
    }
    goToItem(post) {
        post['board'] = this.board;
        console.log("displaying item info");
        console.log(post);
        this.router.navigate(["./product-detail", post]);
    }
};
MediaBoardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
MediaBoardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-media-board',
        template: __webpack_require__(/*! raw-loader!./media-board.page.html */ "./node_modules/raw-loader/index.js!./src/app/media-board/media-board.page.html"),
        styles: [__webpack_require__(/*! ./media-board.page.scss */ "./src/app/media-board/media-board.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], MediaBoardPage);



/***/ })

}]);
//# sourceMappingURL=media-board-media-board-module-es2015.js.map