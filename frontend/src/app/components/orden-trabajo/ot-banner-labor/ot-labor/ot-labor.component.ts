import { Component, OnInit } from '@angular/core';
import { LaborService } from '../../../../../services/labor.service';
import { Labor } from '../../../../interfaces/labor';
import { SelectionService } from '../../../../../services/selection.service';

@Component({
  selector: 'app-ot-labor',
  templateUrl: './ot-labor.component.html',
  styleUrls: ['./ot-labor.component.css']
})
export class OtLaborComponent implements OnInit {
  labor: Labor[] = [];
  selectorLabor: number | null = null;

  constructor(private laborService: LaborService, private selectionService: SelectionService) {}

  onLaborSelected(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Haciendo casting
    const id = Number(selectElement.value); // Convierte el valor a número
    this.laborService.setSelectedLabor(id);
    this.selectionService.setlabor(id); // Opcional
  }

  ngOnInit(): void {
    this.laborService.obtenerlabor().subscribe(
      (data: Labor[]) => {
        this.labor = data; 
      },
      error => {
        console.error('Error al obtener labores:', error);
      }
    );
  }
  setLabor($event: any) {
    this.laborService.setSelectedLabor($event.target.value);
  }
}
