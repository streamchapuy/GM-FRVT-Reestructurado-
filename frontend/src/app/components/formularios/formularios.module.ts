import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormActivoComponent } from './form-activo/form-activo.component';
import { FormulariosComponent } from './formularios.component';

@NgModule({
  declarations: [
    FormulariosComponent,
    FormActivoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormulariosComponent,
    FormActivoComponent
  ]
})
export class FormulariosModule { }
