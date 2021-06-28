(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_mensajes_tab4_module_ts"],{

/***/ 1082:
/*!***********************************!*\
  !*** ./src/app/leer/leer.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeerPage": () => (/* binding */ LeerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_leer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./leer.page.html */ 2013);
/* harmony import */ var _leer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leer.page.scss */ 2466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let LeerPage = class LeerPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    salirLeer() {
        this.modalController.dismiss();
    }
};
LeerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
LeerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-leer',
        template: _raw_loader_leer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_leer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LeerPage);



/***/ }),

/***/ 8590:
/*!*************************************************!*\
  !*** ./src/app/mensajes/tab4-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": () => (/* binding */ Tab4PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 8419);
/* harmony import */ var _redactar_redactar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redactar/redactar.page */ 3737);
/* harmony import */ var _redactar_redactar_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redactar/redactar.module */ 5550);






const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page,
    },
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        entryComponents: [_redactar_redactar_page__WEBPACK_IMPORTED_MODULE_1__.RedactarPage],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _redactar_redactar_module__WEBPACK_IMPORTED_MODULE_2__.RedactarPageModule],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 7428:
/*!*****************************************!*\
  !*** ./src/app/mensajes/tab4.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": () => (/* binding */ Tab4PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 8419);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4-routing.module */ 8590);









let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page }]),
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab4PageRoutingModule,
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page],
    })
], Tab4PageModule);



/***/ }),

/***/ 8419:
/*!***************************************!*\
  !*** ./src/app/mensajes/tab4.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": () => (/* binding */ Tab4Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab4.page.html */ 9655);
/* harmony import */ var _tab4_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page.scss */ 1767);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _redactar_redactar_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redactar/redactar.page */ 3737);
/* harmony import */ var _leer_leer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../leer/leer.page */ 1082);







let Tab4Page = class Tab4Page {
    constructor(modalController) {
        this.modalController = modalController;
    }
    redactarMensaje() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _redactar_redactar_page__WEBPACK_IMPORTED_MODULE_2__.RedactarPage,
            });
            yield modal.present();
        });
    }
    leerMensaje() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _leer_leer_page__WEBPACK_IMPORTED_MODULE_3__.LeerPage,
            });
            yield modal.present();
        });
    }
};
Tab4Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab4',
        template: _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab4_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab4Page);



/***/ }),

/***/ 8819:
/*!*****************************************************!*\
  !*** ./src/app/redactar/redactar-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedactarPageRoutingModule": () => (/* binding */ RedactarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let RedactarPageRoutingModule = class RedactarPageRoutingModule {
};
RedactarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({})
], RedactarPageRoutingModule);



/***/ }),

/***/ 5550:
/*!*********************************************!*\
  !*** ./src/app/redactar/redactar.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedactarPageModule": () => (/* binding */ RedactarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _redactar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redactar-routing.module */ 8819);
/* harmony import */ var _redactar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redactar.page */ 3737);







let RedactarPageModule = class RedactarPageModule {
};
RedactarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _redactar_routing_module__WEBPACK_IMPORTED_MODULE_0__.RedactarPageRoutingModule,
        ],
        declarations: [_redactar_page__WEBPACK_IMPORTED_MODULE_1__.RedactarPage],
    })
], RedactarPageModule);



/***/ }),

/***/ 3737:
/*!*******************************************!*\
  !*** ./src/app/redactar/redactar.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedactarPage": () => (/* binding */ RedactarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_redactar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./redactar.page.html */ 263);
/* harmony import */ var _redactar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redactar.page.scss */ 3913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 476);





let RedactarPage = class RedactarPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
    }
    salirRedactar() {
        this.modalController.dismiss();
    }
};
RedactarPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
RedactarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-redactar',
        template: _raw_loader_redactar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_redactar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RedactarPage);



/***/ }),

