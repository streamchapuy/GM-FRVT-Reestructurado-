import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../../services/tareas.service';
import { Tarea } from '../../../interfaces/tarea';

@Component({
  selector: 'app-form-tareas',
  templateUrl: './form-tareas.component.html',
  styleUrls: ['./form-tareas.component.css']
})
export class FormTareasComponent implements OnInit {
  tarea: Tarea = {
    id_tarea: 0,
    descripcion: '',
    id_existencia: 0,
  };

  existencias = [
    { id_existencia: 1, nombre: 'Sí' },
    { id_existencia: 0, nombre: 'No' }
  ];

  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.obtenerTareas();
  }

  obtenerTareas(): void {
    this.tareaService.obtenerTareas().subscribe(
      (data: Tarea[]) => {
        this.tareas = data;
      },
      error => {
        console.error('Error al obtener tareas', error);
      }
    );
  }

  crear(): void {
    this.tareaService.crearTarea(this.tarea).subscribe(
      (nuevaTarea: Tarea) => {
        this.tareas.push(nuevaTarea);
        this.limpiarFormulario();
      },
      error => {
        console.error('Error al crear tarea', error);
      }
    );
  }

  editar(): void {
    this.tareaService.editarTarea(this.tarea.id_tarea, this.tarea).subscribe(
      () => {
        const index = this.tareas.findIndex(t => t.id_tarea === this.tarea.id_tarea);
        if (index !== -1) {
          this.tareas[index] = this.tarea;
        }
        this.limpiarFormulario();
      },
      error => {
        console.error('Error al editar tarea', error);
      }
    );
  }

  eliminar(): void {
    this.tareaService.eliminarTarea(this.tarea.id_tarea).subscribe(
      () => {
        this.tareas = this.tareas.filter(t => t.id_tarea !== this.tarea.id_tarea);
        this.limpiarFormulario();
      },
      error => {
        console.error('Error al eliminar tarea', error);
      }
    );
  }

  seleccionarTarea(tarea: Tarea): void {
    this.tarea = { ...tarea };
  }

  limpiarFormulario(): void {
    this.tarea = {
      id_tarea: 0,
      descripcion: '',
      id_existencia: 0
    };
  }
}

