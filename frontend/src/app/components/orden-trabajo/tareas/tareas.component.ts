import { Component, OnInit } from '@angular/core';
import { Labor } from '../../../../app/interfaces/labor';
import { Tarea } from '../../../../app/interfaces/tarea';
import { ActivoTareaService } from '../../../../services/activo-tarea.service';
import { ActivoService } from '../../../../services/activo.service';
import { LaborService } from '../../../../services/labor.service';
import { SelectionService } from '../../../../services/selection.service';
import { TareaService } from '../../../../services/tareas.service';


@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent implements OnInit {
  labor: Labor[] = [];
  selectorLabor: number | null = null;
  activoTareas: any[] = [];
  tareas: any[] = [];
  id_activo: number | null = null;
  id_labor: number | null = null;

  constructor(private laborService: LaborService, private selectionService: SelectionService, private activoTareaService: ActivoTareaService, private activoService: ActivoService, private tareasService: TareaService) {}

  onLaborSelected(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const id = Number(selectElement.value);
    this.laborService.setSelectedLabor(id);
    this.selectionService.setlabor(id); 
  }

  ngOnInit(): void {
    this.laborService.obtenerLabores().subscribe(
      (data: Labor[]) => {
        this.labor = data;
      },
      (error: any) => {
        console.error('Error al obtener labores:', error);
      }
    );

    this.activoService.selectedActivoId$.subscribe(activo => {
      this.id_activo = activo;
      console.log('Activo:', this.id_activo, '- Labor:', this.id_labor);
      if (this.id_activo && this.id_labor) {
        this.obtenerActivoTareas(this.id_activo, this.id_labor);
      }
    })

    this.laborService.selectedLaborId$.subscribe(labor_id => {
      this.id_labor = labor_id;
      console.log('Activo:', this.id_activo, ' - Labor:', this.id_labor);
      if (this.id_activo && this.id_labor) {
        this.obtenerActivoTareas(this.id_activo, this.id_labor);
      }
    })
  }
  setLabor($event: any) {
    this.laborService.setSelectedLabor($event.target.value);
  }

  obtenerActivoTareas(id_activo: number, id_labor: number) {
    const consulta = {
      "id_activo": id_activo,
      "id_labor": id_labor
    };
    this.activoTareaService.getActivoTareas(consulta).subscribe(
      (data: any[]) => {
        this.activoTareas = data;
        console.log(this.activoTareas);
      },
      error => {
        console.error('Error al obtener las tareas:', error);
      }
    );
  }
  obtenertareas(descripcion: string) {
    this.tareasService.obtenerTareas().subscribe({
      next: (data: Tarea[]) => {
        this.tareas = data;
        console.log(this.tareasService)
      },
      error: (err) => {
        console.error('Error al cargar los tareas:', err);
      }
    }
    )
  }
}
