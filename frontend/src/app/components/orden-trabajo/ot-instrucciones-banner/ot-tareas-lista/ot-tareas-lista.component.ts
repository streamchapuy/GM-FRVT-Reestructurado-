import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../../../../../services/selection.service';
import { ActivoTareaService } from '../../../../../services/activo-tarea.service'; // Asegúrate de tener el servicio para obtener activo-tarea

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
      this.selectionService.tareaxactivo$.subscribe(id_tareaxactivo => {
        if (id_activo && id_tareaxactivo) {
          this.obtenerActivoTareas(id_activo, id_tareaxactivo);
        }
      });
    });
  }

  // obtenerActivoTareas(id_activo: number, id_tareaxactivo: number) {
  //   this.activoTareaService.getActivoTareas(id_activo, id_tareaxactivo).subscribe(
  //     (data) => {
  //       this.activoTareas = data; // Asigna los datos a la variable para mostrarlos en la vista
  //     },
  //     (error) => {
  //       console.error("Error al obtener las tareas del activo:", error);
  //     }
  //   );
  // }
}

