(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/aAm":
/*!*********************************************************************************!*\
  !*** ./src/app/components/shop/shop-product/pipes/shop-product-orderby.pipe.ts ***!
  \*********************************************************************************/
/*! exports provided: ShopProductOrderbyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopProductOrderbyPipe", function() { return ShopProductOrderbyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_enums_Operation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/enums/Operation */ "XZ+d");



class ShopProductOrderbyPipe {
    transform(arrayx, operation) {
        arrayx.sort((a, b) => {
            let first = 0, second = 0;
            switch (operation) {
                case src_app_models_enums_Operation__WEBPACK_IMPORTED_MODULE_1__["Operation"].Default: {
                    first = a.id;
                    second = b.id;
                    break;
                }
                case src_app_models_enums_Operation__WEBPACK_IMPORTED_MODULE_1__["Operation"].Decreasing: {
                    first = a.feature.price;
                    second = b.feature.price;
                    break;
                }
                case src_app_models_enums_Operation__WEBPACK_IMPORTED_MODULE_1__["Operation"].Increasing: {
                    first = b.feature.price;
                    second = a.feature.price;
                    break;
                }
                default:
                    break;
            }
            if (first < second) {
                return -1;
            }
            else if (first > second) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return arrayx;
    }
}
ShopProductOrderbyPipe.ɵfac = function ShopProductOrderbyPipe_Factory(t) { return new (t || ShopProductOrderbyPipe)(); };
ShopProductOrderbyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shopProductOrderby", type: ShopProductOrderbyPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopProductOrderbyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'shopProductOrderby',
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tanyaheer/Downloads/PurpleShopping/src/main.ts */"zUnb");


/***/ }),

/***/ "0bxY":
/*!************************************************************************!*\
  !*** ./src/app/components/shop/shop-product/shop-product.component.ts ***!
  \************************************************************************/
/*! exports provided: ShopProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopProductComponent", function() { return ShopProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_enums_Operation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/enums/Operation */ "XZ+d");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ "cPV5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/messenger.service */ "muQR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng5-slider */ "EsRS");
/* harmony import */ var _pipes_shop_product_sort_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/shop-product-sort.pipe */ "mLgS");
/* harmony import */ var _pipes_shop_product_filtercolor_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/shop-product-filtercolor.pipe */ "mHdj");
/* harmony import */ var _pipes_shop_product_orderby_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/shop-product-orderby.pipe */ "/aAm");












function ShopProductComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/shop/category/", category_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r2.name);
} }
function ShopProductComponent_div_43_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopProductComponent_div_43_div_2_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const product_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addToCart(product_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + image_r5.url + ")");
} }
function ShopProductComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShopProductComponent_div_43_div_2_Template, 11, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", product_r3["productImages"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r3.feature.price, " $");
} }
class ShopProductComponent {
    constructor(productService, categoryService, activatedRouter, messengerservice) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.activatedRouter = activatedRouter;
        this.messengerservice = messengerservice;
        this.operation = src_app_models_enums_Operation__WEBPACK_IMPORTED_MODULE_1__["Operation"].Default;
        this.minPrice = 0;
        this.maxPrice = 20000;
        this.options = {
            floor: 0,
            ceil: 20000,
            translate: (value, label) => {
                return '<b>' + value + '</b>';
            },
        };
        this.colors = [
            { name: 'Beyaz', colorcode: '#f8f9fa' },
            { name: 'Siyah', colorcode: '#333' },
            { name: 'Krem', colorcode: '#fbeab7' },
            { name: 'Gümüş', colorcode: '#ebebeb' },
        ];
    }
    ngOnInit() {
        this.getProducts();
        this.getCategories(true);
    }
    getProducts() {
        this.activatedRouter.params.subscribe((params) => {
            this.categoryId = params['categoryId'];
            this.productService.getProduct(this.categoryId).subscribe((data) => {
                this.products = data;
            });
        });
    }
    getCategories(isMain) {
        this.categoryService.getCategories(isMain).subscribe((data) => {
            this.categories = data;
        });
    }
    sort(event) {
        switch (event.target.value) {
            case 'Low': {
                this.operation = src_app_models_enums_Operation__WEBPACK_IMPORTED_MODULE_1__["Operation"].Decreasing;
                break;
            }
            case 'High': {
                this.operation = src_app_models_enums_Operation__WEBPACK_IMPORTED_MODULE_1__["Operation"].Increasing;
                break;
            }
            default: {
                this.operation = src_app_models_enums_Operation__WEBPACK_IMPORTED_MODULE_1__["Operation"].Default;
                break;
            }
        }
    }
    addToCart(product) {
        this.messengerservice.sendMsg(product);
    }
    selectColor(color) {
        this.colorName = color.name;
    }
}
ShopProductComponent.ɵfac = function ShopProductComponent_Factory(t) { return new (t || ShopProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_5__["MessengerService"])); };
ShopProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopProductComponent, selectors: [["app-shop-product"]], decls: 47, vars: 20, consts: [[1, "product", "spad"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-md-5"], [1, "sidebar"], [1, "sidebar__item"], ["routerLink", "/shop"], [4, "ngFor", "ngForOf"], [3, "value", "highValue", "options", "valueChange", "highValueChange"], [1, "col-lg-9", "col-md-7"], [1, "filter__item"], [1, "col-lg-4", "col-md-5"], [1, "filter__sort"], [3, "change"], ["value", "Favori"], ["value", "Low"], ["value", "High"], [1, "col-lg-4", "col-md-4"], [1, "filter__found"], [1, "col-lg-4", "col-md-3"], [1, "filter__option"], [1, "icon_grid-2x2"], [1, "icon_ul"], ["class", "col-lg-4 col-md-6 col-sm-6", 4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "product__item"], ["class", "product__item__pic set-bg", "data-setbg", "img/product/product-1.jpg", 3, "background-image", 4, "ngFor", "ngForOf"], [1, "product__item__text"], ["href", "#"], ["data-setbg", "img/product/product-1.jpg", 1, "product__item__pic", "set-bg"], [1, "product__item__pic__hover"], [1, "fa", "fa-heart"], [1, "fa", "fa-retweet"], [3, "click"], [1, "fa", "fa-shopping-cart"]], template: function ShopProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ShopProductComponent_li_12_Template, 3, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ng5-slider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ShopProductComponent_Template_ng5_slider_valueChange_16_listener($event) { return ctx.minPrice = $event; })("highValueChange", function ShopProductComponent_Template_ng5_slider_highValueChange_16_listener($event) { return ctx.maxPrice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ShopProductComponent_Template_select_change_24_listener($event) { return ctx.sort($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "New Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Low Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "shopProductSort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ShopProductComponent_div_43_Template, 9, 3, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "shopProductFiltercolor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "shopProductOrderby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "shopProductSort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_4_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.minPrice)("highValue", ctx.maxPrice)("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](36, 6, ctx.products, ctx.minPrice, ctx.maxPrice)) == null ? null : tmp_4_0.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](44, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](46, 16, ctx.products, ctx.minPrice, ctx.maxPrice), ctx.operation), ctx.colorName));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ng5_slider__WEBPACK_IMPORTED_MODULE_7__["ɵa"]], pipes: [_pipes_shop_product_sort_pipe__WEBPACK_IMPORTED_MODULE_8__["ShopProductSortPipe"], _pipes_shop_product_filtercolor_pipe__WEBPACK_IMPORTED_MODULE_9__["ShopProductFiltercolorPipe"], _pipes_shop_product_orderby_pipe__WEBPACK_IMPORTED_MODULE_10__["ShopProductOrderbyPipe"]], styles: [".ng5-slider[_ngcontent-%COMP%]   .ng5-slider-pointer[_ngcontent-%COMP%] {\n  background-color: #47d6c9 !important;\n}\n.ng5-slider[_ngcontent-%COMP%]   .ng5-slider-selection[_ngcontent-%COMP%] {\n  background: #47d6c9 !important;\n}\n.test[_ngcontent-%COMP%] {\n  background: 0 0;\n  position: absolute;\n  left: 0;\n  top: 5px;\n  height: 14px;\n  width: 14px;\n  content: \"\";\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic2hvcC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmc1LXNsaWRlciAubmc1LXNsaWRlci1wb2ludGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3ZDZjOSAhaW1wb3J0YW50O1xufVxuLm5nNS1zbGlkZXIgLm5nNS1zbGlkZXItc2VsZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogIzQ3ZDZjOSAhaW1wb3J0YW50O1xufVxuLnRlc3Qge1xuICBiYWNrZ3JvdW5kOiAwIDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiA1cHg7XG4gIGhlaWdodDogMTRweDtcbiAgd2lkdGg6IDE0cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shop-product',
                templateUrl: './shop-product.component.html',
                styleUrls: ['./shop-product.component.css'],
            }]
    }], function () { return [{ type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_5__["MessengerService"] }]; }, null); })();


/***/ }),

