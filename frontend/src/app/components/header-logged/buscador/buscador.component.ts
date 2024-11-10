import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  @Output() searchTerm = new EventEmitter<string>();
  searchValue: string = '';

  private searchMapping: { [key: string]: string } = {
    'orden de trabajo': '/ordenTrabajo',
    'ot': '/ordenTrabajo',
    'crear': '/ordenTrabajo',
    'generar': '/ordenTrabajo',
    'activo': '/formActivo',
    'activos': '/formActivo',
    'edificio': '/formEdificio',
    'edificios': '/formEdificio',
    'ots': '/formOT',
    'ordenes de trabajo': '/formOT',
    'piso': '/formPiso',
    'pisos': '/formPiso',
    'sector': '/formSector',
    'sectores': '/formSector',
    'ubicacion': '/formUbicacion',
    'ubicaciones': '/formUbicacion',
    'usuarios': '/formUsuarios',
    'usuario': '/formUsuarios',
    'tareas': '/formTareas',
    'tarea': '/formTareas',
  };

  constructor(private router: Router) {}

  onSearch(): void {
    const searchValue = this.searchValue.toLowerCase().trim();

    for (const key in this.searchMapping) {
      if (searchValue.includes(key)) {
        this.router.navigate([this.searchMapping[key]]);
        return;
      }
    }

    console.log('No se encontró una ruta para el término de búsqueda');
  }
}
