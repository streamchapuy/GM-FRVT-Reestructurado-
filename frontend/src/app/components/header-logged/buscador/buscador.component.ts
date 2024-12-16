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
    'ordenes': '/formOT',
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
    'labor': '/formLabor',
    'labores': '/formLabor',
    'home': '/inicioAdmin',
    'admin': '/inicioAdmin',
    'pendientes': '/inicioOperario',
    'ot pendientes': '/inicioOperario',
    'ordenes pendientes': '/inicioOperario',
    'ordenes de trabajo pendientes': '/inicioOperario',
    'pendiente': '/inicioOperario',
    'ot pendiente': '/inicioOperario',
    'orden pendiente': '/inicioOperario',
    'orden de trabajo pendiente': '/inicioOperario',
    'activas': '/inicioOperario',
    'ot activas': '/inicioOperario',
    'ordenes activas': '/inicioOperario',
    'ordenes de trabajo activas': '/inicioOperario',
    'activa': '/inicioOperario',
    'ot activa': '/inicioOperario',
    'orden activa': '/inicioOperario',
    'orden de trabajo activa': '/inicioOperario',
    'terminadas': '/inicioOperario',
    'ot terminadas': '/inicioOperario',
    'ordenes terminadas': '/inicioOperario',
    'ordenes de trabajo terminadas': '/inicioOperario',
    'terminada': '/inicioOperario',
    'ot terminada': '/inicioOperario',
    'orden terminada': '/inicioOperario',
    'orden de trabajo terminada': '/inicioOperario',
    'finalizadas': '/inicioOperario',
    'ot finalizadas': '/inicioOperario',
    'ordenes finalizadas': '/inicioOperario',
    'ordenes de trabajo finalizadas': '/inicioOperario',
    'finalizada': '/inicioOperario',
    'ot finalizada': '/inicioOperario',
    'orden finalizada': '/inicioOperario',
    'orden de trabajo finalizada': '/inicioOperario',
    'canceladas': '/inicioOperario',
    'ot canceladas': '/inicioOperario',
    'ordenes canceladas': '/inicioOperario',
    'ordenes de trabajo canceladas': '/inicioOperario',
    'cancelada': '/inicioOperario',
    'ot cancelada': '/inicioOperario',
    'orden cancelada': '/inicioOperario',
    'orden de trabajo cancelada': '/inicioOperario',
  };

  constructor(private router: Router) { }

  onSearch(): void {
    const searchValue = this.searchValue.toLowerCase().trim();

    for (const key in this.searchMapping) {
      if (searchValue.includes(key)) {
        this.router.navigate([this.searchMapping[key]]);
        return;
      }
    }

    this.router.navigate(['/404']);
  }
}