/***/ "5Ey6":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class SignupComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 30, vars: 0, consts: [[1, "container-fluid", "d-flex", "justify-content-center", "align-items-center", "h-100", 2, "margin-top", "130px"], [1, "card", "p-3", "text-center", "py-4"], ["routerLink", "/login", 1, "text-decoration-none"], [1, "mt-3", "px-3"], ["placeholder", "Username", 1, "form-control"], [1, "input-group", "px-3", "mt-3"], ["type", "text", "placeholder", "First Name", "aria-label", "Username", 1, "form-control"], ["type", "text", "placeholder", "Last Name", "aria-label", "Server", 1, "form-control"], ["placeholder", "E-mail", 1, "form-control"], ["type", "password", "placeholder", "Password", "aria-label", "passowrd", 1, "form-control"], ["type", "password", "placeholder", "Confirm Password", "aria-label", "Server", 1, "form-control"], [1, "mt-3", "d-grid", "px-3"], [1, "btn", "btn-block", "btn-bold", "btn-primary"], [1, "px-3"], [1, "mt-2", "form-check", "d-flex", "flex-row"], ["type", "checkbox", "value", "", "id", "services", 1, "form-check-input"], ["for", "services", 1, "form-check-label", "ms-2"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Already have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Signin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " I have read and agree to the terms. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".card[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    border-radius: 0px;\r\n    margin-bottom: 30px;\r\n    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.03);\r\n    transition: .5s\r\n}\r\n\r\n.padding[_ngcontent-%COMP%] {\r\n    padding: 3rem !important\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    background-color: #f9f9fa\r\n}\r\n\r\nh5.card-title[_ngcontent-%COMP%] {\r\n    font-size: 15px\r\n}\r\n\r\n.fw-400[_ngcontent-%COMP%] {\r\n    font-weight: 400 !important\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n    font-family: Roboto, sans-serif;\r\n    font-weight: 300;\r\n    line-height: 1.5;\r\n    margin-bottom: 0;\r\n    padding: 15px 20px;\r\n    border-bottom: 1px solid rgba(77, 82, 89, 0.07)\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n    padding: 1.25rem\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n    border-color: #ebebeb;\r\n    border-radius: 2px;\r\n    color: #8b95a5;\r\n    padding: 5px 12px;\r\n    font-size: 14px;\r\n    line-height: inherit;\r\n    transition: 0.2s linear\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    background-color: #33cabb;\r\n    border-color: #33cabb;\r\n    color: #fff\r\n}\r\n\r\n.btn-bold[_ngcontent-%COMP%] {\r\n    font-family: Roboto, sans-serif;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    font-size: 12px\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n    background-color: #52d3c7;\r\n    border-color: #52d3c7;\r\n    color: #fff\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n    border-color: #83e0d7;\r\n    color: #4d5259;\r\n    box-shadow: 0 0 0 0.1rem rgba(51, 202, 187, 0.15)\r\n}\r\n\r\n.custom-radio[_ngcontent-%COMP%] {\r\n    cursor: pointer\r\n}\r\n\r\n.custom-control[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    min-width: 18px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7SUFFbkIseUNBQXlDO0lBRXpDO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBRUksY0FBYztJQUNkO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixvQkFBb0I7SUFFcEI7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBRWQ7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFFSSxhQUFhO0lBQ2I7QUFDSiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC41cztcclxuICAgIHRyYW5zaXRpb246IC41c1xyXG59XHJcblxyXG4ucGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiAzcmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWZhXHJcbn1cclxuXHJcbmg1LmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4XHJcbn1cclxuXHJcbi5mdy00MDAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg3NywgODIsIDg5LCAwLjA3KVxyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAgIC1tcy1mbGV4OiAxIDEgYXV0bztcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgcGFkZGluZzogMS4yNXJlbVxyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZWJlYmViO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29sb3I6ICM4Yjk1YTU7XHJcbiAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgbGluZWFyXHJcbn1cclxuXHJcbi5jYXJkLWJvZHk+KjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzM2NhYmI7XHJcbiAgICBib3JkZXItY29sb3I6ICMzM2NhYmI7XHJcbiAgICBjb2xvcjogI2ZmZlxyXG59XHJcblxyXG4uYnRuLWJvbGQge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJkM2M3O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNTJkM2M3O1xyXG4gICAgY29sb3I6ICNmZmZcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICM4M2UwZDc7XHJcbiAgICBjb2xvcjogIzRkNTI1OTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xcmVtIHJnYmEoNTEsIDIwMiwgMTg3LCAwLjE1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSByZ2JhKDUxLCAyMDIsIDE4NywgMC4xNSlcclxufVxyXG5cclxuLmN1c3RvbS1yYWRpbyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuLmN1c3RvbS1jb250cm9sIHtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi13aWR0aDogMThweFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6nr9":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "4XzM");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "EUDy");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "qlzE");





class SettingsService {
    constructor(http) {
        this.http = http;
    }
    load() {
        var promise = this.http
            .get("/assets/urlSettings.json")
            .map(res => res.json())
            .toPromise();
        promise.then(setting => (this.data = setting));
        return promise;
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"])); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"] }]; }, null); })();


/***/ }),

/***/ "8omo":
/*!************************************************************************!*\
  !*** ./src/app/components/home/home-product/home-product.component.ts ***!
  \************************************************************************/
