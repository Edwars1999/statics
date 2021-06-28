(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_docentes_grupos_grupos_module_ts"],{

/***/ 5296:
/*!**********************************************************!*\
  !*** ./src/app/docentes/grupos/grupos-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GruposPageRoutingModule": () => (/* binding */ GruposPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _grupos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grupos.page */ 9775);




const routes = [
    {
        path: '',
        component: _grupos_page__WEBPACK_IMPORTED_MODULE_0__.GruposPage,
    },
];
let GruposPageRoutingModule = class GruposPageRoutingModule {
};
GruposPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GruposPageRoutingModule);



/***/ }),

/***/ 6546:
/*!**************************************************!*\
  !*** ./src/app/docentes/grupos/grupos.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GruposPageModule": () => (/* binding */ GruposPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _grupos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grupos-routing.module */ 5296);
/* harmony import */ var _grupos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grupos.page */ 9775);







let GruposPageModule = class GruposPageModule {
};
GruposPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _grupos_routing_module__WEBPACK_IMPORTED_MODULE_0__.GruposPageRoutingModule,
        ],
        declarations: [_grupos_page__WEBPACK_IMPORTED_MODULE_1__.GruposPage],
    })
], GruposPageModule);



/***/ }),

/***/ 9775:
/*!************************************************!*\
  !*** ./src/app/docentes/grupos/grupos.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GruposPage": () => (/* binding */ GruposPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_grupos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./grupos.page.html */ 3444);
/* harmony import */ var _grupos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grupos.page.scss */ 4360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let GruposPage = class GruposPage {
    constructor() { }
    ngOnInit() {
    }
};
GruposPage.ctorParameters = () => [];
GruposPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-grupos',
        template: _raw_loader_grupos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_grupos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GruposPage);



/***/ }),

/***/ 4360:
/*!**************************************************!*\
  !*** ./src/app/docentes/grupos/grupos.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#titulo {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdydXBvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtBQUNEIiwiZmlsZSI6ImdydXBvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0dWxve1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ 3444:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docentes/grupos/grupos.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Grupos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding >\r\n  \r\n  <div class='ion-padding'>\r\n    <h2 id=\"titulo\"> LENGUA EXTRANJERA</h2>\r\n  </div>\r\n\r\n  <ion-grid padding > \r\n    <ion-row style='text-align: center;'>\r\n      <ion-col col-sm=12>\r\n        <ion-button><ion-icon name=\"people-outline\"></ion-icon>Conjunto de Grupos</ion-button>\r\n      </ion-col>\r\n      <ion-col col-sm=12>\r\n        <ion-button><ion-icon name=\"add-circle-outline\"></ion-icon>Grupos</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <section >\r\n      <p id=\"titulo\">Aún no hay grupos creados</p>\r\n  </section>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_docentes_grupos_grupos_module_ts.js.map