import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../../../services/selection.service';
import { ActivoTareaService } from '../../../../../services/activo-tarea.service';
import { LaborService } from '../../../../../services/labor.service';
import { ActivoService } from '../../../../../services/activo.service';

@Component({
  selector: 'app-ot-tareas-lista',
  templateUrl: './ot-tareas-lista.component.html',
  styleUrls: ['./ot-tareas-lista.component.css']
})
export class OtTareaListaComponent implements OnInit {
  activoTareas: any[] = [];
  id_activo: number | null = null;
  id_labor: number | null = null;

  constructor(private laborService: LaborService, private selectionService: SelectionService, private activoTareaService: ActivoTareaService, private activoService : ActivoService) { }

  ngOnInit() {
     this.activoService.selectedActivoId$.subscribe(activo => {
      this.id_activo = activo;
      console.log('Activo:', this.id_activo, '- Labor:', this.id_labor);
      if (this.id_activo && this.id_labor) {
        this.obtenerActivoTareas(this.id_activo, this.id_labor); // Pasar los argumentos aquí
      }
    })
    
    this.laborService.selectedLaborId$.subscribe(labor => {
      this.id_labor = labor;
      console.log('Activo:', this.id_activo, ' - Labor:', this.id_labor);
      if (this.id_activo && this.id_labor) {
        this.obtenerActivoTareas(this.id_activo, this.id_labor); // Pasar los argumentos aquí
      }
    })
  }

  obtenerActivoTareas(id_activo: number, id_labor: number) {
    this.activoTareaService.getActivoTareas(id_activo, id_labor).subscribe( // Pasar los parámetros correctamente
      (data: any[]) => {
        this.activoTareas = data;
      },
      error => {
        console.error('Error al obtener las tareas:', error);
      }
    );
  }
}