/*! exports provided: HomeProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeProductComponent", function() { return HomeProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category.service */ "cPV5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/messenger.service */ "muQR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function HomeProductComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeProductComponent_li_12_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const category_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.setCateListSelect(category_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](category_r2.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/products/category/", category_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r2.name, "");
} }
function HomeProductComponent_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeProductComponent_div_14_div_2_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addToCart(product_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + image_r7.url + ")");
} }
function HomeProductComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeProductComponent_div_14_div_2_Template, 11, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", product_r5["productImages"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r5.feature.price, " $");
} }
const _c0 = function (a0) { return [a0]; };
class HomeProductComponent {
    constructor(productService, categoryService, activatedRouter, messengerservice) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.activatedRouter = activatedRouter;
        this.messengerservice = messengerservice;
    }
    ngOnInit() {
        this.getProducts();
        this.getCategories(true);
        this.cateSelectAllClass = 'active';
    }
    getProducts() {
        this.activatedRouter.params.subscribe((params) => {
            this.categoryId = params['categoryId'];
            this.productService.getProduct(this.categoryId).subscribe((data) => {
                this.products = data;
            });
        });
    }
    getCategories(isMain) {
        this.categoryService.getCategories(isMain).subscribe((data) => {
            console.log(data);
            this.categories = data;
            if (this.categoryId != null)
                this.setCateListSelect(this.categoryId);
        });
    }
    setCateListSelect(categoryId) {
        for (let cat of this.categories) {
            if (cat.id == categoryId)
                cat.className = 'active';
            else
                cat.className = '';
        }
        this.cateSelectAllClass = '';
    }
    addToCart(product) {
        this.messengerservice.sendMsg(product);
    }
}
HomeProductComponent.ɵfac = function HomeProductComponent_Factory(t) { return new (t || HomeProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_4__["MessengerService"])); };
HomeProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeProductComponent, selectors: [["app-home-product"]], decls: 15, vars: 5, consts: [[1, "featured"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "section-title"], [1, "featured__controls"], [3, "ngClass"], ["routerLink", "/home"], [3, "class", 4, "ngFor", "ngForOf"], [1, "row", "featured__filter"], ["class", "col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat", 4, "ngFor", "ngForOf"], [3, "routerLink", "click"], [1, "col-lg-3", "col-md-4", "col-sm-6", "mix", "oranges", "fresh-meat"], [1, "featured__item"], ["class", "featured__item__pic set-bg", 3, "background-image", 4, "ngFor", "ngForOf"], [1, "featured__item__text"], ["href", "#"], [1, "featured__item__pic", "set-bg"], [1, "featured__item__pic__hover"], [1, "fa", "fa-heart"], [1, "fa", "fa-retweet"], [3, "click"], [1, "fa", "fa-shopping-cart"]], template: function HomeProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Popular Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeProductComponent_li_12_Template, 3, 4, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeProductComponent_div_14_Template, 9, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.cateSelectAllClass));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-product',
                templateUrl: './home-product.component.html',
                styleUrls: ['./home-product.component.css'],
            }]
    }], function () { return [{ type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_4__["MessengerService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    apiBaseURL: 'https://localhost:44389/api/',
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_category_home_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-category/home-category.component */ "zoUy");
/* harmony import */ var _home_product_home_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-product/home-product.component */ "8omo");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home-category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home-product");
    } }, directives: [_home_category_home_category_component__WEBPACK_IMPORTED_MODULE_1__["HomeCategoryComponent"], _home_product_home_product_component__WEBPACK_IMPORTED_MODULE_2__["HomeProductComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "D8Mh":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart/cart.component */ "QWKc");




class NavComponent {
    constructor() { }
    ngOnInit() { }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 57, vars: 0, consts: [[1, "header"], [1, "header-top"], [1, "container"], [1, "row"], [1, "col-lg-6", "col-md-6"], [1, "header-top-left"], [1, "fa", "fa-envelope"], [1, "header-top-right"], [1, "header-top-right-social"], ["href", "#"], [1, "fa", "fa-facebook"], [1, "fa", "fa-twitter"], [1, "fa", "fa-linkedin"], [1, "fa", "fa-pinterest-p"], [1, "header-top-right-auth"], [1, "fa", "fa-user"], [1, "col-lg-3"], [1, "header-logo"], ["routerLink", "/home"], ["src", "assets/img/logo3.png", "alt", ""], [1, "col-lg-7"], [1, "header-menu"], [1, "active"], ["routerLink", "/shop"], ["routerLink", "/cart-list"], ["routerLink", "/login"], ["routerLink", "/signup"], ["routerLink", "/about"], ["routerLink", "/contact"], [1, "col-lg-2"], [1, "humberger-open"], [1, "fa", "fa-bars"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " info@purplecommerce.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Demo User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Purple Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nav", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Shop Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 10000;\n  width: 100%;\n  left: 0;\n  right: 0;\n  z-index: 99999;\n  background: #ffffff;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVc7RUFDWCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwMDA7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk5OTk7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Gdn9":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common_http_caller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/http-caller */ "s2xa");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "6nr9");





class ProductService {
    constructor(httpCaller, settingsService) {
        this.httpCaller = httpCaller;
        this.settingsService = settingsService;
        this.feature = {
            id: 1,
            price: 500,
            unitInStock: 3,
            paymentOptions: 3,
            colorName: "Red",
        };
        this.category = {
            id: 1,
            name: "Categor1",
            isMain: true,
            photo: "photoUrl",
            upperCategoryId: null,
            upperCategories: null,
            className: "Women",
        };
        this.productImages = [
            {
                id: 1,
                name: "Women1",
                description: "Loream",
                url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                productId: 1,
            },
        ];
        this.productList = [
            {
                id: 1,
                name: "Product 1",
                description: "This is product Description",
                categoryId: 1,
                category: this.category,
                featureId: 1,
                feature: this.feature,
                productImages: this.productImages
            },
            {
                id: 2,
                name: "Product 2",
                description: "This is product Description",
                categoryId: 1,
                category: this.category,
                featureId: 1,
                feature: this.feature,
                productImages: this.productImages
            },
            {
                id: 3,
                name: "Product 3",
                description: "This is product Description",
                categoryId: 1,
                category: this.category,
                featureId: 1,
                feature: this.feature,
                productImages: this.productImages
            },
            {
                id: 4,
                name: "Product 3",
                description: "This is product Description",
                categoryId: 1,
                category: this.category,
                featureId: 1,
                feature: this.feature,
                productImages: this.productImages
            },
            {
                id: 4,
                name: "Product 4",
                description: "This is product Description",
                categoryId: 1,
                category: this.category,
                featureId: 1,
                feature: this.feature,
                productImages: this.productImages
            },
        ];
    }
    getProduct(categoryId) {
        if (categoryId) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.productList.filter(x => x.categoryId == categoryId));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.productList);
        }
        //   let newPath = this.settingsService.data.products;
        //   if (categoryId) {
        //     newPath += '?categoryId=' + categoryId;
        //   }
        //   return this.httpCaller
        //     .get(
        //       this.settingsService.data.products,
        //       null,
        //       true,
        //       'There was an error while getting your data'
        //     )
        //     .map((response: Response) => {
        //       return response as any;
        //     });
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_http_caller__WEBPACK_IMPORTED_MODULE_2__["HttpCaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _common_http_caller__WEBPACK_IMPORTED_MODULE_2__["HttpCaller"] }, { type: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "NRS+":
/*!*****************************************!*\
  !*** ./src/app/common/CustomEncoder.ts ***!
  \*****************************************/
/*! exports provided: CustomEncoder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEncoder", function() { return CustomEncoder; });
class CustomEncoder {
    encodeKey(key) {
        return encodeURIComponent(key);
    }
    encodeValue(value) {
        return encodeURIComponent(value);
    }
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}


/***/ }),

/***/ "QWKc":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_cart_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart-service.service */ "tHQl");
/* harmony import */ var src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/messenger.service */ "muQR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







function CartComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_14_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const cart_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.deleteProductToCart(cart_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cart_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", cart_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cart_r4.productName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cart_r4.qty, " x ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", cart_r4.price, " $");
} }
const _c0 = function () { return ["/cart-list"]; };
function CartComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Checkout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function CartComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor(messengerservice, cartService) {
        this.messengerservice = messengerservice;
        this.cartService = cartService;
        this.carts = [];
        this.cartTotal = 0;
    }
    ngOnInit() {
        this.messengerservice.getMsg().subscribe((product) => {
            this.cartService.addProductToCart(product);
        });
        this.cartTotal = src_app_services_cart_service_service__WEBPACK_IMPORTED_MODULE_1__["CartServiceService"].cartTotal;
        this.loadCartItems();
    }
    loadCartItems() {
        this.carts = this.cartService.GetCartItems();
    }
    // addProductToCart(product: Product) {
    //   const productExits = this.isAddedProductToCart(product.id);
    //   if(!productExits)
    //   {
    //     this.carts.push({
    //       productId: product.id,
    //       productName: product.name,
    //       qty: 1,
    //       image: product.productImages[0].url,
    //       price: product.feature.price,
    //     });
    //   }
    //   this.cartTotal = this.cartTotal + product.feature.price;
    // }
    deleteProductToCart(product) {
        this.cartService.deleteProductToCart(product);
    }
    // isAddedProductToCart(productId: number): boolean {
    //   for (let i in this.carts) {
    //     if (this.carts[i].productId == productId) {
    //       this.carts[i].qty++;
    //       return true;
    //     }
    //   }
    //   return false;
    // }
    modalOpenCart() {
        var elm = document.getElementById('modalCart');
        if (elm.style.visibility == 'visible')
            elm.style.visibility = 'hidden';
        else
            elm.style.visibility = 'visible';
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_2__["MessengerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service_service__WEBPACK_IMPORTED_MODULE_1__["CartServiceService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 18, vars: 4, consts: [[1, "header-cart"], [1, "fa", "fa-heart"], [3, "click"], [1, "fa", "fa-shopping-bag"], ["id", "modalCart"], [1, "modalcarts"], ["class", "cart-item", 4, "ngFor", "ngForOf"], ["class", "btncart", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["cartEmpty", ""], [1, "cart-item"], [1, "img-wrap"], ["alt", "", 3, "src"], [1, "cart-item-border"], [1, "delete-item", 3, "click"], [1, "btncart", 3, "routerLink"], [2, "color", "black"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_a_click_8_listener() { return ctx.modalOpenCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CartComponent_div_14_Template, 11, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CartComponent_button_15_Template, 2, 2, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CartComponent_ng_template_16_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.carts.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.carts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.carts.length > 0)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".cart-item[_ngcontent-%COMP%] {\n  padding: 11px 10px 5px 70px;\n  position: relative;\n  background: #fff;\n  transition: all 1000ms ease-out;\n}\n.cart-item[_ngcontent-%COMP%]   .img-wrap[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  overflow: hidden;\n  border: 1px solid #edeff0;\n  float: left;\n  margin-left: -65px;\n  margin-top: -9px;\n}\n.cart-item[_ngcontent-%COMP%]   .img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 6px;\n}\n.cart-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  top: -10px;\n}\n.cart-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #393c45;\n  display: block;\n  font-size: 10px;\n}\n.cart-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #47d6c9;\n  color: #000000;\n  font-size: 13px;\n  margin-right: 10px;\n}\n.cart-item-border[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 45px;\n  background: #edeff0;\n  height: 1px;\n  width: 230px;\n}\n.cart-item[_ngcontent-%COMP%]   .delete-item[_ngcontent-%COMP%] {\n  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/delete-item.png)\n    0 0 no-repeat;\n  width: 14px;\n  height: 14px;\n  float: right;\n  margin-top: 5px;\n}\n#modalCart[_ngcontent-%COMP%] {\n  visibility: hidden;\n  z-index: 2;\n  width: 250px;\n  background: #ebebeb;\n  position: absolute;\n  right: 0;\n  padding: 10px;\n}\n#modalCart[_ngcontent-%COMP%]   .modalcarts[_ngcontent-%COMP%] {\n  max-height: 200px;\n  overflow: hidden;\n  overflow-y: auto;\n}\n.btncart[_ngcontent-%COMP%] {\n  background: #47d6c9;\n  color: white;\n  border: 0;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBS2hCLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRTtpQkFDZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osU0FBUztFQUNULFlBQVk7QUFDZCIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydC1pdGVtIHtcbiAgcGFkZGluZzogMTFweCAxMHB4IDVweCA3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDEwMDBtcyBlYXNlLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMTAwMG1zIGVhc2Utb3V0O1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDEwMDBtcyBlYXNlLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDEwMDBtcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMDBtcyBlYXNlLW91dDtcbn1cbi5jYXJ0LWl0ZW0gLmltZy13cmFwIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWZmMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAtNjVweDtcbiAgbWFyZ2luLXRvcDogLTlweDtcbn1cbi5jYXJ0LWl0ZW0gLmltZy13cmFwIGltZyB7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5jYXJ0LWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTBweDtcbn1cbi5jYXJ0LWl0ZW0gc3BhbiB7XG4gIGNvbG9yOiAjMzkzYzQ1O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmNhcnQtaXRlbSBzdHJvbmcge1xuICBjb2xvcjogIzQ3ZDZjOTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNhcnQtaXRlbS1ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNDVweDtcbiAgYmFja2dyb3VuZDogI2VkZWZmMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAyMzBweDtcbn1cbi5jYXJ0LWl0ZW0gLmRlbGV0ZS1pdGVtIHtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzI0NTY1Ny9kZWxldGUtaXRlbS5wbmcpXG4gICAgMCAwIG5vLXJlcGVhdDtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbiNtb2RhbENhcnQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogMTBweDtcbn1cbiNtb2RhbENhcnQgLm1vZGFsY2FydHMge1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5idG5jYXJ0IHtcbiAgYmFja2dyb3VuZDogIzQ3ZDZjOTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css'],
            }]
    }], function () { return [{ type: src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_2__["MessengerService"] }, { type: src_app_services_cart_service_service__WEBPACK_IMPORTED_MODULE_1__["CartServiceService"] }]; }, null); })();


/***/ }),

/***/ "S40/":
/*!**************************************************************************!*\
  !*** ./src/app/components/shop/shop-category/shop-category.component.ts ***!
  \**************************************************************************/
/*! exports provided: ShopCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCategoryComponent", function() { return ShopCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/category.service */ "cPV5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ShopCategoryComponent_li_11_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subCategory_r4.name);
} }
function ShopCategoryComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopCategoryComponent_li_11_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.subCategoryClick(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShopCategoryComponent_li_11_li_4_Template, 3, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r1["subCategories"]);
} }
const _c0 = function (a0) { return [a0]; };
class ShopCategoryComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    ngOnInit() {
        this.getCategories(true);
        this.cateDropdownClass = 'cate-dropdown';
    }
    getCategories(isMain) {
        this.categoryService.getCategories(isMain).subscribe((data) => {
            this.categories = data;
        });
    }
    categoryClick() {
        if (this.cateDropdownClass === 'cate-dropdown')
            this.cateDropdownClass = 'cate-dropdown show';
        else
            this.cateDropdownClass = 'cate-dropdown';
    }
    subCategoryClick(i) {
        var element = document.getElementsByClassName('subcate-drowdown')[i];
        if (element.classList.contains('show'))
            element.classList.remove('show');
        else
            element.classList.add('show');
    }
}
ShopCategoryComponent.ɵfac = function ShopCategoryComponent_Factory(t) { return new (t || ShopCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"])); };
ShopCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopCategoryComponent, selectors: [["app-shop-category"]], decls: 19, vars: 4, consts: [[1, "hero", "hero-normal", 2, "margin-top", "130px"], [1, "container"], [1, "row"], [1, "col-lg-3"], ["role", "navigation"], [1, "cate-dropdown-base"], [3, "click"], [1, "fa", "fa-bars"], [3, "ngClass"], [3, "click", 4, "ngFor", "ngForOf"], [1, "col-lg-9"], [1, "hero__search"], [1, "hero__search__form"], ["action", "#"], ["type", "text", "placeholder", "What are you looking for?"], ["type", "submit", 1, "site-btn"], ["aria-label", "submenu", 1, "subcate-drowdown"], [4, "ngFor", "ngForOf"]], template: function ShopCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopCategoryComponent_Template_a_click_7_listener() { return ctx.categoryClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ShopCategoryComponent_li_11_Template, 5, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.cateDropdownClass));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["nav[_ngcontent-%COMP%] {\n  font-family: auto;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.cate-dropdown-base[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n.cate-dropdown-base[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #ffffff;\n  margin-right: 10px;\n}\n\nli[_ngcontent-%COMP%] {\n  background: #47d6c9;\n  color: #fff;\n  padding: 1rem;\n  transition-duration: 0.5s;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  display: none;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus-within {\n  border: 1px solid #fff;\n  cursor: pointer;\n}\n\n.cate-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 200;\n  width: 100%;\n  left: 0;\n}\n\n.cate-dropdown[_ngcontent-%COMP%], .subcate-drowdown[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.subcate-drowdown.show[_ngcontent-%COMP%], .cate-dropdown.show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.col-lg-3[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFDQTs7RUFFRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLE9BQU87QUFDVDs7QUFDQTs7RUFFRSx3QkFBd0I7QUFDMUI7O0FBQ0E7O0VBRUUseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzaG9wLWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICBmb250LWZhbWlseTogYXV0bztcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmNhdGUtZHJvcGRvd24tYmFzZSBhIHtcbiAgbWFyZ2luOiAxNXB4O1xufVxuLmNhdGUtZHJvcGRvd24tYmFzZSBpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxubGkge1xuICBiYWNrZ3JvdW5kOiAjNDdkNmM5O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMXJlbTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbn1cblxubGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG51bCBsaSB1bCB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG51bCBsaSB1bCBsaSB1bCB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbnVsIGxpIHVsIGxpIHVsIGxpOmhvdmVyLFxudWwgbGkgdWwgbGkgdWwgbGk6Zm9jdXMtd2l0aGluIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhdGUtZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDIwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG59XG4uY2F0ZS1kcm9wZG93bixcbi5zdWJjYXRlLWRyb3dkb3duIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLnN1YmNhdGUtZHJvd2Rvd24uc2hvdyxcbi5jYXRlLWRyb3Bkb3duLnNob3cge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLmNvbC1sZy0zIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shop-category',
                templateUrl: './shop-category.component.html',
                styleUrls: ['./shop-category.component.css'],
            }]
    }], function () { return [{ type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"] }]; }, null); })();


/***/ }),

/***/ "ShHM":
/*!**********************************************!*\
  !*** ./src/app/common/header-interceptor.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/do */ "92bn");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
