(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-detail-product-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/product-detail/product-detail.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/product-detail/product-detail.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header id=\"header\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"current_post\">{{current_post.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content id=\"content\" padding>\n\n  <ion-item *ngIf=\"current_post\" class=\"reply\" lines=\"none\">\n    <ion-text>\n      <h5 (click)=\"createReply(current_post)\" class=\"postId\">No. {{current_post.docId}}</h5>\n      <ion-img *ngIf=\"current_post.img\" (click)=\"expandImg(current_post.img)\" [src]=\"current_post.img\"></ion-img>\n      <p class=\"postTitle\">{{current_post.title}}</p>\n      <p class=\"postText\">{{current_post.text}}</p>\n    </ion-text>\n  </ion-item>\n\n  <!--This will populate all the replys to the post-->\n\n   <ion-item *ngFor=\"let reply of post_replys\" class=\"reply\" lines=\"none\">\n     <ion-text>\n       <h5 (click)=\"createReply(reply)\" class=\"postId\">No. {{reply.docId}}</h5>\n       <ion-img *ngIf=\"reply.img\" (click)=\"expandImg(reply.img)\" [src]=\"reply.img\"></ion-img>\n       <p class=\"postText\">{{reply.text}}</p>\n       <p (click)=\"showPost(reply)\" class=\"replyTo\">Replying to : {{reply.replyTo}}</p>\n       <p class=\"replyTo\">{{getDate(reply.timestamp)}}</p>\n     </ion-text>\n   </ion-item>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/product-detail/product-detail-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProductDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageRoutingModule", function() { return ProductDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/product-detail/product-detail.page.ts");




var routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_3__["ProductDetailPage"]
    }
];
var ProductDetailPageRoutingModule = /** @class */ (function () {
    function ProductDetailPageRoutingModule() {
    }
    ProductDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ProductDetailPageRoutingModule);
    return ProductDetailPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: ProductDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPageModule", function() { return ProductDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-detail-routing.module */ "./src/app/product-detail/product-detail-routing.module.ts");
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-detail.page */ "./src/app/product-detail/product-detail.page.ts");
/* harmony import */ var _reply_modal_reply_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reply-modal/reply-modal.module */ "./src/app/reply-modal/reply-modal.module.ts");
/* harmony import */ var _show_reply_modal_show_reply_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../show-reply-modal/show-reply-modal.module */ "./src/app/show-reply-modal/show-reply-modal.module.ts");
/* harmony import */ var _image_modal_image_modal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../image-modal/image-modal.module */ "./src/app/image-modal/image-modal.module.ts");










var ProductDetailPageModule = /** @class */ (function () {
    function ProductDetailPageModule() {
    }
    ProductDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductDetailPageRoutingModule"],
                _reply_modal_reply_modal_module__WEBPACK_IMPORTED_MODULE_7__["ReplyModalPageModule"],
                _image_modal_image_modal_module__WEBPACK_IMPORTED_MODULE_9__["ImageModalPageModule"],
                _show_reply_modal_show_reply_modal_module__WEBPACK_IMPORTED_MODULE_8__["ShowReplyModalPageModule"]
            ],
            declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailPage"]]
        })
    ], ProductDetailPageModule);
    return ProductDetailPageModule;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".postId {\n  font-size: 16px;\n}\n\n.postText {\n  font-size: 16px;\n}\n\n.postTitle {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.replyTo {\n  font-size: 12px;\n}\n\n.replyTo:active {\n  color: #8f8f8f;\n}\n\nion-text h5, .postText, .replyTo {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding: 0px;\n}\n\nion-list {\n  background: rgba(0, 0, 0, 0);\n}\n\n.reply {\n  margin-bottom: 8px;\n  margin-top: 8px;\n  border: 1px solid #818180;\n  border-radius: 7px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-right: 5px;\n  padding-left: 5px;\n  box-shadow: 5px 5px #e2e2e2;\n}\n\nion-img {\n  border-radius: 7px;\n  overflow: hidden;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pidWt1dHMvRG9jdW1lbnRzL0dpdGh1Yi9Bbm9uU29jaWFsTWVkaWEvc3JjL2FwcC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3N0SWQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnBvc3RUZXh0IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5wb3N0VGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJlcGx5VG8ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnJlcGx5VG86YWN0aXZlIHtcbiAgICBjb2xvcjogcmdiKDE0MywgMTQzLCAxNDMpO1xufVxuXG5pb24tdGV4dCBoNSwgLnBvc3RUZXh0LCAucmVwbHlUbyB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xufVxuXG4ucmVwbHl7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI5LCAxMjksIDEyOCk7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCByZ2IoMjI2LCAyMjYsIDIyNik7XG59XG5cbmlvbi1pbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn0iLCIucG9zdElkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucG9zdFRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5wb3N0VGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmVwbHlUbyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnJlcGx5VG86YWN0aXZlIHtcbiAgY29sb3I6ICM4ZjhmOGY7XG59XG5cbmlvbi10ZXh0IGg1LCAucG9zdFRleHQsIC5yZXBseVRvIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4ucmVwbHkge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzgxODE4MDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBib3gtc2hhZG93OiA1cHggNXB4ICNlMmUyZTI7XG59XG5cbmlvbi1pbWcge1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/product-detail/product-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: ProductDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailPage", function() { return ProductDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item.service */ "./src/app/item.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reply_modal_reply_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reply-modal/reply-modal.page */ "./src/app/reply-modal/reply-modal.page.ts");
/* harmony import */ var _show_reply_modal_show_reply_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../show-reply-modal/show-reply-modal.page */ "./src/app/show-reply-modal/show-reply-modal.page.ts");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../image-modal/image-modal.page */ "./src/app/image-modal/image-modal.page.ts");











