(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_docentes_cuenta-docente_cuenta-docente_module_ts"],{

/***/ 615:
/*!**************************************************************************!*\
  !*** ./src/app/docentes/cuenta-docente/cuenta-docente-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentaDocentePageRoutingModule": () => (/* binding */ CuentaDocentePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _cuenta_docente_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuenta-docente.page */ 9877);




const routes = [
    {
        path: '',
        component: _cuenta_docente_page__WEBPACK_IMPORTED_MODULE_0__.CuentaDocentePage,
    },
];
let CuentaDocentePageRoutingModule = class CuentaDocentePageRoutingModule {
};
CuentaDocentePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CuentaDocentePageRoutingModule);



/***/ }),

/***/ 1919:
/*!******************************************************************!*\
  !*** ./src/app/docentes/cuenta-docente/cuenta-docente.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentaDocentePageModule": () => (/* binding */ CuentaDocentePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _cuenta_docente_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cuenta-docente-routing.module */ 615);
/* harmony import */ var _cuenta_docente_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuenta-docente.page */ 9877);







let CuentaDocentePageModule = class CuentaDocentePageModule {
};
CuentaDocentePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cuenta_docente_routing_module__WEBPACK_IMPORTED_MODULE_0__.CuentaDocentePageRoutingModule,
        ],
        declarations: [_cuenta_docente_page__WEBPACK_IMPORTED_MODULE_1__.CuentaDocentePage],
    })
], CuentaDocentePageModule);



/***/ }),

/***/ 9877:
/*!****************************************************************!*\
  !*** ./src/app/docentes/cuenta-docente/cuenta-docente.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuentaDocentePage": () => (/* binding */ CuentaDocentePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_cuenta_docente_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cuenta-docente.page.html */ 8609);
/* harmony import */ var _cuenta_docente_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cuenta-docente.page.scss */ 8149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let CuentaDocentePage = class CuentaDocentePage {
    constructor() { }
    ngOnInit() {
    }
};
CuentaDocentePage.ctorParameters = () => [];
CuentaDocentePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cuenta-docente',
        template: _raw_loader_cuenta_docente_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cuenta_docente_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CuentaDocentePage);



/***/ }),

/***/ 8149:
/*!******************************************************************!*\
  !*** ./src/app/docentes/cuenta-docente/cuenta-docente.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".botonRegresar {\n  margin-top: 40px !important;\n  margin-left: 40px !important;\n}\n\n.contenedorBotones {\n  display: flex;\n  justify-content: center !important;\n  flex-direction: column !important;\n  margin-top: 30px !important;\n}\n\n.iconoOpcion {\n  margin-right: 10px !important;\n  height: 20px;\n  width: 20px;\n}\n\n.botonesCuenta {\n  margin-top: 30px !important;\n  margin-bottom: 30px !important;\n  height: 50px !important;\n  --background: #c9c9c9 !important;\n  color: black !important;\n}\n\n#botonSalir {\n  --background: #eb5454 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1ZW50YS1kb2NlbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdDQUFBO0FBQ0oiLCJmaWxlIjoiY3VlbnRhLWRvY2VudGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdG9uUmVncmVzYXJ7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGVuZWRvckJvdG9uZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmljb25vT3BjaW9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLmJvdG9uZXNDdWVudGF7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogI2M5YzljOSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNib3RvblNhbGlye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAgI2ViNTQ1NCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ 8609:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docentes/cuenta-docente/cuenta-docente.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Cuenta\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Cuenta</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-button shape=\"round\" class=\"botonRegresar\" routerLink=\"../inicio\">Regresar a Inicio</ion-button>\r\n\r\n  <div class=\"contenedorBotones\">\r\n    <ion-button expand=\"block\" shape=\"round\" class=\"botonesCuenta\" href=\"#\"><ion-icon class=\"iconoOpcion\" name=\"lock-closed-outline\"></ion-icon>   Solicitar cambio de contraseña</ion-button>\r\n    <ion-button expand=\"block\" shape=\"round\" class=\"botonesCuenta\" href=\"#\"><ion-icon class=\"iconoOpcion\" name=\"notifications-outline\"></ion-icon>    Ajuste de notificaciones</ion-button>\r\n    <ion-button expand=\"block\" shape=\"round\" class=\"botonesCuenta\" href=\"http://localhost:4200/Login/\" id=\"botonSalir\"><ion-icon class=\"iconoOpcion\" name=\"exit-outline\"></ion-icon>   Cerrar sesion</ion-button>\r\n  </div>\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_docentes_cuenta-docente_cuenta-docente_module_ts.js.map