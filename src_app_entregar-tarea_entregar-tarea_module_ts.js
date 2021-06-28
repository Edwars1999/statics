(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_entregar-tarea_entregar-tarea_module_ts"],{

/***/ 7160:
/*!*****************************************************************!*\
  !*** ./src/app/entregar-tarea/entregar-tarea-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntregarTareaPageRoutingModule": () => (/* binding */ EntregarTareaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _entregar_tarea_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entregar-tarea.page */ 9428);




const routes = [
    {
        path: '',
        component: _entregar_tarea_page__WEBPACK_IMPORTED_MODULE_0__.EntregarTareaPage,
    },
];
let EntregarTareaPageRoutingModule = class EntregarTareaPageRoutingModule {
};
EntregarTareaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EntregarTareaPageRoutingModule);



/***/ }),

/***/ 4886:
/*!*********************************************************!*\
  !*** ./src/app/entregar-tarea/entregar-tarea.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntregarTareaPageModule": () => (/* binding */ EntregarTareaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _entregar_tarea_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entregar-tarea-routing.module */ 7160);
/* harmony import */ var _entregar_tarea_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entregar-tarea.page */ 9428);







let EntregarTareaPageModule = class EntregarTareaPageModule {
};
EntregarTareaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _entregar_tarea_routing_module__WEBPACK_IMPORTED_MODULE_0__.EntregarTareaPageRoutingModule,
        ],
        declarations: [_entregar_tarea_page__WEBPACK_IMPORTED_MODULE_1__.EntregarTareaPage],
    })
], EntregarTareaPageModule);



/***/ }),

/***/ 9428:
/*!*******************************************************!*\
  !*** ./src/app/entregar-tarea/entregar-tarea.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntregarTareaPage": () => (/* binding */ EntregarTareaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_entregar_tarea_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./entregar-tarea.page.html */ 9996);
/* harmony import */ var _entregar_tarea_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entregar-tarea.page.scss */ 2176);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let EntregarTareaPage = class EntregarTareaPage {
    constructor() { }
    ngOnInit() {
    }
    loadFileFromDevice(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
            // get the blob of the file:
            const blob = new Blob([new Uint8Array(reader.result)]);
            // create blobURL, such that we could use it in an element:
            const blobURL = URL.createObjectURL(blob);
            console.log(blobURL);
        };
        // reader.onerror = (error) => {};
    }
    ;
};
EntregarTareaPage.ctorParameters = () => [];
EntregarTareaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-entregar-tarea',
        template: _raw_loader_entregar_tarea_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_entregar_tarea_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EntregarTareaPage);



/***/ }),

/***/ 2176:
/*!*********************************************************!*\
  !*** ./src/app/entregar-tarea/entregar-tarea.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".icon-right {\n  margin-right: 10px;\n  height: 20px;\n  width: 20px;\n}\n\n.tituloTarea, .envioArchivo {\n  font-size: 20px;\n}\n\n.descripcionTarea, .enviarArchivo {\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  overflow-y: auto;\n  justify-content: left;\n  text-align: justify;\n  height: 300px;\n  margin-left: 2em;\n  margin-right: 2em;\n  margin-bottom: 2em;\n}\n\n.enviarArchivo {\n  height: 100px;\n}\n\n.botonEntregar {\n  padding-top: 30px !important;\n  height: 80px !important;\n  --background: #51c86e !important;\n  display: flex;\n  justify-content: center !important;\n}\n\n#file-input {\n  margin-top: 20px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJlZ2FyLXRhcmVhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0VBQ0csWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNDLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDRyxxQkFBQTtFQUNBLG1CQUFBO0VBQ0gsYUFBQTtFQUVHLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUdBO0VBQ0ksNEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQUoiLCJmaWxlIjoiZW50cmVnYXItdGFyZWEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tcmlnaHR7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi50aXR1bG9UYXJlYSwgLmVudmlvQXJjaGl2b3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmRlc2NyaXBjaW9uVGFyZWEsIC5lbnZpYXJBcmNoaXZvIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcblx0aGVpZ2h0OiAzMDBweDtcclxuXHQvL21hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6MmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuXHJcbi5lbnZpYXJBcmNoaXZve1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmJvdG9uRW50cmVnYXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQ6ICAjNTFjODZlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuI2ZpbGUtaW5wdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 9996:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entregar-tarea/entregar-tarea.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Entregar Tarea</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-padding\">\r\n    <ion-icon class= \"icon-right\" name=\"reader-outline\"></ion-icon>\r\n    <span class=\"tituloTarea\">Tarea pendiente</span> \r\n  </div>\r\n\r\n  <div class=\"descripcionTarea\">\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed risus mattis, varius mi eget, commodo tellus. Pellentesque id dolor et risus lobortis lacinia non rutrum odio. Phasellus hendrerit semper ligula, eget congue tortor vehicula id. Ut dictum pulvinar libero et viverra. Nulla lacinia, odio vitae interdum tempus, nulla nulla mattis erat, a tempor orci mauris ac massa. Aenean erat arcu, vehicula vitae eleifend non, sollicitudin non urna. Vivamus viverra diam id ultricies imperdiet. Etiam ut consequat turpis. Donec ac ultricies neque. Nullam sollicitudin neque sed odio dignissim, quis facilisis mi venenatis. Quisque ex lorem, ultricies et diam id, feugiat tincidunt velit. Cras eget ante elit. Nullam sed euismod nisl, in faucibus elit. </p>\r\n  </div>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-icon class= \"icon-right\" name=\"paper-plane-outline\"></ion-icon>\r\n    <span class=\"envioArchivo\">Enviar Archivo</span> \r\n  </div>\r\n  <div class=\"enviarArchivo\">\r\n    <input type=\"file\" (change)=\"loadFileFromDevice($event)\" id=\"file-input\" multiple=\"true\">\r\n  </div>\r\n\r\n  <ion-button shape=\"round\" class=\"botonEntregar\" routerLink=\"../../../inicio\">Entregar tarea</ion-button>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_entregar-tarea_entregar-tarea_module_ts.js.map