(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js ***!
  \************************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */
var getTimeGivenProgression = function (p0, p1, p2, p3, progression) {
    var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
var solveCubicParametricEquation = function (p0, p1, p2, p3, t) {
    var partA = (3 * p1) * Math.pow(t - 1, 2);
    var partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    var partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
var solveCubicBezier = function (p0, p1, p2, p3, refPoint) {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(function (root) { return root >= 0 && root <= 1; });
};
var solveQuadraticEquation = function (a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
var solveCubicEquation = function (a, b, c, d) {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    var p = (3 * c - b * b) / 3;
    var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    var r = Math.sqrt(Math.pow(-(p / 3), 3));
    var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    var s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var dfChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (el) {
    return (el.children != null) ? el.children : el.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var router;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js ***!
  \*************************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
var watchForOptions = function (containerEl, tagName, onChange) {
    var mutation = new MutationObserver(function (mutationList) {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
var getSelectedOption = function (mutationList, tagName) {
    var newOption;
    mutationList.forEach(function (mut) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
var findCheckedOption = function (el, tagName) {
    if (el.nodeType !== 1) {
        return undefined;
    }
    var options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find(function (o) { return o.checked === true; });
};



/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/image-modal/image-modal.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/image-modal/image-modal.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content>\n  <ion-button fill=\"clear\" (click)=\"dismiss()\">\n    <ion-icon slot=\"icon-only\" src=\"assets/icon/close-outline.svg\"></ion-icon>\n  </ion-button>\n\n  <ion-slides>\n    <ion-slide>\n      <div class=\"swiper-zoom-container\">\n        <img src=\"{{img}}\">\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-button fill=\"clear\" download=\"img\">\n    <ion-icon slot=\"icon-only\" src=\"assets/icon/download-outline.svg\"></ion-icon>\n  </ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/show-reply-modal/show-reply-modal.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/show-reply-modal/show-reply-modal.page.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n\n\n  <ion-card *ngIf=\"post\">\n\n      <ion-toolbar>\n        <ion-title *ngIf=\"post\">{{post.docId}}</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"dismiss()\">Close</ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n\n      <ion-img *ngIf=\"post.img\" [src]=\"post.img\"></ion-img>\n\n    <ion-text>\n      <p id=\"title\" *ngIf=\"post.title\">{{post.title}}</p>\n      <p id=\"text\">{{post.text}}</p>\n      <p id=\"timestamp\" *ngIf=\"post.timestamp\">Posted At {{getDate(post.timestamp)}}</p>\n    </ion-text>\n  </ion-card>\n  \n\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/image-modal/image-modal-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/image-modal/image-modal-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ImageModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModalPageRoutingModule", function() { return ImageModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _image_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-modal.page */ "./src/app/image-modal/image-modal.page.ts");




var routes = [
    {
        path: '',
        component: _image_modal_page__WEBPACK_IMPORTED_MODULE_3__["ImageModalPage"]
    }
];
var ImageModalPageRoutingModule = /** @class */ (function () {
    function ImageModalPageRoutingModule() {
    }
    ImageModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ImageModalPageRoutingModule);
    return ImageModalPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/image-modal/image-modal.module.ts":
/*!***************************************************!*\
  !*** ./src/app/image-modal/image-modal.module.ts ***!
  \***************************************************/
/*! exports provided: ImageModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModalPageModule", function() { return ImageModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-modal-routing.module */ "./src/app/image-modal/image-modal-routing.module.ts");
/* harmony import */ var _image_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-modal.page */ "./src/app/image-modal/image-modal.page.ts");







var ImageModalPageModule = /** @class */ (function () {
    function ImageModalPageModule() {
    }
    ImageModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _image_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImageModalPageRoutingModule"]
            ],
            declarations: [_image_modal_page__WEBPACK_IMPORTED_MODULE_6__["ImageModalPage"]]
        })
    ], ImageModalPageModule);
    return ImageModalPageModule;
}());



/***/ }),

/***/ "./src/app/image-modal/image-modal.page.scss":
/*!***************************************************!*\
  !*** ./src/app/image-modal/image-modal.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgb(160, 160, 160, .2);\n}\n\nion-slides {\n  height: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pidWt1dHMvRG9jdW1lbnRzL0dpdGh1Yi9Bbm9uU29jaWFsTWVkaWEvc3JjL2FwcC9pbWFnZS1tb2RhbC9pbWFnZS1tb2RhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ltYWdlLW1vZGFsL2ltYWdlLW1vZGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FDQ0o7O0FER0E7RUFDSSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9pbWFnZS1tb2RhbC9pbWFnZS1tb2RhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMTYwLCAxNjAsIDE2MCwgLjIpOyAgXG59XG5cblxuaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiA4MCU7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigxNjAsIDE2MCwgMTYwLCAuMik7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDgwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/image-modal/image-modal.page.ts":
/*!*************************************************!*\
  !*** ./src/app/image-modal/image-modal.page.ts ***!
  \*************************************************/
/*! exports provided: ImageModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModalPage", function() { return ImageModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var ImageModalPage = /** @class */ (function () {
    function ImageModalPage(modalController, navParams) {
        this.modalController = modalController;
        console.log(navParams.get('img'));
        this.modalCtrl = modalController;
    }
    ImageModalPage.prototype.ngOnInit = function () {
    };
    ImageModalPage.prototype.dismiss = function () {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    };
    // to zoom the image
    ImageModalPage.prototype.zoom = function (zoomIn) {
    };
    ImageModalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ImageModalPage.prototype, "img", void 0);
    ImageModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-modal',
            template: __webpack_require__(/*! raw-loader!./image-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/image-modal/image-modal.page.html"),
            styles: [__webpack_require__(/*! ./image-modal.page.scss */ "./src/app/image-modal/image-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
    ], ImageModalPage);
    return ImageModalPage;
}());



/***/ }),

