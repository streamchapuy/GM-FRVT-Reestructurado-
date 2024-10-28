import { Component, OnInit } from '@angular/core';
import { TareaxactivoService } from '../../../../../services/tareaxactivo.service';
import { TareaxActivo } from '../../../../interfaces/tareaxactivo';

@Component({
  selector: 'app-ot-labor',
  templateUrl: './ot-labor.component.html',
  styleUrls: ['./ot-labor.component.css']
})
export class OtLaborComponent implements OnInit {
  tareaxaxtivos: TareaxActivo[] = [];  // Arreglo para almacenar las tareas
  selectortareaxactivo: number | null = null;
  constructor(private tareaxactivoService: TareaxactivoService) {}

  ngOnInit(): void {
    // Llama al servicio para obtener las tareas y suscribirse a los datos
    this.tareaxactivoService.obtenertareaxactivo().subscribe(
      (data: TareaxActivo[]) => {
        this.tareaxaxtivos = data; 
      },
      error => {
        console.error('Error al obtener las tareas:', error);
      }
    );
  }
}
