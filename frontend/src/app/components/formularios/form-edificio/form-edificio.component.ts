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
    existencia: ""
  };

  existencias = [
    { nombre: 'Si' },
    { nombre: 'No' }
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
console.log('Objeto edificio:', this.edificio);
    this.edificioService.guardarEdificio(this.edificio).subscribe({
      next: (nuevoEdificio: Edificio) => {
        this.edificios.push(nuevoEdificio);
        // this.limpiarFormulario();
console.log('Edificio creado:', nuevoEdificio);
      },
      error: (err) => console.error('Error al crear edificio:', err)
    });
  }

  editar() {
    this.edificioService.editarEdificio(this.edificio.id_edificio, this.edificio).subscribe(() => {
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
      existencia: ""
    };
  }
}

