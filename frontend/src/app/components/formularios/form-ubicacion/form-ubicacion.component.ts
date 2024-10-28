import { Component, OnInit } from '@angular/core';
import { UbicacionService } from '../../../../services/ubicacion.service';
import { Ubicacion } from '../../../interfaces/ubicacion';

@Component({
  selector: 'app-form-ubicacion',
  templateUrl: './form-ubicacion.component.html',
  styleUrls: ['./form-ubicacion.component.css']
})
export class FormUbicacionComponent implements OnInit {
  ubicacion: Ubicacion = { id_ubicacion: 0, nombre: '', id_existencia: 0 };
  ubicaciones: Ubicacion[] = [];

  constructor(private ubicacionService: UbicacionService) {}

  ngOnInit(): void {
    this.cargarUbicaciones();
  }

 cargarUbicaciones(): void {
  this.ubicacionService.obtenerUbicacion().subscribe((data: Ubicacion[]) => {
    this.ubicaciones = data;
  });
}


  crear(): void {
    this.ubicacionService.crearUbicacion(this.ubicacion).subscribe(() => {
      this.limpiarFormulario();
      this.cargarUbicaciones();
    });
  }

  editar(): void {
    this.ubicacionService.editarUbicacion(this.ubicacion.id_ubicacion, this.ubicacion).subscribe(() => {
      this.limpiarFormulario();
      this.cargarUbicaciones();
    });
  }

  eliminar(): void {
    this.ubicacionService.eliminarUbicacion(this.ubicacion.id_ubicacion).subscribe(() => {
      this.limpiarFormulario();
      this.cargarUbicaciones();
    });
  }

  seleccionarUbicacion(ubicacion: Ubicacion): void {
    this.ubicacion = { ...ubicacion };
  }

  limpiarFormulario(): void {
    this.ubicacion = { id_ubicacion: 0, nombre: '', id_existencia: 0 };
  }
}

