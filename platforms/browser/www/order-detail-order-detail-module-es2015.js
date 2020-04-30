(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-detail-order-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/order-detail/order-detail.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order-detail/order-detail.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>Order Details</ion-title>\n\n    <ion-button color=\"primary\" slot=\"end\" (click)=\"deleteOrder()\">\n      Delete Order\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"current_order\">\n  <ion-card style=\"margin-top: 10px; margin-bottom: 0px;\" >\n    <ion-card-header>\n      <ion-card-title>\n        Order Number : #{{current_order.orderNumber}}\n      </ion-card-title>\n    </ion-card-header>\n    \n    <ion-card-content>\n      <ion-item lines=\"none\" style=\"font-weight: bold; font-size: 24px;\">${{ current_order.total }}</ion-item>\n      <ion-item lines=\"none\">{{current_order.quantity}} {{current_order.productName}}s were purchased on {{current_order.orderDate}}</ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/order-detail/order-detail-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/order-detail/order-detail-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageRoutingModule", function() { return OrderDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-detail.page */ "./src/app/order-detail/order-detail.page.ts");




const routes = [
    {
        path: '',
        component: _order_detail_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailPage"]
    }
];
let OrderDetailPageRoutingModule = class OrderDetailPageRoutingModule {
};
OrderDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/order-detail/order-detail.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/order-detail/order-detail.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function() { return OrderDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-detail-routing.module */ "./src/app/order-detail/order-detail-routing.module.ts");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-detail.page */ "./src/app/order-detail/order-detail.page.ts");







let OrderDetailPageModule = class OrderDetailPageModule {
};
OrderDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailPageRoutingModule"]
        ],
        declarations: [_order_detail_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailPage"]]
    })
], OrderDetailPageModule);



/***/ }),

/***/ "./src/app/order-detail/order-detail.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/order-detail/order-detail.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWRldGFpbC9vcmRlci1kZXRhaWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/order-detail/order-detail.page.ts":
/*!***************************************************!*\
  !*** ./src/app/order-detail/order-detail.page.ts ***!
  \***************************************************/
/*! exports provided: OrderDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPage", function() { return OrderDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../item.service */ "./src/app/item.service.ts");





let OrderDetailPage = class OrderDetailPage {
    constructor(router, route, itemService, alertController) {
        this.router = router;
        this.route = route;
        this.itemService = itemService;
        this.alertController = alertController;
    }
    // return to order page
    goBack() {
        this.router.navigate(['./list']);
    }
    ngOnInit() {
        this.route.params.subscribe(param => {
            this.current_order = param;
            console.log(this.current_order);
        });
    }
};
OrderDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
OrderDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-detail',
        template: __webpack_require__(/*! raw-loader!./order-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/order-detail/order-detail.page.html"),
        styles: [__webpack_require__(/*! ./order-detail.page.scss */ "./src/app/order-detail/order-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _item_service__WEBPACK_IMPORTED_MODULE_4__["ItemService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], OrderDetailPage);



/***/ })

}]);
//# sourceMappingURL=order-detail-order-detail-module-es2015.js.map