import { Component, OnInit } from '@angular/core';
import { LaborService } from '../../../../../services/tareaxactivo.service';
import { Labor } from '../../../../interfaces/labor';
import { SelectionService } from '../../../../../services/selection.service';

@Component({
  selector: 'app-ot-labor',
  templateUrl: './ot-labor.component.html',
  styleUrls: ['./ot-labor.component.css']
})
export class OtLaborComponent implements OnInit {
  labor: Labor[] = [];  // Arreglo para almacenar las tareas
  selectorlabor: number | null = null;
  constructor(private LaborService: LaborService, private selectionService: SelectionService) {}

  onlavorSelected(id: number) {
    this.selectionService.setlabor(id);
  }

  ngOnInit(): void {
    // Llama al servicio para obtener las tareas y suscribirse a los datos
    this.LaborService.obtenerlabor().subscribe(
      (data: Labor[]) => {
        this.labor = data; 
      },
      error => {
        console.error('Error al obtener labores:', error);
      }
    );
  }
}
