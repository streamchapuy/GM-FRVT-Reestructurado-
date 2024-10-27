import { Component } from '@angular/core';
import { Activo } from '../../../interfaces/activo';

@Component({
  selector: 'app-form-activo',
  templateUrl: './form-activo.component.html',
  styleUrls: ['./form-activo.component.css']
})
export class FormActivoComponent {
  activo: Activo = {
    id_activo: 0,
    nombre: '',
    abreviacion: '',
    id_existencia: 0
  };

  existencias = [
    { id: 1, nombre: 'Si' },
    { id: 2, nombre: 'No' }
  ];

  insertar() {

  }

  editar() {

  }

  eliminar() {

  }
}

