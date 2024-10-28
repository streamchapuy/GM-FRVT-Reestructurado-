import { Component, OnInit } from '@angular/core';
import { ActivoTareaService } from '../../../../../services/activo-tarea.service';
import { TareaService } from '../../../../../services/tareas.service';
import { ActivoTarea } from '../../../../interfaces/activo-tarea';

@Component({
  selector: 'app-ot-tareas-lista',
  templateUrl: './ot-tareas-lista.component.html',
  styleUrls: ['./ot-tareas-lista.component.css']
})
export class OtTareasListaComponent implements OnInit {
  activoTareas: ActivoTarea[] = [];
  selectedActivoId: number | null = null;
  activos: any[] = [];

  constructor(
    private activoTareaService: ActivoTareaService,
    private tareaService: TareaService
  ) {}

  ngOnInit(): void {
    this.activoTareaService.obteneractivo_tarea().subscribe(
      (data: any[]) => {
        this.activos = data;
      },
      error => {
        console.error('Error al obtener activos:', error);
      }
    );
  }

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

  onActivoSeleccionado(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const activoId = Number(selectElement.value);
    this.selectedActivoId = activoId;
    this.obtenerTareasPorActivo(activoId)
  }
}