// src/app/auth/token.interceptor.ts





class TokenInterceptor {
    constructor() {
    }
    intercept(request, next) {
        // use it in case of auth
        if (localStorage.getItem('user')) {
            const token = localStorage.getItem('token');
            request = request.clone({
                setHeaders: {
                    'Authorization': token,
                    'Accept': 'application/json'
                },
            });
        }
        else {
            request = request.clone({
                setHeaders: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
        }
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => {
            console.log(error);
            if (error.status === 401 || error.status === 403) {
                // handle error
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav/nav.component */ "D8Mh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'PurpleShopping';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 0, consts: [[1, "container-fluid", "d-flex", "justify-content-center", "align-items-center", "h-100", 2, "margin-top", "130px"], [1, "card", "p-3", "text-center", "py-4"], ["routerLink", "/signup", 1, "text-decoration-none"], [1, "mt-3", "px-3"], ["placeholder", "E-mail", 1, "form-control"], ["type", "password", "placeholder", "password", 1, "form-control"], [1, "mt-3", "d-grid", "px-3"], [1, "btn", "btn-block", "btn-bold", "btn-primary"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Don't Have and account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sign Up Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".card[_ngcontent-%COMP%] {\r\n    border: 0;\r\n    border-radius: 0px;\r\n    margin-bottom: 30px;\r\n    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.03);\r\n    transition: .5s\r\n}\r\n\r\n.padding[_ngcontent-%COMP%] {\r\n    padding: 3rem !important\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n    background-color: #f9f9fa\r\n}\r\n\r\nh5.card-title[_ngcontent-%COMP%] {\r\n    font-size: 15px\r\n}\r\n\r\n.fw-400[_ngcontent-%COMP%] {\r\n    font-weight: 400 !important\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n    font-family: Roboto, sans-serif;\r\n    font-weight: 300;\r\n    line-height: 1.5;\r\n    margin-bottom: 0;\r\n    padding: 15px 20px;\r\n    border-bottom: 1px solid rgba(77, 82, 89, 0.07)\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n    padding: 1.25rem\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n    border-color: #ebebeb;\r\n    border-radius: 2px;\r\n    color: #8b95a5;\r\n    padding: 5px 12px;\r\n    font-size: 14px;\r\n    line-height: inherit;\r\n    transition: 0.2s linear\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n    background-color: #33cabb;\r\n    border-color: #33cabb;\r\n    color: #fff\r\n}\r\n\r\n.btn-bold[_ngcontent-%COMP%] {\r\n    font-family: Roboto, sans-serif;\r\n    text-transform: uppercase;\r\n    font-weight: 500;\r\n    font-size: 12px\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n    background-color: #52d3c7;\r\n    border-color: #52d3c7;\r\n    color: #fff\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n    border-color: #83e0d7;\r\n    color: #4d5259;\r\n    box-shadow: 0 0 0 0.1rem rgba(51, 202, 187, 0.15)\r\n}\r\n\r\n.custom-radio[_ngcontent-%COMP%] {\r\n    cursor: pointer\r\n}\r\n\r\n.custom-control[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    min-width: 18px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUVuQix5Q0FBeUM7SUFFekM7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBRUE7SUFFSSxjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9CQUFvQjtJQUVwQjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFFZDtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUVJLGFBQWE7SUFDYjtBQUNKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNXM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNXNcclxufVxyXG5cclxuLnBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmYVxyXG59XHJcblxyXG5oNS5jYXJkLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweFxyXG59XHJcblxyXG4uZnctNDAwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudFxyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNzcsIDgyLCA4OSwgMC4wNylcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgICAtbXMtZmxleDogMSAxIGF1dG87XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIHBhZGRpbmc6IDEuMjVyZW1cclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbVxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ViZWJlYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGNvbG9yOiAjOGI5NWE1O1xyXG4gICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhclxyXG59XHJcblxyXG4uY2FyZC1ib2R5Pio6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwXHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNjYWJiO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMzNjYWJiO1xyXG4gICAgY29sb3I6ICNmZmZcclxufVxyXG5cclxuLmJ0bi1ib2xkIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweFxyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUyZDNjNztcclxuICAgIGJvcmRlci1jb2xvcjogIzUyZDNjNztcclxuICAgIGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODNlMGQ3O1xyXG4gICAgY29sb3I6ICM0ZDUyNTk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMXJlbSByZ2JhKDUxLCAyMDIsIDE4NywgMC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjFyZW0gcmdiYSg1MSwgMjAyLCAxODcsIDAuMTUpXHJcbn1cclxuXHJcbi5jdXN0b20tcmFkaW8ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4td2lkdGg6IDE4cHhcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XZ+d":
/*!*******************************************!*\
  !*** ./src/app/models/enums/Operation.ts ***!
  \*******************************************/
/*! exports provided: Operation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Operation", function() { return Operation; });
var Operation;
(function (Operation) {
    Operation[Operation["Default"] = 0] = "Default";
    Operation[Operation["Decreasing"] = 1] = "Decreasing";
    Operation[Operation["Increasing"] = 2] = "Increasing"; // Artam
})(Operation || (Operation = {}));


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initSettings, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSettings", function() { return initSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng5-slider */ "EsRS");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav/nav.component */ "D8Mh");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shop/shop.component */ "yD4g");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_shop_shop_category_shop_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shop/shop-category/shop-category.component */ "S40/");
/* harmony import */ var _components_home_home_product_home_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home-product/home-product.component */ "8omo");
/* harmony import */ var _components_home_home_category_home_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home-category/home-category.component */ "zoUy");
/* harmony import */ var _components_shop_shop_product_shop_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shop/shop-product/shop-product.component */ "0bxY");
/* harmony import */ var _components_shop_shop_product_pipes_shop_product_sort_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/shop/shop-product/pipes/shop-product-sort.pipe */ "mLgS");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/cart/cart.component */ "QWKc");
/* harmony import */ var _components_shop_shop_product_pipes_shop_product_orderby_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/shop/shop-product/pipes/shop-product-orderby.pipe */ "/aAm");
/* harmony import */ var _components_shop_shop_product_pipes_shop_product_filtercolor_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/shop/shop-product/pipes/shop-product-filtercolor.pipe */ "mHdj");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/settings.service */ "6nr9");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _helpers_local_storage_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./helpers/local-storage.utils */ "ZIep");
/* harmony import */ var _common_header_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common/header-interceptor */ "ShHM");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _services_cart_service_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/cart-service.service */ "tHQl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_cart_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/cart/car-list/car-list.component */ "gXBf");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "ukFw");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/signup/signup.component */ "5Ey6");































