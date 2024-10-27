import { Component, OnInit } from '@angular/core';
import { ActivoService } from '../../../../services/activo.service';
import { Activo } from '../../../interfaces/activo';

@Component({
  selector: 'app-form-activo',
  templateUrl: './form-activo.component.html',
  styleUrls: ['./form-activo.component.css']
})
export class FormActivoComponent implements OnInit {
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

  activos: Activo[] = [];

  constructor(private activoService: ActivoService) {}

  ngOnInit() {
    this.obtenerActivos();
  }

  obtenerActivos() {
    this.activoService.obtenerActivos().subscribe((data: Activo[]) => {
      this.activos = data;
    });
  }

  seleccionarActivo(activo: Activo) {
    this.activo = { ...activo };
  }

  insertar() {

  }

  editar() {

  }

  eliminar() {

  }
}
