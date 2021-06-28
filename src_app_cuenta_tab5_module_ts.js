(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_cuenta_tab5_module_ts"],{

/***/ 2333:
/*!***********************************************!*\
  !*** ./src/app/cuenta/tab5-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5PageRoutingModule": () => (/* binding */ Tab5PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5.page */ 8994);




const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page,
    },
];
let Tab5PageRoutingModule = class Tab5PageRoutingModule {
};
Tab5PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab5PageRoutingModule);



/***/ }),

/***/ 3660:
/*!***************************************!*\
  !*** ./src/app/cuenta/tab5.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5PageModule": () => (/* binding */ Tab5PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab5.page */ 8994);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab5-routing.module */ 2333);









let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page }]),
            _tab5_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab5PageRoutingModule,
        ],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page],
    })
], Tab5PageModule);



/***/ }),

/***/ 8994:
/*!*************************************!*\
  !*** ./src/app/cuenta/tab5.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab5Page": () => (/* binding */ Tab5Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab5.page.html */ 884);
/* harmony import */ var _tab5_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab5.page.scss */ 1952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let Tab5Page = class Tab5Page {
    constructor() { }
};
Tab5Page.ctorParameters = () => [];
Tab5Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab5',
        template: _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab5_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab5Page);



/***/ }),

/***/ 1952:
/*!***************************************!*\
  !*** ./src/app/cuenta/tab5.page.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".botonRegresar {\n  margin-top: 40px !important;\n  margin-left: 40px !important;\n}\n\n.contenedorBotones {\n  display: flex;\n  justify-content: center !important;\n  flex-direction: column !important;\n  margin-top: 30px !important;\n}\n\n.iconoOpcion {\n  margin-right: 10px !important;\n  height: 20px;\n  width: 20px;\n}\n\n.botonesCuenta {\n  margin-top: 30px !important;\n  margin-bottom: 30px !important;\n  height: 50px !important;\n  --background: #c9c9c9 !important;\n  color: black !important;\n}\n\n#botonSalir {\n  --background: #eb5454 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7QUFDSiIsImZpbGUiOiJ0YWI1LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3RvblJlZ3Jlc2Fye1xyXG4gICAgbWFyZ2luLXRvcDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRlbmVkb3JCb3RvbmVze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29ub09wY2lvbntcclxuICAgIG1hcmdpbi1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5ib3RvbmVzQ3VlbnRhe1xyXG4gICAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNjOWM5YzkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jYm90b25TYWxpcntcclxuICAgIC0tYmFja2dyb3VuZDogICNlYjU0NTQgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ 884:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cuenta/tab5.page.html ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Cuenta\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Cuenta</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-button shape=\"round\" class=\"botonRegresar\" routerLink=\"../inicio\">Regresar a Inicio</ion-button>\r\n\r\n  <div class=\"contenedorBotones\">\r\n    <ion-button expand=\"block\" shape=\"round\" class=\"botonesCuenta\" href=\"#\"><ion-icon class=\"iconoOpcion\" name=\"lock-closed-outline\"></ion-icon>   Solicitar cambio de contraseña</ion-button>\r\n    <ion-button expand=\"block\" shape=\"round\" class=\"botonesCuenta\" href=\"#\"><ion-icon class=\"iconoOpcion\" name=\"notifications-outline\"></ion-icon>    Ajuste de notificaciones</ion-button>\r\n    <ion-button expand=\"block\" shape=\"round\" class=\"botonesCuenta\" href=\"http://localhost:4200/Login/\" id=\"botonSalir\"><ion-icon class=\"iconoOpcion\" name=\"exit-outline\"></ion-icon>   Cerrar sesion</ion-button>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_cuenta_tab5_module_ts.js.map