// Boot the endpoint file on init.
function initSettings(settingService) {
    return () => settingService.load();
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_helpers_local_storage_utils__WEBPACK_IMPORTED_MODULE_19__["LocalStorageUtils"], {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            useFactory: initSettings,
            deps: [_services_settings_service__WEBPACK_IMPORTED_MODULE_17__["SettingsService"]],
            multi: true
        }, {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _common_header_interceptor__WEBPACK_IMPORTED_MODULE_20__["TokenInterceptor"],
            multi: true
        },
        _services_cart_service_service__WEBPACK_IMPORTED_MODULE_23__["CartServiceService"]], imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ng5_slider__WEBPACK_IMPORTED_MODULE_3__["Ng5SliderModule"], _angular_http__WEBPACK_IMPORTED_MODULE_18__["HttpModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot()]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
        _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _components_shop_shop_category_shop_category_component__WEBPACK_IMPORTED_MODULE_9__["ShopCategoryComponent"],
        _components_home_home_product_home_product_component__WEBPACK_IMPORTED_MODULE_10__["HomeProductComponent"],
        _components_home_home_category_home_category_component__WEBPACK_IMPORTED_MODULE_11__["HomeCategoryComponent"],
        _components_shop_shop_product_shop_product_component__WEBPACK_IMPORTED_MODULE_12__["ShopProductComponent"],
        _components_shop_shop_product_pipes_shop_product_sort_pipe__WEBPACK_IMPORTED_MODULE_13__["ShopProductSortPipe"],
        _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"],
        _components_cart_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_25__["CarListComponent"],
        _components_shop_shop_product_pipes_shop_product_orderby_pipe__WEBPACK_IMPORTED_MODULE_15__["ShopProductOrderbyPipe"],
        _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_26__["AboutUsComponent"],
        _components_shop_shop_product_pipes_shop_product_filtercolor_pipe__WEBPACK_IMPORTED_MODULE_16__["ShopProductFiltercolorPipe"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"],
        _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_28__["SignupComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ng5_slider__WEBPACK_IMPORTED_MODULE_3__["Ng5SliderModule"], _angular_http__WEBPACK_IMPORTED_MODULE_18__["HttpModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                    _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _components_shop_shop_category_shop_category_component__WEBPACK_IMPORTED_MODULE_9__["ShopCategoryComponent"],
                    _components_home_home_product_home_product_component__WEBPACK_IMPORTED_MODULE_10__["HomeProductComponent"],
                    _components_home_home_category_home_category_component__WEBPACK_IMPORTED_MODULE_11__["HomeCategoryComponent"],
                    _components_shop_shop_product_shop_product_component__WEBPACK_IMPORTED_MODULE_12__["ShopProductComponent"],
                    _components_shop_shop_product_pipes_shop_product_sort_pipe__WEBPACK_IMPORTED_MODULE_13__["ShopProductSortPipe"],
                    _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"],
                    _components_cart_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_25__["CarListComponent"],
                    _components_shop_shop_product_pipes_shop_product_orderby_pipe__WEBPACK_IMPORTED_MODULE_15__["ShopProductOrderbyPipe"],
                    _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_26__["AboutUsComponent"],
                    _components_shop_shop_product_pipes_shop_product_filtercolor_pipe__WEBPACK_IMPORTED_MODULE_16__["ShopProductFiltercolorPipe"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"],
                    _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_28__["SignupComponent"],
                ],
                imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ng5_slider__WEBPACK_IMPORTED_MODULE_3__["Ng5SliderModule"], _angular_http__WEBPACK_IMPORTED_MODULE_18__["HttpModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot()],
                providers: [_helpers_local_storage_utils__WEBPACK_IMPORTED_MODULE_19__["LocalStorageUtils"], {
                        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                        useFactory: initSettings,
                        deps: [_services_settings_service__WEBPACK_IMPORTED_MODULE_17__["SettingsService"]],
                        multi: true
                    }, {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _common_header_interceptor__WEBPACK_IMPORTED_MODULE_20__["TokenInterceptor"],
                        multi: true
                    },
                    _services_cart_service_service__WEBPACK_IMPORTED_MODULE_23__["CartServiceService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZIep":
/*!************************************************!*\
  !*** ./src/app/helpers/local-storage.utils.ts ***!
  \************************************************/
/*! exports provided: LocalStorageUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageUtils", function() { return LocalStorageUtils; });
// It can be used in case of authentication implementation.
class LocalStorageUtils {
    static get isAuthenticated() {
        return !!LocalStorageUtils.LoggedUserData;
    }
    static get LoggedUserData() {
        try {
            return JSON.parse(localStorage.getItem('user'));
        }
        catch (e) {
            return null;
        }
    }
    static set LoggedUserData(data) {
        localStorage.setItem('user', JSON.stringify(data));
    }
    static get token() {
        try {
            return localStorage.getItem('token');
        }
        catch (e) {
            return null;
        }
    }
    static set token(data) {
        localStorage.setItem('token', data);
    }
    static RemoveUser() {
        localStorage.removeItem('user');
    }
}


/***/ }),

/***/ "cPV5":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common_http_caller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/http-caller */ "s2xa");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "6nr9");





class CategoryService {
    constructor(httpCaller, settingsService) {
        this.httpCaller = httpCaller;
        this.settingsService = settingsService;
    }
    getCategories(isMain) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(CategoryService.categorylist);
        // return isMain == null
        //   ? this.httpCaller
        //     .get(
        //       this.settingsService.data.categories,
        //       null,
        //       true,
        //       'There was an error while getting your data'
        //     )
        //     .map((response: Response) => {
        //       let result = response as any;
        //       return response as any;
        //     })
        //   : this.httpCaller
        //     .get(
        //       this.settingsService.data.categories + "?isMain=" + isMain,
        //       null,
        //       true,
        //       'There was an error while getting your data'
        //     )
        //     .map((response: Response) => {
        //       return response as any;
        //     });
    }
}
CategoryService.categorylist = [
    {
        id: 1,
        name: "Women",
        isMain: true,
        photo: "https://images.unsplash.com/photo-1599662875272-64de8289f6d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        upperCategoryId: null,
        upperCategories: null,
        className: "Women",
    },
    {
        id: 2,
        name: "Men",
        isMain: true,
        photo: "https://images.unsplash.com/photo-1599662875272-64de8289f6d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        upperCategoryId: null,
        upperCategories: null,
        className: "Men",
    },
    {
        id: 3,
        name: "Kids",
        isMain: true,
        photo: "https://images.unsplash.com/photo-1599662875272-64de8289f6d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBkcmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        upperCategoryId: null,
        upperCategories: null,
        className: "Women",
    },
];
CategoryService.ɵfac = function CategoryService_Factory(t) { return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_common_http_caller__WEBPACK_IMPORTED_MODULE_2__["HttpCaller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"])); };
CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryService, factory: CategoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _common_http_caller__WEBPACK_IMPORTED_MODULE_2__["HttpCaller"] }, { type: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "gXBf":
/*!****************************************************************!*\
  !*** ./src/app/components/cart/car-list/car-list.component.ts ***!
  \****************************************************************/
/*! exports provided: CarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListComponent", function() { return CarListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_cart_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart-service.service */ "tHQl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CarListComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.price);
} }
class CarListComponent {
    constructor(cartService, rout) {
        this.cartService = cartService;
        this.rout = rout;
        this.cartList = [];
        this.cartTotal = 0;
        this.shipping = 5;
    }
    ngOnInit() {
        this.loadCartItem();
        this.cartTotal = src_app_services_cart_service_service__WEBPACK_IMPORTED_MODULE_1__["CartServiceService"].cartTotal;
    }
    loadCartItem() {
        this.cartList = this.cartService.GetCartItems();
    }
    deleteProductToCart(product) {
        this.cartService.deleteProductToCart(product);
    }
    purchaseSuccess() {
        alert("Your Order has been Placed Successfully");
        this.rout.navigateByUrl('/home');
    }
}
CarListComponent.ɵfac = function CarListComponent_Factory(t) { return new (t || CarListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service_service__WEBPACK_IMPORTED_MODULE_1__["CartServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CarListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarListComponent, selectors: [["app-car-list"]], decls: 136, vars: 5, consts: [[1, "container-fluid", "my-5", 2, "margin-top", "130px !important"], [1, "row", "justify-content-center"], [1, "col-xl-10"], [1, "card", "shadow-lg"], [1, "row", "justify-content-around"], [1, "col-md-5"], [1, "card", "border-0"], [1, "card-header", "pb-0"], [1, "card-title", "space"], [1, "card-text", "text-muted", "mt-4", "space"], [1, "my-0"], [1, "card-body"], [1, "row", "no-gutters"], [1, "col-sm-6", "pr-sm-2"], [1, "form-group"], ["for", "fName", 1, "small", "text-muted", "mb-1"], ["type", "text", "name", "fName", "placeholder", "First Name", 1, "form-control", "form-control-sm"], [1, "col-sm-6"], ["for", "lName", 1, "small", "text-muted", "mb-1"], ["type", "text", "name", "lName", "placeholder", "Last Name", 1, "form-control", "form-control-sm"], ["type", "text", "name", "fName", "placeholder", "Phone No", 1, "form-control", "form-control-sm"], [1, "small", "text-muted", "mb-1"], [1, "form-control", "form-control-sm", 2, "margin", "0"], ["rows", "2", 1, "form-control", "form-control-sm"], [1, "row", "mt-4"], [1, "col"], [1, "text-muted", "mb-2"], [1, "mt-0"], ["for", "NAME", 1, "small", "text-muted", "mb-1"], ["type", "text", "name", "NAME", "id", "NAME", "aria-describedby", "helpId", "placeholder", "BBBootstrap Team", 1, "form-control", "form-control-sm"], ["type", "text", "name", "NAME", "id", "NAME", "aria-describedby", "helpId", "placeholder", "4534 5555 5555 5555", 1, "form-control", "form-control-sm"], ["type", "text", "name", "NAME", "id", "NAME", "aria-describedby", "helpId", "placeholder", "06/21", 1, "form-control", "form-control-sm"], ["type", "text", "name", "NAME", "id", "NAME", "aria-describedby", "helpId", "placeholder", "183", 1, "form-control", "form-control-sm"], [1, "row", "mb-md-5"], ["type", "button", "data-toggle", "modal", "data-target", "#myModal", 1, "btn", "btn-lg", "btn-block", "trigger"], [1, "card-header", "card-2"], [1, "card-text", "text-muted", "mt-md-4", "mb-2", "space"], [1, "small", "text-muted", "ml-2", "cursor-pointer"], [1, "my-2"], [1, "card-body", "pt-0"], ["class", "row justify-content-between", 4, "ngFor", "ngForOf"], [1, "row"], [1, "row", "justify-content-between"], [1, "col-4"], [1, "mb-1"], [1, "flex-sm-col", "col-auto"], [1, "row", "mb-5", "mt-4"], [1, "col-md-7", "col-lg-6", "mx-auto"], ["type", "button", 1, "btn", "btn-block", "btn-outline-primary", "btn-lg"], [1, "container"], ["data-backdrop", "static", "data-keyboard", "false", "id", "myModal", 1, "modal", 2, "margin-top", "130px"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title", 2, "text-align", "center"], [1, "modal-body"], [1, "text-center", "order-details"], [1, "d-flex", "justify-content-center", "mb-5", "flex-column", "align-items-center"], [1, "check1"], [1, "fa", "fa-check"], [1, "font-weight-bold"], [1, "mt-2"], [1, "modal-footer"], ["data-dismiss", "modal", "routerLink", "/home", 1, "btn", "btn-danger", "btn-block", "order-button"], [1, "col-auto", "col-md-7"], [1, "media", "flex-column", "flex-sm-row"], ["width", "62", "height", "62", 1, "img-fluid", 3, "src"], [1, "media-body", "my-auto"], [1, "col-auto"], [1, "mb-0"], [1, "pl-0", "flex-sm-col", "col-auto", "my-auto"], [1, "boxed-1"]], template: function CarListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "SHIPPING DETAILS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Phone No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Payment Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cash on Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Bank Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Enter Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "PAYMENT DETAILS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "hr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "NAME ON CARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "CARD NUMBER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "VALID THROUGH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "CVC CODE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "YOUR ORDER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "EDIT SHOPPING BAG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "hr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, CarListComponent_div_81_Template, 18, 4, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "hr", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "ADD GIFT CODE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h4", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Thank You For Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Order Has beeen Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "small", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "You'll receive your order in next few Working Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Continue Shoppping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" PURCHASE ", ctx.cartTotal + ctx.shipping, " $ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cartTotal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.shipping, " $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.cartTotal + ctx.shipping, " $");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["body[_ngcontent-%COMP%] {\r\n    background: linear-gradient(110deg, #BBDEFB 60%, #42A5F5 60%)\r\n}\r\n\r\n.shop[_ngcontent-%COMP%] {\r\n    font-size: 10px\r\n}\r\n\r\n.space[_ngcontent-%COMP%] {\r\n    letter-spacing: 0.8px !important\r\n}\r\n\r\n.second[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: rgb(92, 92, 92)\r\n}\r\n\r\n.active-2[_ngcontent-%COMP%] {\r\n    color: rgb(92, 92, 92)\r\n}\r\n\r\n.breadcrumb[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]:before {\r\n    content: \"\" !important\r\n}\r\n\r\n.breadcrumb[_ngcontent-%COMP%] {\r\n    padding: 0px;\r\n    font-size: 10px;\r\n    color: #aaa !important\r\n}\r\n\r\n.first[_ngcontent-%COMP%] {\r\n    background-color: white\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none !important;\r\n    color: #aaa\r\n}\r\n\r\n.btn-lg[_ngcontent-%COMP%], .form-control-sm[_ngcontent-%COMP%]:focus, .form-control-sm[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:active {\r\n    outline: none !important;\r\n    box-shadow: none !important\r\n}\r\n\r\n.form-control-sm[_ngcontent-%COMP%]:focus {\r\n    border: 1.5px solid #4bb8a9\r\n}\r\n\r\n.btn-group-lg[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%], .btn-lg[_ngcontent-%COMP%] {\r\n    padding: .5rem 0.1rem;\r\n    font-size: 1rem;\r\n    border-radius: 0;\r\n    color: white !important;\r\n    background-color: #4bb8a9;\r\n    height: 2.8rem !important;\r\n    border-radius: 0.2rem !important\r\n}\r\n\r\n.btn-group-lg[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%]:hover, .btn-lg[_ngcontent-%COMP%]:hover {\r\n    background-color: #26A69A\r\n}\r\n\r\n.btn-outline-primary[_ngcontent-%COMP%] {\r\n    background-color: #fff !important;\r\n    color: #4bb8a9 !important;\r\n    border-radius: 0.2rem !important;\r\n    border: 1px solid #4bb8a9\r\n}\r\n\r\n.btn-outline-primary[_ngcontent-%COMP%]:hover {\r\n    background-color: #4bb8a9 !important;\r\n    color: #fff !important;\r\n    border: 1px solid #4bb8a9\r\n}\r\n\r\n.card-2[_ngcontent-%COMP%] {\r\n    margin-top: 40px !important\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    border-bottom: 0px solid #aaaa !important\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n    font-size: 13px\r\n}\r\n\r\n.small[_ngcontent-%COMP%] {\r\n    font-size: 9px !important\r\n}\r\n\r\n.form-control-sm[_ngcontent-%COMP%] {\r\n    height: calc(2.2em + .5rem + 2px);\r\n    font-size: .875rem;\r\n    line-height: 1.5;\r\n    border-radius: 0\r\n}\r\n\r\n.cursor-pointer[_ngcontent-%COMP%] {\r\n    cursor: pointer\r\n}\r\n\r\n.boxed[_ngcontent-%COMP%] {\r\n    padding: 0px 8px 0 8px;\r\n    background-color: #4bb8a9;\r\n    color: white\r\n}\r\n\r\n.boxed-1[_ngcontent-%COMP%] {\r\n    padding: 0px 8px 0 8px;\r\n    color: black !important;\r\n    border: 1px solid #aaaa\r\n}\r\n\r\n.bell[_ngcontent-%COMP%] {\r\n    opacity: 0.5;\r\n    cursor: pointer\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%] {\r\n        padding-left: 0\r\n    }\r\n}\r\n\r\n\r\n\r\n.check1[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    background-color: #63d19e;\r\n    color: #fff;\r\n    font-size: 17px;\r\n    width: 60px;\r\n    height: 60px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 50%;\r\n    margin-bottom: 10px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDO0FBQ0o7O0FBRUE7Ozs7O0lBS0ksd0JBQXdCO0lBQ3hCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBOztJQUVJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7O0lBRUk7QUFDSjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDO0FBQ0o7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QjtBQUNKOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7QUFDSjs7QUFHQyxVQUFVOztBQUtYO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEI7QUFDSiIsImZpbGUiOiJjYXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTEwZGVnLCAjQkJERUZCIDYwJSwgIzQyQTVGNSA2MCUpXHJcbn1cclxuXHJcbi5zaG9wIHtcclxuICAgIGZvbnQtc2l6ZTogMTBweFxyXG59XHJcblxyXG4uc3BhY2Uge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4ICFpbXBvcnRhbnRcclxufVxyXG5cclxuLnNlY29uZCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiByZ2IoOTIsIDkyLCA5MilcclxufVxyXG5cclxuLmFjdGl2ZS0yIHtcclxuICAgIGNvbG9yOiByZ2IoOTIsIDkyLCA5MilcclxufVxyXG5cclxuLmJyZWFkY3J1bWI+bGkrbGk6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCIgIWltcG9ydGFudFxyXG59XHJcblxyXG4uYnJlYWRjcnVtYiB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogI2FhYSAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5maXJzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNhYWFcclxufVxyXG5cclxuLmJ0bi1sZyxcclxuLmZvcm0tY29udHJvbC1zbTpmb2N1cyxcclxuLmZvcm0tY29udHJvbC1zbTphY3RpdmUsXHJcbmE6Zm9jdXMsXHJcbmE6YWN0aXZlIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXNtOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgIzRiYjhhOVxyXG59XHJcblxyXG4uYnRuLWdyb3VwLWxnPi5idG4sXHJcbi5idG4tbGcge1xyXG4gICAgcGFkZGluZzogLjVyZW0gMC4xcmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjhhOTtcclxuICAgIGhlaWdodDogMi44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW0gIWltcG9ydGFudFxyXG59XHJcblxyXG4uYnRuLWdyb3VwLWxnPi5idG46aG92ZXIsXHJcbi5idG4tbGc6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2QTY5QVxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzRiYjhhOSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGJiOGE5XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YmI4YTkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNGJiOGE5XHJcbn1cclxuXHJcbi5jYXJkLTIge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkICNhYWFhICFpbXBvcnRhbnRcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXNpemU6IDEzcHhcclxufVxyXG5cclxuLnNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogOXB4ICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1zbSB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMi4yZW0gKyAuNXJlbSArIDJweCk7XHJcbiAgICBmb250LXNpemU6IC44NzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMFxyXG59XHJcblxyXG4uY3Vyc29yLXBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5ib3hlZCB7XHJcbiAgICBwYWRkaW5nOiAwcHggOHB4IDAgOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRiYjhhOTtcclxuICAgIGNvbG9yOiB3aGl0ZVxyXG59XHJcblxyXG4uYm94ZWQtMSB7XHJcbiAgICBwYWRkaW5nOiAwcHggOHB4IDAgOHB4O1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhYVxyXG59XHJcblxyXG4uYmVsbCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuYnJlYWRjcnVtYi1pdGVtKy5icmVhZGNydW1iLWl0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIC8qIE1PREFMICovXHJcblxyXG5cclxuXHJcblxyXG4uY2hlY2sxIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjNkMTllO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHhcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-car-list',
                templateUrl: './car-list.component.html',
                styleUrls: ['./car-list.component.scss']
            }]
    }], function () { return [{ type: src_app_services_cart_service_service__WEBPACK_IMPORTED_MODULE_1__["CartServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "mHdj":
/*!*************************************************************************************!*\
  !*** ./src/app/components/shop/shop-product/pipes/shop-product-filtercolor.pipe.ts ***!
  \*************************************************************************************/
/*! exports provided: ShopProductFiltercolorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopProductFiltercolorPipe", function() { return ShopProductFiltercolorPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ShopProductFiltercolorPipe {
    transform(value, colorName) {
        return colorName
            ? value.filter((p) => p.feature.colorName == colorName)
            : value;
    }
}
ShopProductFiltercolorPipe.ɵfac = function ShopProductFiltercolorPipe_Factory(t) { return new (t || ShopProductFiltercolorPipe)(); };
ShopProductFiltercolorPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shopProductFiltercolor", type: ShopProductFiltercolorPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopProductFiltercolorPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'shopProductFiltercolor',
            }]
    }], null, null); })();


/***/ }),

/***/ "mLgS":
/*!******************************************************************************!*\
  !*** ./src/app/components/shop/shop-product/pipes/shop-product-sort.pipe.ts ***!
  \******************************************************************************/
/*! exports provided: ShopProductSortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopProductSortPipe", function() { return ShopProductSortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ShopProductSortPipe {
    transform(value, minPrice, maxPrice) {
        if (minPrice == 0 && maxPrice == 0) {
            return value.filter((p) => p.id < 0);
        }
        minPrice = minPrice ? minPrice : 0;
        return maxPrice
            ? value
                ? value.filter((p) => p.feature.price >= minPrice && p.feature.price <= maxPrice)
                : value
            : value.filter((p) => p.feature.price >= minPrice);
    }
}
ShopProductSortPipe.ɵfac = function ShopProductSortPipe_Factory(t) { return new (t || ShopProductSortPipe)(); };
ShopProductSortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shopProductSort", type: ShopProductSortPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopProductSortPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'shopProductSort',
            }]
    }], null, null); })();


/***/ }),

