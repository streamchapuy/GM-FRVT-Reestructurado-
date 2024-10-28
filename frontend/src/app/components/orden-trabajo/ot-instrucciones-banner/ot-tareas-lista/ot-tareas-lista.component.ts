import { Component, OnInit } from '@angular/core';
import { ActivoTareaService } from '../../../../../services/activo-tarea.service';
import { ActivoTarea } from '../../../../interfaces/activo-tarea';
import { Tarea } from '../../../../interfaces/tarea';
import { TareaService } from '../../../../../services/tareas.service';
import { Activo } from '../../../../interfaces/activo';
import { ActivoService } from '../../../../../services/activo.service';

@Component({
  selector: 'app-ot-tareas-lista',
  templateUrl: './ot-tareas-lista.component.html',
  styleUrls: ['./ot-tareas-lista.component.css']
})
export class OtTareasListaComponent implements OnInit {
  activoTareas: ActivoTarea[] = [];
  selectedActivoId: number | null = null; // Almacena el ID del activo seleccionado
  activos: any[] = []; // Asegúrate de tener una lista de activos

  constructor(
    private activoTareaService: ActivoTareaService,
    private tareaService: TareaService // Inyecta el servicio de tareas si es necesario
  ) {}

  ngOnInit(): void {
    // Cargar todos los activos aquí
    this.activoTareaService.obteneractivo_tarea().subscribe(
      (data: any[]) => {
        this.activos = data;
      },
      error => {
        console.error('Error al obtener activos:', error);
      }
    );
  }

  // Método para obtener tareas por el activo seleccionado
  obtenerTareasPorActivo(activoId: number): void {
    this.activoTareaService.obtenerTareasPorActivo(activoId).subscribe(
      (data: ActivoTarea[]) => {
        this.activoTareas = data;
      },
      error => {
        console.error('Error al obtener las tareas de activo:', error);
      }
    );
  }

  // Método que se llama cuando seleccionas un activo
  onActivoSeleccionado(event: Event): void {
    const selectElement = event.target as HTMLSelectElement; // Casting explícito
    const activoId = Number(selectElement.value); // Obtener el valor como número
    this.selectedActivoId = activoId; // Establece el activo seleccionado
    this.obtenerTareasPorActivo(activoId); // Obtiene las tareas para el activo seleccionado
  }
}


