import { Component, OnInit } from '@angular/core';
import { EdificioService } from '../../../../services/edificio.service';
import { Edificio } from '../../../interfaces/edificio';

@Component({
  selector: 'app-form-edificio',
  templateUrl: './form-edificio.component.html',
  styleUrls: ['./form-edificio.component.css']
})
export class FormEdificioComponent implements OnInit {
  edificio: Edificio = {
    id_edificio: 0,
    nombre: '',
    calle: '',
    id_existencia: 0
  };

  existencias = [
    { id: 1, nombre: 'Si' },
    { id: 2, nombre: 'No' }
  ];

  edificios: Edificio[] = [];

  constructor(private edificioService: EdificioService) { }

  ngOnInit() {
    this.obtenerEdificios();
  }

  obtenerEdificios() {
    this.edificioService.obtenerEdificio().subscribe((data: Edificio[]) => {
      this.edificios = data;
    });
  }

  seleccionarEdificio(edificio: Edificio) {
    this.edificio = { ...edificio };
  }

  crear() {
    this.edificioService.crearEdificio(this.edificio).subscribe({
      next: (nuevoEdificio) => {
        this.edificios.push(nuevoEdificio);
        this.limpiarFormulario();
      },
      error: (err) => console.error('Error al crear edificio:', err)
    });
  }

  editar() {
    this.edificioService.editarEdificio(this.edificio).subscribe(() => {
      this.obtenerEdificios();
      this.limpiarFormulario();
    });
  }

  eliminar() {
    if (this.edificio.id_edificio) {
      this.edificioService.eliminarEdificio(this.edificio.id_edificio).subscribe(() => {
        this.obtenerEdificios();
        this.limpiarFormulario();
      });
    }
  }

  limpiarFormulario() {
    this.edificio = {
      id_edificio: 0,
      nombre: '',
      calle: '',
      id_existencia: 0
    };
  }
}