/***/ "muQR":
/*!***********************************************!*\
  !*** ./src/app/services/messenger.service.ts ***!
  \***********************************************/
/*! exports provided: MessengerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerService", function() { return MessengerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class MessengerService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    sendMsg(product) {
        this.subject.next(product);
    }
    getMsg() {
        return this.subject.asObservable();
    }
}
MessengerService.ɵfac = function MessengerService_Factory(t) { return new (t || MessengerService)(); };
MessengerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessengerService, factory: MessengerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessengerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pO+s":
/*!***************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactUsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 28, vars: 0, consts: [[1, "container", "d-flex", "justify-content-center", 2, "margin-top", "130px"], [1, "row", "my-2", "mx-2"], [1, "col-md-6"], ["src", "https://png.pngtree.com/png-vector/20190725/ourlarge/pngtree-message-icon-design-vector-png-image_1587713.jpg", "alt", "IMG"], [1, "form-title"], [1, "justify", "text-muted"], [1, "form-group", "pt-2", "pl-1"], ["for", "exampleInputName"], ["type", "text", "id", "exampleInputName", 1, "form-control"], [1, "form-group", "pl-1"], ["for", "exampleInputEmail1"], ["type", "email", "id", "exampleInputEmail1", 1, "form-control"], ["for", "exampleFormControlTextarea1"], ["id", "exampleFormControlTextarea1", "rows", "5", 1, "form-control"], [1, "row"], [1, "col-md-3", "offset-md-9"], ["type", "submit", 1, "btn", "btn-primary"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Have an enquiry or would like to give us feedback?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Fill out the form below to contact our team.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Your name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Your email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Your message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    background: rgba(132, 155, 219, 0.5);\r\n    font-family: Arial, Helvetica, sans-serif\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    margin-top: 50px;\r\n    padding: 20px 20px 20px 20px;\r\n    box-sizing: border-box;\r\n    border-radius: 20px;\r\n    width: 945px\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n    padding-top: 110px;\r\n    padding-left: 50px;\r\n    width: 85%;\r\n    height: 80%\r\n}\r\n\r\n.text-muted[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n    font-weight: bold\r\n}\r\n\r\n.form-title[_ngcontent-%COMP%] {\r\n    font-weight: bold\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    font-weight: bold;\r\n    padding-left: 5px;\r\n    color: #828282\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n    border: none;\r\n    border-radius: 20px;\r\n    background: rgba(165, 147, 69, 0.075);\r\n    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.2)\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    font-size: 12px;\r\n    margin-top: 10px;\r\n    background-color: rgba(56, 147, 243, 0.67);\r\n    text-align: center;\r\n    border-radius: 5px\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%]:focus {\r\n    color: #495057;\r\n    border-color: #fff !important;\r\n    outline: 0;\r\n    box-shadow: 0 1px 1px 1px rgba(0, 123, 255, .25) !important\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9DQUFvQztJQUNwQztBQUNKOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQjtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Y7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFDQUFxQztJQUNyQztBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1Y7QUFDSiIsImZpbGUiOiJjb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTMyLCAxNTUsIDIxOSwgMC41KTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB3aWR0aDogOTQ1cHhcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDgwJVxyXG59XHJcblxyXG4udGV4dC1tdXRlZCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcblxyXG4uZm9ybS10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcblxyXG4uZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgY29sb3I6ICM4MjgyODJcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxNjUsIDE0NywgNjksIDAuMDc1KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMilcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCAxNDcsIDI0MywgMC42Nyk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAxcHggcmdiYSgwLCAxMjMsIDI1NSwgLjI1KSAhaW1wb3J0YW50XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-us',
                templateUrl: './contact-us.component.html',
                styleUrls: ['./contact-us.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "s2xa":
/*!***************************************!*\
  !*** ./src/app/common/http-caller.ts ***!
  \***************************************/