/***/ 2466:
/*!*************************************!*\
  !*** ./src/app/leer/leer.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".elementosMensaje {\n  margin-top: 30px !important;\n  display: flex;\n  justify-content: center !important;\n  flex-direction: column !important;\n}\n\n.datosImportantes {\n  padding-left: 20px !important;\n  padding-right: 20px !important;\n}\n\n.areaMensaje {\n  padding-top: 20px !important;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.botonListo {\n  padding-top: 30px !important;\n  height: 80px !important;\n  display: flex;\n  justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FBQ0oiLCJmaWxlIjoibGVlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWxlbWVudG9zTWVuc2FqZXtcclxuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0b3NJbXBvcnRhbnRlc3tcclxuICAgIHBhZGRpbmctbGVmdDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXJlYU1lbnNhamV7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3Rvbkxpc3Rve1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogODBweCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 1767:
/*!*****************************************!*\
  !*** ./src/app/mensajes/tab4.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".botonRegresar {\n  margin-top: 40px !important;\n  margin-left: 40px !important;\n}\n\n.botonRedactar {\n  padding-top: 30px !important;\n  height: 80px !important;\n  --background: #58c6d8 !important;\n  display: flex;\n  justify-content: center !important;\n}\n\n.listaCorreos {\n  margin-top: 30px !important;\n}\n\n.correos {\n  display: flex;\n  justify-content: center !important;\n  flex-direction: column !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7QUFDSiIsImZpbGUiOiJ0YWI0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3RvblJlZ3Jlc2Fye1xyXG4gICAgbWFyZ2luLXRvcDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvdG9uUmVkYWN0YXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICAjNThjNmQ4ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpc3RhQ29ycmVvc3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvcnJlb3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ 3913:
/*!*********************************************!*\
  !*** ./src/app/redactar/redactar.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".opcionesContacto {\n  margin-top: 30px !important;\n  display: flex;\n  justify-content: center !important;\n  flex-direction: column !important;\n}\n\n.areaMensaje {\n  padding-top: 30px !important;\n  padding-left: 50px !important;\n  padding-right: 50px !important;\n}\n\n.botonEnviar {\n  padding-top: 30px !important;\n  height: 80px !important;\n  --background: #51c86e !important;\n  display: flex;\n  justify-content: center !important;\n}\n\n.botonCancelar {\n  padding-top: 20px !important;\n  height: 70px !important;\n  --background: #df4b4b !important;\n  display: flex;\n  justify-content: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZGFjdGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUFDSiIsImZpbGUiOiJyZWRhY3Rhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3BjaW9uZXNDb250YWN0b3tcclxuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXJlYU1lbnNhamV7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3RvbkVudmlhcntcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogICM1MWM4NmUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm90b25DYW5jZWxhcntcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogI2RmNGI0YiAgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ 2013:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/leer/leer.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Leer Mensaje</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"elementosMensaje\">\r\n    <div class=\"datosImportantes\">\r\n      <h5><b>Autor:</b>[Estudiante]</h5>\r\n      <h5><b>Asunto:</b>[Asunto]</h5>\r\n      <h5><b>Fecha:</b>[Fecha]</h5>\r\n    </div>\r\n    <ion-textarea rows= \"5\" cols=\"20\" class=\"areaMensaje\" readonly=\"true\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. \r\n      Quisque ut tincidunt libero. Vestibulum et interdum arcu. Sed ultricies ligula vel lacus imperdiet, ac commodo sapien vehicula. \r\n      Nam blandit diam felis, sit amet iaculis lorem varius eu. Proin tempus mattis ultricies. Nullam fermentum libero molestie,\r\n       vehicula mauris sit amet, mollis ante. Maecenas justo neque, aliquet vitae dui nec, pellentesque volutpat lorem. Sed ut nisi mattis quam dictum commodo nec ut odio. \r\n       Integer pharetra aliquam diam, fermentum tincidunt ex. Ut semper dapibus sem. </ion-textarea>\r\n  </div>\r\n  <ion-button shape=\"round\" class=\"botonListo\" (click)=\"salirLeer()\">Listo</ion-button>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 9655:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mensajes/tab4.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Mensajes\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Mensajes</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-button shape=\"round\" class=\"botonRegresar\" routerLink=\"../inicio\">Regresar a Inicio</ion-button>\r\n  \r\n  <ion-button shape=\"round\" class=\"botonRedactar\" (click)=\"redactarMensaje()\"><ion-icon name=\"pencil-outline\"></ion-icon>Redactar mensaje</ion-button>\r\n  \r\n  <ion-list class=\"listaCorreos\">\r\n      <ion-item button=\"true\" (click)=\"leerMensaje()\">\r\n        <div class=\"correos\">\r\n          <h3>Trabajo sobre la clase de ayer</h3>\r\n          <h6>Pamela Cortez</h6>\r\n          <h6>22-06-2021</h6>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item button=\"true\" (click)=\"leerMensaje()\">\r\n        <div class=\"correos\">\r\n          <h3>Grupo de WS del curso</h3>\r\n          <h6>Luis Fernandez</h6>\r\n          <h6>19-05-2021</h6>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item button=\"true\" (click)=\"leerMensaje()\">\r\n        <div class=\"correos\">\r\n          <h3>Cambios en nuestro grupo</h3>\r\n          <h6>Alex Suarez</h6>\r\n          <h6>05-04-2021</h6>\r\n        </div>\r\n      </ion-item>\r\n\r\n      <ion-item button=\"true\" (click)=\"leerMensaje()\">\r\n        <div class=\"correos\">\r\n          <h3>Preguntas sobre la lección</h3>\r\n          <h6>Leslie Guzmán</h6>\r\n          <h6>10-03-2021</h6>\r\n        </div>\r\n      </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>");

/***/ }),

