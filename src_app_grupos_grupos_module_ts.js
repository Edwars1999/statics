(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_grupos_grupos_module_ts"],{

/***/ 1756:
/*!*************************************************!*\
  !*** ./src/app/grupos/grupos-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GruposPageRoutingModule": () => (/* binding */ GruposPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _grupos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grupos.page */ 6293);




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

/***/ 9755:
/*!*****************************************!*\
  !*** ./src/app/grupos/grupos.module.ts ***!
  \*****************************************/
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
/* harmony import */ var _grupos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grupos-routing.module */ 1756);
/* harmony import */ var _grupos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grupos.page */ 6293);







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

/***/ 6293:
/*!***************************************!*\
  !*** ./src/app/grupos/grupos.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GruposPage": () => (/* binding */ GruposPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_grupos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./grupos.page.html */ 6393);
/* harmony import */ var _grupos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grupos.page.scss */ 7670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);





let GruposPage = class GruposPage {
    constructor(toastController) {
        this.toastController = toastController;
    }
    avisoUnion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Te has unido al grupo',
                duration: 2000,
            });
            toast.present();
        });
    }
};
GruposPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController }
];
GruposPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-grupos',
        template: _raw_loader_grupos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_grupos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GruposPage);



/***/ }),

/***/ 7670:
/*!*****************************************!*\
  !*** ./src/app/grupos/grupos.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".listaGrupos {\n  margin-top: 20px !important;\n}\n\n.botonUnirse {\n  --background: #51c86e !important;\n  width: 90px !important;\n}\n\n.elementosGrupo {\n  display: flex !important;\n  flex-direction: column !important;\n}\n\n.textoGrupo {\n  font-size: 14px !important;\n}\n\n.padingGrupos {\n  margin-top: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdydXBvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksd0JBQUE7RUFDQSxpQ0FBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0FBQ0oiLCJmaWxlIjoiZ3J1cG9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0YUdydXBvc3tcclxuICAgIG1hcmdpbi10b3A6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvdG9uVW5pcnNle1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAgIzUxYzg2ZSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVsZW1lbnRvc0dydXBve1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dG9HcnVwb3tcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFkaW5nR3J1cG9ze1xyXG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ 6393:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grupos/grupos.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Grupos de Materia</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list class=\"listaGrupos\">\r\n    <ion-list-header>Grupos de trabajo</ion-list-header>\r\n      <ion-item class=\"padingGrupos\">\r\n        <div class=\"elementosGrupo\">\r\n          <ion-label>Grupo 1</ion-label>\r\n          <h6 class=\"textoGrupo\"><b>Integrantes:</b> Estudiante 1, Estudiante 2</h6>\r\n          <h6 class=\"textoGrupo\"><b>Capacidad:</b> 2/3</h6>\r\n          <ion-button shape=\"round\" class=\"botonUnirse\" (click)=\"avisoUnion()\">Unirse</ion-button>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item class=\"padingGrupos\">\r\n        <div class=\"elementosGrupo\">\r\n          <ion-label>Grupo 2</ion-label>\r\n          <h6 class=\"textoGrupo\"><b>Integrantes:</b> Estudiante 1, Estudiante 2, Estudiante 3</h6>\r\n          <h6 class=\"textoGrupo\"><b>Capacidad:</b> 3/3</h6>\r\n          <ion-button shape=\"round\" class=\"botonUnirse\" disabled=\"true\" (click)=\"avisoUnion()\">Unirse</ion-button>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item class=\"padingGrupos\">\r\n        <div class=\"elementosGrupo\">\r\n          <ion-label>Grupo 3</ion-label>\r\n          <h6 class=\"textoGrupo\"><b>Integrantes:</b> Estudiante 1</h6>\r\n          <h6 class=\"textoGrupo\"><b>Capacidad:</b> 1/3</h6>\r\n          <ion-button shape=\"round\" class=\"botonUnirse\" (click)=\"avisoUnion()\">Unirse</ion-button>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item class=\"padingGrupos\">\r\n        <div class=\"elementosGrupo\">\r\n          <ion-label>Grupo 4</ion-label>\r\n          <h6 class=\"textoGrupo\"><b>Integrantes:</b> </h6>\r\n          <h6 class=\"textoGrupo\"><b>Capacidad:</b> 0/3</h6>\r\n          <ion-button shape=\"round\" class=\"botonUnirse\" (click)=\"avisoUnion()\">Unirse</ion-button>\r\n        </div>\r\n      </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_grupos_grupos_module_ts.js.map