/***/ "./src/app/show-reply-modal/show-reply-modal-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/show-reply-modal/show-reply-modal-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ShowReplyModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowReplyModalPageRoutingModule", function() { return ShowReplyModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _show_reply_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-reply-modal.page */ "./src/app/show-reply-modal/show-reply-modal.page.ts");




var routes = [
    {
        path: '',
        component: _show_reply_modal_page__WEBPACK_IMPORTED_MODULE_3__["ShowReplyModalPage"]
    }
];
var ShowReplyModalPageRoutingModule = /** @class */ (function () {
    function ShowReplyModalPageRoutingModule() {
    }
    ShowReplyModalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ShowReplyModalPageRoutingModule);
    return ShowReplyModalPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/show-reply-modal/show-reply-modal.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/show-reply-modal/show-reply-modal.module.ts ***!
  \*************************************************************/
/*! exports provided: ShowReplyModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowReplyModalPageModule", function() { return ShowReplyModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _show_reply_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-reply-modal-routing.module */ "./src/app/show-reply-modal/show-reply-modal-routing.module.ts");
/* harmony import */ var _show_reply_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-reply-modal.page */ "./src/app/show-reply-modal/show-reply-modal.page.ts");







var ShowReplyModalPageModule = /** @class */ (function () {
    function ShowReplyModalPageModule() {
    }
    ShowReplyModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _show_reply_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowReplyModalPageRoutingModule"]
            ],
            declarations: [_show_reply_modal_page__WEBPACK_IMPORTED_MODULE_6__["ShowReplyModalPage"]]
        })
    ], ShowReplyModalPageModule);
    return ShowReplyModalPageModule;
}());



/***/ }),

/***/ "./src/app/show-reply-modal/show-reply-modal.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/show-reply-modal/show-reply-modal.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: rgb(160, 160, 160, .01);\n}\n\nion-card {\n  --background: rgb(255, 255, 255, 1);\n  width: 85%;\n  height: auto;\n  border-radius: 15px;\n  margin: auto;\n  -webkit-transform: translate(0%, -50%);\n          transform: translate(0%, -50%);\n  top: 50%;\n}\n\nion-img {\n  border-radius: 20%;\n  width: 80%;\n  margin: auto;\n}\n\n#title {\n  font-size: 20px;\n  color: black;\n  margin-left: 10px;\n  font-weight: bold;\n}\n\n#text {\n  font-size: 16px;\n  color: #444444;\n  margin-left: 10px;\n}\n\n#timestamp {\n  font-size: 12px;\n  color: #8a2173;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pidWt1dHMvRG9jdW1lbnRzL0dpdGh1Yi9Bbm9uU29jaWFsTWVkaWEvc3JjL2FwcC9zaG93LXJlcGx5LW1vZGFsL3Nob3ctcmVwbHktbW9kYWwucGFnZS5zY3NzIiwic3JjL2FwcC9zaG93LXJlcGx5LW1vZGFsL3Nob3ctcmVwbHktbW9kYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUNBQUE7QUNDSjs7QURFQTtFQUNJLG1DQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsUUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaG93LXJlcGx5LW1vZGFsL3Nob3ctcmVwbHktbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDE2MCwgMTYwLCAxNjAsIC4wMSk7ICBcbn1cblxuaW9uLWNhcmQge1xuICAgIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUsIDEpOyAgXG4gICAgd2lkdGg6IDg1JTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICAgIHRvcDogNTAlO1xufVxuXG5pb24taW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IGF1dG9cbn1cblxuI3RpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjNDQ0NDQ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4jdGltZXN0YW1wIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM4YTIxNzM7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigxNjAsIDE2MCwgMTYwLCAuMDEpO1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUsIDEpO1xuICB3aWR0aDogODUlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIC01MCUpO1xuICB0b3A6IDUwJTtcbn1cblxuaW9uLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4jdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4jdGltZXN0YW1wIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzhhMjE3MztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/show-reply-modal/show-reply-modal.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/show-reply-modal/show-reply-modal.page.ts ***!
  \***********************************************************/
/*! exports provided: ShowReplyModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowReplyModalPage", function() { return ShowReplyModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../item.service */ "./src/app/item.service.ts");






var ShowReplyModalPage = /** @class */ (function () {
    function ShowReplyModalPage(modalController, navParams, itemService, events) {
        this.modalController = modalController;
        this.itemService = itemService;
        this.events = events;
        console.log(navParams.get('replyTo'));
        this.modalCtrl = modalController;
    }
    ShowReplyModalPage.prototype.ngOnInit = function () {
    };
    ShowReplyModalPage.prototype.getDate = function (d) {
        var date = new Date(d);
        return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + date.getHours() + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
    };
    ShowReplyModalPage.prototype.dismiss = function () {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalCtrl.dismiss({
            'dismissed': true
        });
    };
    ShowReplyModalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: _item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShowReplyModalPage.prototype, "post", void 0);
    ShowReplyModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show-reply-modal',
            template: __webpack_require__(/*! raw-loader!./show-reply-modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/show-reply-modal/show-reply-modal.page.html"),
            styles: [__webpack_require__(/*! ./show-reply-modal.page.scss */ "./src/app/show-reply-modal/show-reply-modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            _item_service__WEBPACK_IMPORTED_MODULE_3__["ItemService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"]])
    ], ShowReplyModalPage);
    return ShowReplyModalPage;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map