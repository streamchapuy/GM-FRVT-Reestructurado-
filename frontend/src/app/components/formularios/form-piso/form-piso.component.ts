import { Component, OnInit } from '@angular/core';
import { PisoService } from '../../../../services/piso.service';
import { Piso } from '../../../interfaces/piso';

@Component({
  selector: 'app-form-piso',
  templateUrl: './form-piso.component.html',
  styleUrls: ['./form-piso.component.css']
})
export class FormPisoComponent implements OnInit {
  piso: Piso = {
    id_piso: 0,
    nombre: '',
    id_existencia: ""
  };
  existencias = [
    {  nombre: 'Si' },
    {  nombre: 'No' }
  ];
  
  pisos: Piso[] = [];

  constructor(private pisoService: PisoService) { }

  ngOnInit(): void {
    this.cargarPisos();
  }

  cargarPisos(): void {
    this.pisoService.obtenerPisos().subscribe((data: Piso[]) => {
      this.pisos = data;
    });
  }

  crear(): void {
    this.pisoService.crearPiso(this.piso).subscribe(() => {
      this.cargarPisos();
      this.limpiarFormulario();
    });
  }

  editar(): void {
    this.pisoService.editarPiso(this.piso).subscribe(() => {
      this.cargarPisos();
      this.limpiarFormulario();
    });
  }

  eliminar(): void {
    this.pisoService.eliminarPiso(this.piso.id_piso).subscribe(() => {
      this.cargarPisos();
      this.limpiarFormulario();
    });
  }

  seleccionarPiso(piso: Piso): void {
    this.piso = { ...piso };
  }

  limpiarFormulario(): void {
    this.piso = {
      id_piso: 0,
      nombre: '',
      id_existencia: ""
    };
  }
}