/*! exports provided: HttpCaller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCaller", function() { return HttpCaller; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_add_operator_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/finally */ "LRe8");
/* harmony import */ var rxjs_add_operator_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators/catchError */ "rNzc");
/* harmony import */ var rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CustomEncoder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomEncoder */ "NRS+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "5eHb");












class HttpCaller {
    constructor(http, notificationsService) {
        this.http = http;
        this.notificationsService = notificationsService;
        this.isLoaderShown = false;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseURL;
    }
    //send params as shown in below commented code
    //let Params = = new HttpParams().append('firstParameter', "test").append('secondParameter', "test2");
    postImage(url, params, body, hasLoading = true, errorMessage = "", httpHeaders) {
        if (hasLoading) {
            // this.notificationService.loading('Loading');
        }
        if (params) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]({
                encoder: new _CustomEncoder__WEBPACK_IMPORTED_MODULE_7__["CustomEncoder"](),
                fromString: params.toString()
            });
        }
        // if (httpHeaders) {
        //   httpHeaders = new HttpHeaders({
        //   });
        // }
        return this.http
            .post(this.baseUrl + url, body, { headers: { 'User-Agent': 'image' }, params: params })
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6__["catchError"])(err => this.handleError(err)))
            .finally(() => { });
    }
    post(url, params, body, hasLoading = true, errorMessage = "") {
        if (hasLoading) {
            // this.showLoader();
        }
        if (params) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]({
                encoder: new _CustomEncoder__WEBPACK_IMPORTED_MODULE_7__["CustomEncoder"](),
                fromString: params.toString()
            });
        }
        return this.http
            .post(this.baseUrl + url, body, { params: params })
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6__["catchError"])(err => this.handleError(err)));
        // .finally(() => this.hideLoader());
    }
    downloadFile(url, params, body, hasLoading = true, errorMessage = "") {
        if (hasLoading) {
            // this.showLoader();
        }
        if (params) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]({
                encoder: new _CustomEncoder__WEBPACK_IMPORTED_MODULE_7__["CustomEncoder"](),
                fromString: params.toString()
            });
        }
        return this.http
            .post(this.baseUrl + url, body, { params: params, observe: 'response', responseType: 'blob' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((result) => {
            console.log("HERE");
            return result.body;
        }));
        // .finally(() => this.hideLoader());
    }
    put(url, params, body, hasLoading = true, errorMessage = "") {
        if (hasLoading) {
            // this.showLoader();
        }
        if (params) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]({
                encoder: new _CustomEncoder__WEBPACK_IMPORTED_MODULE_7__["CustomEncoder"](),
                fromString: params.toString()
            });
        }
        return this.http
            .put(this.baseUrl + url, body, { params: params })
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6__["catchError"])(err => this.handleError(err)));
        // .finally(() => this.hideLoader());
    }
    delete(url, params, body, hasLoading = true, errorMessage = "") {
        if (hasLoading) {
            // this.showLoader();
        }
        if (params) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]({
                encoder: new _CustomEncoder__WEBPACK_IMPORTED_MODULE_7__["CustomEncoder"](),
                fromString: params.toString()
            });
        }
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ "Content-Type": "application/json" }),
            body: body,
            params: params
        };
        return this.http
            .delete(this.baseUrl + url, httpOptions)
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6__["catchError"])(err => this.handleError(err)));
        // .finally(() => this.hideLoader());
    }
    get(url, params, hasLoading = true, errorMessage = "") {
        if (hasLoading) {
            // this.showLoader();
        }
        if (params) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]({
                encoder: new _CustomEncoder__WEBPACK_IMPORTED_MODULE_7__["CustomEncoder"](),
                fromString: params.toString()
            });
        }
        return this.http
            .get(this.baseUrl + url, { params: params })
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6__["catchError"])(err => this.handleError(err)));
        // .finally(() => this.hideLoader());
    }
    getSingle(url, params, hasLoading = true, errorMessage = "") {
        if (hasLoading) {
            // this.showLoader();
        }
        if (params) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]({
                encoder: new _CustomEncoder__WEBPACK_IMPORTED_MODULE_7__["CustomEncoder"](),
                fromString: params.toString()
            });
        }
        return this.http
            .get(url, { params: params })
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6__["catchError"])(err => this.handleError(err)));
        // .finally(() => this.hideLoader());
    }
    getStream(url, params, hasLoading = true, errorMessage = "") {
        if (hasLoading) {
            // this.showLoader();
        }
        if (params) {
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]({
                encoder: new _CustomEncoder__WEBPACK_IMPORTED_MODULE_7__["CustomEncoder"](),
                fromString: params.toString()
            });
        }
        return this.http
            .get(this.baseUrl + url, { params: params, observe: 'body', responseType: 'json' })
            .pipe(Object(rxjs_internal_operators_catchError__WEBPACK_IMPORTED_MODULE_6__["catchError"])(err => this.handleError(err)));
        // .finally(() => this.hideLoader());
    }
    handleError(error) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_3__["Response"]) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errMsg);
    }
}
HttpCaller.ɵfac = function HttpCaller_Factory(t) { return new (t || HttpCaller)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"])); };
HttpCaller.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpCaller, factory: HttpCaller.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpCaller, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "tHQl":
/*!**************************************************!*\
  !*** ./src/app/services/cart-service.service.ts ***!
  \**************************************************/
/*! exports provided: CartServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartServiceService", function() { return CartServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CartServiceService {
    constructor() { }
    GetCartItems() {
        return CartServiceService.carts;
    }
    addProductToCart(product) {
        const productExits = this.isAddedProductToCart(product.id);
        if (!productExits) {
            CartServiceService.carts.push({
                productId: product.id,
                productName: product.name,
                qty: 1,
                image: product.productImages[0].url,
                price: product.feature.price,
            });
        }
        CartServiceService.cartTotal = CartServiceService.cartTotal + product.feature.price;
    }
    deleteProductToCart(product) {
        const index = CartServiceService.carts.indexOf(product);
        if (index > -1) {
            CartServiceService.carts.splice(index, 1);
            CartServiceService.cartTotal = CartServiceService.cartTotal - product.price * product.qty;
        }
    }
    isAddedProductToCart(productId) {
        for (let i in CartServiceService.carts) {
            if (CartServiceService.carts[i].productId == productId) {
                CartServiceService.carts[i].qty++;
                return true;
            }
        }
        return false;
    }
}
CartServiceService.carts = [];
CartServiceService.cartTotal = 0;
CartServiceService.ɵfac = function CartServiceService_Factory(t) { return new (t || CartServiceService)(); };
CartServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartServiceService, factory: CartServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ukFw":
/*!***********************************************************!*\
  !*** ./src/app/components/about-us/about-us.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 13, vars: 0, consts: [[1, "home-info-grey", 2, "margin-top", "130px"], [1, "container"], [1, "row"], [1, "col-md-7"], [1, "col-md-5", "drop-cap-text"], [1, "drop-cap"], [1, "drop-cap-letter"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "What We Believe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " re you look to expand It is a long established fact that a reader will be distracte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    background-color: #f1f1f2\r\n}\r\n\r\n.home-info-grey[_ngcontent-%COMP%] {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: #f1f1f2\r\n}\r\n\r\n.home-info-grey[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    color: var(--black);\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n    font-style: italic\r\n}\r\n\r\n.home-info-grey[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    color: #626163;\r\n    font-weight: 500;\r\n    font-size: 16px\r\n}\r\n\r\n.drop-cap[_ngcontent-%COMP%] {\r\n    margin-right: 25px;\r\n    float: left;\r\n    text-align: center;\r\n    line-height: 1;\r\n    font-size: 50px\r\n}\r\n\r\n.drop-cap-letter[_ngcontent-%COMP%] {\r\n    color: #ff8700;\r\n    font-size: 90px;\r\n    font-weight: 700\r\n}\r\n\r\n.drop-cap-text[_ngcontent-%COMP%] {\r\n    color: #231833;\r\n    font-size: 34px;\r\n    font-weight: 500\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZDtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZjtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZjtBQUNKIiwiZmlsZSI6ImFib3V0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjJcclxufVxyXG5cclxuLmhvbWUtaW5mby1ncmV5IHtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYyXHJcbn1cclxuXHJcbi5ob21lLWluZm8tZ3JleSBoMiB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhY2spO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpY1xyXG59XHJcblxyXG4uaG9tZS1pbmZvLWdyZXkgcCB7XHJcbiAgICBjb2xvcjogIzYyNjE2MztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHhcclxufVxyXG5cclxuLmRyb3AtY2FwIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBmb250LXNpemU6IDUwcHhcclxufVxyXG5cclxuLmRyb3AtY2FwLWxldHRlciB7XHJcbiAgICBjb2xvcjogI2ZmODcwMDtcclxuICAgIGZvbnQtc2l6ZTogOTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDBcclxufVxyXG5cclxuLmRyb3AtY2FwLXRleHQge1xyXG4gICAgY29sb3I6ICMyMzE4MzM7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about-us/about-us.component */ "ukFw");
