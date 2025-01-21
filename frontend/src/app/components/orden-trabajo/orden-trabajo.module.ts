import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { FechasComponent } from './fechas/fechas.component';
import { SelectoresComponent } from './selectores/selectores.component';
import { TareasComponent } from './tareas/tareas.component';

@NgModule({
    declarations: [
        CuerpoComponent,
        FechasComponent,
        SelectoresComponent,
        TareasComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        CuerpoComponent,
        FechasComponent,
        SelectoresComponent,
        TareasComponent
    ]
})
export class OrdenTrabajoModule { }