(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_docentes_reporte-notas-materia_reporte-notas-materia_module_ts"],{

/***/ 4932:
/*!****************************************************************************************!*\
  !*** ./src/app/docentes/reporte-notas-materia/reporte-notas-materia-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteNotasMateriaPageRoutingModule": () => (/* binding */ ReporteNotasMateriaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _reporte_notas_materia_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reporte-notas-materia.page */ 9930);




const routes = [
    {
        path: '',
        component: _reporte_notas_materia_page__WEBPACK_IMPORTED_MODULE_0__.ReporteNotasMateriaPage,
    },
];
let ReporteNotasMateriaPageRoutingModule = class ReporteNotasMateriaPageRoutingModule {
};
ReporteNotasMateriaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReporteNotasMateriaPageRoutingModule);



/***/ }),

/***/ 7795:
/*!********************************************************************************!*\
  !*** ./src/app/docentes/reporte-notas-materia/reporte-notas-materia.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteNotasMateriaPageModule": () => (/* binding */ ReporteNotasMateriaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _reporte_notas_materia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reporte-notas-materia-routing.module */ 4932);
/* harmony import */ var _reporte_notas_materia_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reporte-notas-materia.page */ 9930);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 3806);








let ReporteNotasMateriaPageModule = class ReporteNotasMateriaPageModule {
};
ReporteNotasMateriaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _reporte_notas_materia_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReporteNotasMateriaPageRoutingModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        ],
        declarations: [_reporte_notas_materia_page__WEBPACK_IMPORTED_MODULE_1__.ReporteNotasMateriaPage],
    })
], ReporteNotasMateriaPageModule);



/***/ }),

/***/ 9930:
/*!******************************************************************************!*\
  !*** ./src/app/docentes/reporte-notas-materia/reporte-notas-materia.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteNotasMateriaPage": () => (/* binding */ ReporteNotasMateriaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_reporte_notas_materia_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reporte-notas-materia.page.html */ 4048);
/* harmony import */ var _reporte_notas_materia_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reporte-notas-materia.page.scss */ 3350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var src_app_services_exporter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/exporter.service */ 4630);






let ReporteNotasMateriaPage = class ReporteNotasMateriaPage {
    constructor(exportService) {
        this.exportService = exportService;
        this.estudiantes = [];
        this.displayedColumns = [];
        this.subjects = [];
        this.selectedSubject = '';
        // element-> estudiantes que se muestran en la tabla
        this.element = [];
        this.columnNames = [
            { id: 'nombres', value: 'Nombres' },
            { id: 'tarea1', value: 'Tarea 1' },
            { id: 'tarea2', value: 'Tarea 2' },
            { id: 'leccion1', value: 'Leccion 1' },
            { id: 'leccion2', value: 'Leccion 2' },
            { id: 'proyecto', value: 'Proyecto' },
            { id: 'final', value: 'Final' }
        ];
    }
    ngOnInit() {
        this.displayedColumns = this.columnNames.map((x) => x.id);
        fetch('./assets/reporte-notas-alumno.json').then((res) => res.json())
            .then((json) => {
            console.log(json);
            this.estudiantes = json;
            json.forEach((e) => {
                if (!this.subjects.includes(e.materia)) {
                    console.log(e.materia);
                    this.subjects.push(e.materia);
                }
                // this.students.push(e.nombres);
            });
        });
        console.log('init');
        console.log(this.subjects);
    }
    selectSubject(event) {
        this.element = [];
        this.selectedSubject = event.target.value;
        this.estudiantes.forEach((e) => {
            if (this.selectedSubject == e.materia) {
                this.element.push({ 'nombres': e.nombres,
                    'materia': e.materia,
                    'tarea1': e.tarea1,
                    'tarea2': e.tarea2,
                    'leccion1': e.leccion1,
                    'leccion2': e.leccion2,
                    'proyecto': e.proyecto,
                    'final': e.final });
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(this.element);
            }
        });
    }
    reset() {
        this.selectedSubject = '';
    }
    exportAsXLSX() {
        this.exportService.exportToExcel(this.dataSource.data, 'reporte_notas_' + this.selectedSubject);
    }
};
ReporteNotasMateriaPage.ctorParameters = () => [
    { type: src_app_services_exporter_service__WEBPACK_IMPORTED_MODULE_2__.ExporterService }
];
ReporteNotasMateriaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-reporte-notas-materia',
        template: _raw_loader_reporte_notas_materia_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reporte_notas_materia_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReporteNotasMateriaPage);



/***/ }),

/***/ 3350:
/*!********************************************************************************!*\
  !*** ./src/app/docentes/reporte-notas-materia/reporte-notas-materia.page.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRlLW5vdGFzLW1hdGVyaWEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 4048:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docentes/reporte-notas-materia/reporte-notas-materia.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Reporte de Notas por Materia</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-item>\r\n      <ion-label>Seleccione una materia: </ion-label>\r\n      <ion-select [(ngModel)]=\"selectedSubject\" (ionChange)=\"selectSubject($event)\"\r\n      interface=\"popover\">\r\n        <ion-select-option *ngFor=\"let subject of subjects\" [value]=\"subject\">\r\n          {{subject}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"selectedSubject\" >\r\n    \r\n    <mat-table  #table [dataSource]=\"dataSource\" matSort>\r\n      <ng-container matColumnDef=\"{{column.id}}\" *ngFor=\"let column of columnNames\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> {{column.value}}</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element[column.id]}}</mat-cell>\r\n      </ng-container>\r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row style=\"text-align: left;\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    </mat-table>\r\n  \r\n  </div>\r\n\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-button ion-button color='success' (click)=\"exportAsXLSX()\">Descargar reporte</ion-button>\r\n        <ion-button ion-button (click)=\"reset()\">Limpiar</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_docentes_reporte-notas-materia_reporte-notas-materia_module_ts.js.map