/***/ 263:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/redactar/redactar.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Redactar Mensaje</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"opcionesContacto\">\r\n    <ion-item>\r\n      <ion-label>Curso</ion-label>\r\n      <ion-select>\r\n        <ion-select-option value=\"2021HermeneuticaI\">Hermeneutica I</ion-select-option>\r\n        <ion-select-option value=\"2021HermeneuticaII\">Hermeneutica II</ion-select-option>\r\n        <ion-select-option value=\"2021HermeneuticaIII\">Hermeneutica III</ion-select-option>\r\n        <ion-select-option value=\"2021HermeneuticaIV\">Hermeneutica IV</ion-select-option>\r\n        <ion-select-option value=\"2021HermeneuticaV\">Hermeneutica V</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Contacto</ion-label>\r\n      <ion-select multiple=\"true\">\r\n        <ion-select-option class=\"profesor\" value=\"carlmera@entidad.edu.ec\">MERA CARLOS</ion-select-option>\r\n        <ion-select-option class=\"estudiante\" value=\"mebanchon@entidad.edu.ec\">Banchón Melanie</ion-select-option>\r\n        <ion-select-option class=\"estudiante\" value=\"petdelacruz@entidad.edu.ec\">De la Cruz Petter</ion-select-option>\r\n        <ion-select-option class=\"estudiante\" value=\"wimedina@entidad.edu.ec\">Medina William</ion-select-option>\r\n        <ion-select-option class=\"estudiante\" value=\"semendoza@entidad.edu.ec\">Mendoza Sebastián</ion-select-option>\r\n        <ion-select-option class=\"estudiante\" value=\"edsabando@entidad.edu.ec\">Sabando Edwars</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n  </div>\r\n\r\n  <ion-textarea rows= \"14\" cols=\"30\" class=\"areaMensaje\" placeholder=\"Escriba su mensaje aquí...\"></ion-textarea>\r\n\r\n  <ion-button shape=\"round\" class=\"botonEnviar\" href=\"#\">Enviar mensaje</ion-button>\r\n  <ion-button shape=\"round\" class=\"botonCancelar\" (click)=\"salirRedactar()\">Cancelar</ion-button>\r\n\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_mensajes_tab4_module_ts.js.map