/* harmony import */ var _components_cart_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cart/car-list/car-list.component */ "gXBf");
/* harmony import */ var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact-us/contact-us.component */ "pO+s");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shop/shop.component */ "yD4g");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/signup/signup.component */ "5Ey6");











const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'products/category/:categoryId', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'shop', component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"] },
    { path: 'cart-list', component: _components_cart_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_3__["CarListComponent"] },
    { path: 'about', component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] },
    { path: 'contact', component: _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"] },
    { path: 'shop/category/:categoryId', component: _components_shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"] },
    { path: '**', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "yD4g":
/*!***************************************************!*\
  !*** ./src/app/components/shop/shop.component.ts ***!
  \***************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shop_category_shop_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop-category/shop-category.component */ "S40/");
/* harmony import */ var _shop_product_shop_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop-product/shop-product.component */ "0bxY");




class ShopComponent {
    constructor() { }
    ngOnInit() { }
}
ShopComponent.ɵfac = function ShopComponent_Factory(t) { return new (t || ShopComponent)(); };
ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopComponent, selectors: [["app-shop"]], decls: 2, vars: 0, template: function ShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-shop-category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-shop-product");
    } }, directives: [_shop_category_shop_category_component__WEBPACK_IMPORTED_MODULE_1__["ShopCategoryComponent"], _shop_product_shop_product_component__WEBPACK_IMPORTED_MODULE_2__["ShopProductComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shop',
                templateUrl: './shop.component.html',
                styleUrls: ['./shop.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zoUy":
/*!**************************************************************************!*\
  !*** ./src/app/components/home/home-category/home-category.component.ts ***!
  \**************************************************************************/
/*! exports provided: HomeCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeCategoryComponent", function() { return HomeCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/category.service */ "cPV5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function HomeCategoryComponent_li_11_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subCategory_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](subCategory_r5.name);
} }
function HomeCategoryComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeCategoryComponent_li_11_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.subCategoryClick(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeCategoryComponent_li_11_li_4_Template, 3, 1, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", category_r2["subCategories"]);
} }
function HomeCategoryComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "url(" + category_r8.photo + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/shop/category/", category_r8.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r8.name);
} }
const _c0 = function (a0) { return [a0]; };
class HomeCategoryComponent {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    ngOnInit() {
        this.getCategories(true);
        this.cateDropdownClass = 'cate-dropdown show';
    }
    getCategories(isMain) {
        this.categoryService.getCategories(isMain).subscribe((data) => {
            this.categories = data;
        });
    }
    categoryClick() {
        if (this.cateDropdownClass === 'cate-dropdown')
            this.cateDropdownClass = 'cate-dropdown show';
        else
            this.cateDropdownClass = 'cate-dropdown';
    }
    subCategoryClick(i) {
        var element = document.getElementsByClassName('subcate-drowdown')[i];
        if (element.classList.contains('show'))
            element.classList.remove('show');
        else
            element.classList.add('show');
    }
}
HomeCategoryComponent.ɵfac = function HomeCategoryComponent_Factory(t) { return new (t || HomeCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"])); };
HomeCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeCategoryComponent, selectors: [["app-home-category"]], decls: 32, vars: 5, consts: [[1, "hero", 2, "margin-top", "130px"], [1, "container"], [1, "row"], [1, "col-lg-3"], ["role", "navigation"], [1, "cate-dropdown-base"], [3, "click"], [1, "fa", "fa-bars"], [3, "ngClass"], [3, "click", 4, "ngFor", "ngForOf"], [1, "col-lg-9"], [1, "hero__search"], [1, "hero__search__form"], ["action", "#"], ["type", "text", "placeholder", "What do yo u need?"], ["type", "submit", 1, "site-btn"], ["data-setbg", "assets/img/hero/banner.png", 1, "hero__item", "set-bg", 2, "background-image", "url('assets/img/banner3.png')"], [1, "hero__text"], ["routerLink", "/shop", 1, "primary-btn"], [1, "categories"], [1, "slider"], ["class", "slide", "id", "slide-1", 4, "ngFor", "ngForOf"], ["aria-label", "submenu", 1, "subcate-drowdown"], [4, "ngFor", "ngForOf"], ["id", "slide-1", 1, "slide"], [1, "categories__item", "set-bg"], [3, "routerLink"]], template: function HomeCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeCategoryComponent_Template_a_click_7_listener() { return ctx.categoryClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeCategoryComponent_li_11_Template, 5, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Purple E-Commerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Purple Ecommerce ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Click Shop Now to Get Exciting New Brands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Shop Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HomeCategoryComponent_div_31_Template, 5, 4, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.cateDropdownClass));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["nav[_ngcontent-%COMP%] {\n  font-family: auto;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.cate-dropdown-base[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n.cate-dropdown-base[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #ffffff;\n  margin-right: 10px;\n}\n\nli[_ngcontent-%COMP%] {\n  background: #47d6c9;\n  color: #fff;\n  padding: 1rem;\n  transition-duration: 0.5s;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  display: none;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus-within {\n  border: 1px solid #fff;\n  cursor: pointer;\n}\n\n.cate-dropdown[_ngcontent-%COMP%], .subcate-drowdown[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.subcate-drowdown.show[_ngcontent-%COMP%], .cate-dropdown.show[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.col-lg-3[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.slider[_ngcontent-%COMP%] {\n  display: block;\n  touch-action: manipulation;\n  \n  transition: all 1.2s ease 0s;\n}\n\n.slide[_ngcontent-%COMP%] {\n  width: 250px;\n  flex-shrink: 0;\n  height: 100%;\n  margin: 30px;\n  display: inline-block;\n}\n\n.categories[_ngcontent-%COMP%] {\n  padding-top: 80px;\n  padding-bottom: 40px;\n}\n\n.categories[_ngcontent-%COMP%]::before {\n  height: 20px;\n  background: gray;\n}\n\n.categories[_ngcontent-%COMP%]::after {\n  height: 20px;\n  background: gray;\n}\n\n.categories__item[_ngcontent-%COMP%] {\n  height: 250px;\n  position: relative;\n}\n\n.md-12[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.md-3[_ngcontent-%COMP%] {\n  width: 33.33%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFDQTs7RUFFRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFDQTs7RUFFRSx3QkFBd0I7QUFDMUI7O0FBQ0E7O0VBRUUseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsK0NBQStDO0VBQy9DLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6ImhvbWUtY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gIGZvbnQtZmFtaWx5OiBhdXRvO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uY2F0ZS1kcm9wZG93bi1iYXNlIGEge1xuICBtYXJnaW46IDE1cHg7XG59XG4uY2F0ZS1kcm9wZG93bi1iYXNlIGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5saSB7XG4gIGJhY2tncm91bmQ6ICM0N2Q2Yzk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xufVxuXG5saSBhIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbnVsIGxpIHVsIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbnVsIGxpIHVsIGxpIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxudWwgbGkgdWwgbGkgdWwgbGk6aG92ZXIsXG51bCBsaSB1bCBsaSB1bCBsaTpmb2N1cy13aXRoaW4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2F0ZS1kcm9wZG93bixcbi5zdWJjYXRlLWRyb3dkb3duIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLnN1YmNhdGUtZHJvd2Rvd24uc2hvdyxcbi5jYXRlLWRyb3Bkb3duLnNob3cge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuLmNvbC1sZy0zIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbi5zbGlkZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE0NjJweCwgMHB4LCAwcHgpOyAqL1xuICB0cmFuc2l0aW9uOiBhbGwgMS4ycyBlYXNlIDBzO1xufVxuLnNsaWRlIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jYXRlZ29yaWVzIHtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuLmNhdGVnb3JpZXM6OmJlZm9yZSB7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogZ3JheTtcbn1cbi5jYXRlZ29yaWVzOjphZnRlciB7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogZ3JheTtcbn1cbi5jYXRlZ29yaWVzX19pdGVtIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1kLTEyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWQtMyB7XG4gIHdpZHRoOiAzMy4zMyU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-category',
                templateUrl: './home-category.component.html',
                styleUrls: ['./home-category.component.css'],
            }]
    }], function () { return [{ type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"] }]; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map