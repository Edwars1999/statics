(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_docentes_trabajo_trabajo_module_ts"],{

/***/ 5579:
/*!************************************************************!*\
  !*** ./src/app/docentes/trabajo/trabajo-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrabajoPageRoutingModule": () => (/* binding */ TrabajoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _trabajo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trabajo.page */ 8160);




const routes = [
    {
        path: ':id',
        component: _trabajo_page__WEBPACK_IMPORTED_MODULE_0__.TrabajoPage,
    },
];
let TrabajoPageRoutingModule = class TrabajoPageRoutingModule {
};
TrabajoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrabajoPageRoutingModule);



/***/ }),

/***/ 6585:
/*!****************************************************!*\
  !*** ./src/app/docentes/trabajo/trabajo.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrabajoPageModule": () => (/* binding */ TrabajoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _trabajo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trabajo-routing.module */ 5579);
/* harmony import */ var _trabajo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trabajo.page */ 8160);







let TrabajoPageModule = class TrabajoPageModule {
};
TrabajoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _trabajo_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrabajoPageRoutingModule,
        ],
        declarations: [_trabajo_page__WEBPACK_IMPORTED_MODULE_1__.TrabajoPage],
    })
], TrabajoPageModule);



/***/ }),

/***/ 8160:
/*!**************************************************!*\
  !*** ./src/app/docentes/trabajo/trabajo.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrabajoPage": () => (/* binding */ TrabajoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_trabajo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./trabajo.page.html */ 2030);
/* harmony import */ var _trabajo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trabajo.page.scss */ 723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let TrabajoPage = class TrabajoPage {
    constructor() {
        this.id = '60d56458e83042392c46e289';
        this.loaded = false;
    }
    ngOnInit() {
        // let id = this.route.snapshot.paramMap.get("id");
        // this.trabajoService.getTrabajo(this.id).subscribe((res)=>{
        //   if(res){
        //     this.trabajo = res;
        //     this.loaded = true;
        //     this.titulo = res.Titulo;
        //     console.log(res);
        //     console.log(res.Titulo);
        //   }
        // });
        const trabajo = {
            Archivos: [],
            Titulo: 'dcdcd',
            Instrucciones: 'cdcdcdcdcd',
            FechaCreacion: new Date('2021-06-25T05:06:32.163Z'),
            FechaEntrega: new Date('2021-06-26T22:09:00.000Z'),
            Categoria: 'talleres',
            Puntos: 100,
        };
        this.trabajo = trabajo;
        this.loaded = false;
    }
};
TrabajoPage.ctorParameters = () => [];
TrabajoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-trabajo',
        template: _raw_loader_trabajo_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_trabajo_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TrabajoPage);



/***/ }),

/***/ 723:
/*!****************************************************!*\
  !*** ./src/app/docentes/trabajo/trabajo.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFiYWpvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 2030:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docentes/trabajo/trabajo.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Nombre Materia</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"loaded\">\r\n  <ion-card>\r\n    <ion-card-header *ngIf=\"trabajo.Titulo!=undefined\">\r\n      <ion-card-title>\r\n        {{trabajo.Titulo}}\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-item>\r\n        <ion-label>\r\n          Instrucciones\r\n        </ion-label>\r\n   \r\n      </ion-item>\r\n      <ion-text *ngIf=\"trabajo.Instrucciones\">\r\n\r\n        <p>\r\n          {{trabajo.Instrucciones}}\r\n        </p>\r\n     \r\n\r\n      </ion-text>\r\n      <ion-item>\r\n        Archivos:\r\n      </ion-item>\r\n      <ion-item *ngIf=\"trabajo.Puntos\">\r\n        <ion-label>Puntos: {{trabajo.Puntos}}</ion-label>\r\n      </ion-item>\r\n      <ion-item *ngIf=\"trabajo.FechaEntrega\">\r\n        <ion-label>Fecha Entrega: {{trabajo.FechaEntrega}}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item *ngIf=\"trabajo.FechaCierre\">\r\n        <ion-label>Fecha Cierre: {{trabajo.FechaCierre}} </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label> Entregados</ion-label>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_docentes_trabajo_trabajo_module_ts.js.map