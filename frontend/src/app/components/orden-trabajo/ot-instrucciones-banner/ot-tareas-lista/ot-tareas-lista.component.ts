import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../../../services/selection.service';
import { ActivoTareaService } from '../../../../../services/activo-tarea.service';

@Component({
  selector: 'app-ot-tareas-lista',
  templateUrl: './ot-tareas-lista.component.html',
  styleUrls: ['./ot-tareas-lista.component.css']
})

export class OtTareaListaComponent implements OnInit {
  activoTareas: any[] = [];
  obtenerActivoTareas: any;

  constructor(private selectionService: SelectionService, private activoTareaService: ActivoTareaService) {}

  ngOnInit() {
    this.selectionService.activo$.subscribe(id_activo => {
      this.selectionService.labor$.subscribe(id_labor => {
        if (id_activo && id_labor) {
          this.obtenerActivoTareas(id_activo, id_labor);
        }
      });
    });
  }
}

