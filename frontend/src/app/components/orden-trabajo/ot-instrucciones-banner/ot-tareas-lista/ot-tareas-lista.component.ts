import { Component, OnInit } from '@angular/core';
import { ActivoTareaService } from '../../../../../services/activo-tarea.service';
import { ActivoService } from '../../../../../services/activo.service';
import { LaborService } from '../../../../../services/labor.service';
import { SelectionService } from '../../../../../services/selection.service';
import { TareaService } from '../../../../../services/tareas.service';
import { Tarea } from '../../../../interfaces/tarea';

@Component({
  selector: 'app-ot-tareas-lista',
  templateUrl: './ot-tareas-lista.component.html',
  styleUrls: ['./ot-tareas-lista.component.css']
})
export class OtTareaListaComponent implements OnInit {
  activoTareas: any[] = [];
  tareas: any[] = [];
  id_activo: number | null = null;
  id_labor: number | null = null;

  constructor(private laborService: LaborService, private selectionService: SelectionService, private activoTareaService: ActivoTareaService, private activoService: ActivoService, private tareasService: TareaService) { }

  ngOnInit() {
    this.activoService.selectedActivoId$.subscribe(activo => {
      this.id_activo = activo;
      console.log('Activo:', this.id_activo, '- Labor:', this.id_labor);
      if (this.id_activo && this.id_labor) {
        this.obtenerActivoTareas(this.id_activo, this.id_labor);
      }
    })

    this.laborService.selectedLaborId$.subscribe(labor => {
      this.id_labor = labor;
      console.log('Activo:', this.id_activo, ' - Labor:', this.id_labor);
      if (this.id_activo && this.id_labor) {
        this.obtenerActivoTareas(this.id_activo, this.id_labor);
      }
    })
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