var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(route, itemService, alertController, events, modalController, loadingController) {
        var _this = this;
        this.route = route;
        this.itemService = itemService;
        this.alertController = alertController;
        this.events = events;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.post_replys = [];
        var self = this;
        events.subscribe('replychange', function (time) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = self;
                        return [4 /*yield*/, self.getReplys(self.current_post.docId)];
                    case 1:
                        _a.post_replys = _b.sent();
                        // user and time are the same arguments passed in `events.publish(user, time)`
                        console.log('data reloading  time:', time);
                        console.log(self.post_replys);
                        return [2 /*return*/];
                }
            });
        }); });
    }
    // this will show loading bar
    ProductDetailPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading Replies...',
                            keyboardClose: true,
                            spinner: "circular"
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // will the dismiss the loading bar upon replies being loaded
    ProductDetailPage.prototype.dismissLoading = function () {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.loadingController.dismiss({
            'dismissed': true
        });
    };
    // on init will get the item passed
    ProductDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.current_post = param;
                        console.log(this.current_post);
                        _a = this;
                        return [4 /*yield*/, this.getReplys(this.current_post.docId)];
                    case 1:
                        _a.post_replys = _b.sent();
                        console.log(this.post_replys);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    // return string of date from timestamp input
    ProductDetailPage.prototype.getDate = function (d) {
        var date = new Date(d);
        return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
    };
    // this will get the post 
    ProductDetailPage.prototype.getReplys = function (postId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var replys, self;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        replys = [];
                        self = this;
                        return [4 /*yield*/, self.presentLoading()];
                    case 1:
                        _a.sent();
                        console.log("GETTING REPLYS FOR " + postId + "!");
                        return [4 /*yield*/, this.itemService.getReplies(postId)];
                    case 2:
                        replys = _a.sent();
                        return [4 /*yield*/, self.dismissLoading()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, replys];
                }
            });
        });
    };
    ProductDetailPage.prototype.createReply = function (postId) {
        console.log("CREATING REPLY TO POST " + postId + "!");
        this.presentReplyModal(postId);
    };
    ProductDetailPage.prototype.showPost = function (postId) {
        console.log("showing post " + postId.replyTo);
        var self = this;
        var p;
        if (this.current_post.docId == postId.replyTo) {
            p = this.current_post;
        }
        else {
            for (var i = 0; i < self.post_replys.length; i++) {
                console.log(self.post_replys[i].docId);
                if (self.post_replys[i].docId == postId.replyTo) {
                    p = self.post_replys[i];
                    break;
                }
            }
        }
        console.log(p);
        this.presentShowReplyModal(p);
    };
    // shows the modal for the user to input text and create reply
    ProductDetailPage.prototype.presentShowReplyModal = function (post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _show_reply_modal_show_reply_modal_page__WEBPACK_IMPORTED_MODULE_6__["ShowReplyModalPage"],
                            componentProps: {
                                'post': post
                            },
                            backdropDismiss: true
                        })];
                    case 1:
                        modal = _a.sent();
                        // present the modal
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        // present the modal
                        _a.sent();
                        // wait for the modal to dismiss to reload data
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 3:
                        // wait for the modal to dismiss to reload data
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // shows the modal for the user to input text and create reply
    ProductDetailPage.prototype.presentReplyModal = function (post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _reply_modal_reply_modal_page__WEBPACK_IMPORTED_MODULE_5__["ReplyModalPage"],
                            componentProps: {
                                'replyTo': post.docId,
                                'text': post.text,
                                'originalPost': this.current_post.docId
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        // present the modal
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        // present the modal
                        _a.sent();
                        // wait for the modal to dismiss to reload data
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 3:
                        // wait for the modal to dismiss to reload data
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // shows the modal for the user to input text and create reply
    ProductDetailPage.prototype.expandImg = function (img) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Expanding Image!");
                        return [4 /*yield*/, this.modalController.create({
                                component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_7__["ImageModalPage"],
                                componentProps: {
                                    'img': img
                                },
                                backdropDismiss: true
                            })];
                    case 1:
                        modal = _a.sent();
                        // present the modal
                        document.getElementById("content").style.filter = "blur(5px)";
                        document.getElementById("header").style.filter = "blur(5px)";
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        // wait for the modal to dismiss to reload data
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 3:
                        // wait for the modal to dismiss to reload data
                        _a.sent();
                        document.getElementById("content").style.filter = "blur(0px)";
                        document.getElementById("header").style.filter = "blur(0px)";
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductDetailPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
    ]; };
    ProductDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! raw-loader!./product-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/product-detail/product-detail.page.html"),
            styles: [__webpack_require__(/*! ./product-detail.page.scss */ "./src/app/product-detail/product-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=product-detail-product-detail-module-es5.js.map