(self["webpackChunklms"] = self["webpackChunklms"] || []).push([["src_app_docentes_reporte-notas-alumno_reporte-notas-alumno_module_ts"],{

/***/ 771:
/*!**************************************************************************************!*\
  !*** ./src/app/docentes/reporte-notas-alumno/reporte-notas-alumno-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteNotasAlumnoPageRoutingModule": () => (/* binding */ ReporteNotasAlumnoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _reporte_notas_alumno_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reporte-notas-alumno.page */ 3328);




const routes = [
    {
        path: '',
        component: _reporte_notas_alumno_page__WEBPACK_IMPORTED_MODULE_0__.ReporteNotasAlumnoPage,
    },
];
let ReporteNotasAlumnoPageRoutingModule = class ReporteNotasAlumnoPageRoutingModule {
};
ReporteNotasAlumnoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReporteNotasAlumnoPageRoutingModule);



/***/ }),

/***/ 1833:
/*!******************************************************************************!*\
  !*** ./src/app/docentes/reporte-notas-alumno/reporte-notas-alumno.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteNotasAlumnoPageModule": () => (/* binding */ ReporteNotasAlumnoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _reporte_notas_alumno_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reporte-notas-alumno-routing.module */ 771);
/* harmony import */ var _reporte_notas_alumno_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reporte-notas-alumno.page */ 3328);
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ 3806);








let ReporteNotasAlumnoPageModule = class ReporteNotasAlumnoPageModule {
};
ReporteNotasAlumnoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _reporte_notas_alumno_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReporteNotasAlumnoPageRoutingModule,
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        ],
        declarations: [_reporte_notas_alumno_page__WEBPACK_IMPORTED_MODULE_1__.ReporteNotasAlumnoPage],
    })
], ReporteNotasAlumnoPageModule);



/***/ }),

/***/ 3328:
/*!****************************************************************************!*\
  !*** ./src/app/docentes/reporte-notas-alumno/reporte-notas-alumno.page.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReporteNotasAlumnoPage": () => (/* binding */ ReporteNotasAlumnoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_reporte_notas_alumno_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reporte-notas-alumno.page.html */ 927);
/* harmony import */ var _reporte_notas_alumno_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reporte-notas-alumno.page.scss */ 9882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 2091);
/* harmony import */ var src_app_services_exporter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/exporter.service */ 4630);



// import { Component, OnInit } from '@angular/core';



let ReporteNotasAlumnoPage = class ReporteNotasAlumnoPage {
    constructor(exportService) {
        this.exportService = exportService;
        this.estudiantes = [];
        this.displayedColumns = [];
        // subjects=['Lenguaje extranjero',
        // 'Religion','Economia','Teologia 1','Teologia 2'];
        this.subjects = [];
        this.students = [];
        this.selectedSubject = '';
        this.selectedStudent = '';
        /**
         * Pre-defined columns list for user table
         */
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
            // this.dataSource= new MatTableDataSource(this.estudiantes);
            // console.log("dataSource-> "+this.dataSource);
            console.log('estudiantes-> ' + this.estudiantes);
            json.forEach((e) => {
                if (!this.subjects.includes(e.materia)) {
                    console.log(e.materia);
                    this.subjects.push(e.materia);
                }
            });
        });
        console.log('init');
        console.log(this.subjects);
        console.log(this.students);
    }
    selectSubject(event) {
        this.students = [];
        this.selectedStudent = '';
        this.selectedSubject = event.target.value;
        this.estudiantes.forEach((e) => {
            if (this.selectedSubject == e.materia) {
                this.students.push(e.nombres);
            }
        });
        console.log('estudiantes-> ' + this.students);
    }
    selectStudent(event) {
        this.selectedStudent = event.target.value;
        console.log('estudiante seleccionada-> ' + this.selectedStudent);
        this.estudiantes.forEach((e) => {
            if (this.selectedSubject == e.materia && this.selectedStudent == e.nombres) {
                const element = [{ 'nombres': e.nombres,
                        'materia': e.materia,
                        'tarea1': e.tarea1,
                        'tarea2': e.tarea2,
                        'leccion1': e.leccion1,
                        'leccion2': e.leccion2,
                        'proyecto': e.proyecto,
                        'final': e.final }];
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(element);
                // this.tabla= new MatTableDataSource(element);
            }
        });
    }
    reset() {
        this.selectedStudent = '';
        this.selectedSubject = '';
    }
    exportAsXLSX() {
        this.exportService.exportToExcel(this.dataSource.data, 'reporte_notas_' + this.selectedStudent);
    }
};
ReporteNotasAlumnoPage.ctorParameters = () => [
    { type: src_app_services_exporter_service__WEBPACK_IMPORTED_MODULE_2__.ExporterService }
];
ReporteNotasAlumnoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-reporte-notas-alumno',
        template: _raw_loader_reporte_notas_alumno_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reporte_notas_alumno_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReporteNotasAlumnoPage);



/***/ }),

/***/ 9882:
/*!******************************************************************************!*\
  !*** ./src/app/docentes/reporte-notas-alumno/reporte-notas-alumno.page.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydGUtbm90YXMtYWx1bW5vLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJyZXBvcnRlLW5vdGFzLWFsdW1uby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 927:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/docentes/reporte-notas-alumno/reporte-notas-alumno.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Reporte de Notas Alumno</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-item>\r\n      <ion-label>Seleccione una materia: </ion-label>\r\n      <ion-select [(ngModel)]=\"selectedSubject\" (ionChange)=\"selectSubject($event)\"\r\n      interface=\"popover\">\r\n        <ion-select-option *ngFor=\"let subject of subjects\" [value]=\"subject\">\r\n          {{subject}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Seleccione un estudiante: </ion-label>\r\n      <ion-select [(ngModel)]=\"selectedStudent\" (ionChange)=\"selectStudent($event)\"\r\n      interface=\"popover\"> \r\n        <ion-select-option *ngFor=\"let student of students\" [value]=\"student\">\r\n          {{student}}\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"selectedSubject && selectedStudent\" >\r\n    \r\n    <mat-table  #table [dataSource]=\"dataSource\" matSort>\r\n      <ng-container matColumnDef=\"{{column.id}}\" *ngFor=\"let column of columnNames\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> {{column.value}}</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\"> {{element[column.id]}}</mat-cell>\r\n      </ng-container>\r\n  \r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    </mat-table>\r\n  \r\n  </div>\r\n\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-button ion-button color='success' (click)=\"exportAsXLSX()\">Descargar reporte</ion-button>\r\n        <ion-button ion-button (click)=\"reset()\">Limpiar</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_docentes_reporte-notas-alumno_reporte-notas-alumno_module_ts.js.map