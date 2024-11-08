import { Component, OnInit } from '@angular/core';
import { ActivoService } from '../../../../../services/activo.service';
import { Activo } from '../../../../interfaces/activo';
import { SelectionService } from '../../../../../services/selection.service';

@Component({
  selector: 'app-ot-info-activo',
  templateUrl: './ot-info-activo.component.html',
  styleUrls: ['./ot-info-activo.component.css']
})
export class OtInfoActivoComponent implements OnInit {
  activos: Activo[] = [];
  selectorActivo: number | null = null;

  constructor(private activoService: ActivoService, private selectionService: SelectionService) {}

  onActivoSelected(event: Event) {
    const selectElement = event.target as HTMLSelectElement; // Haciendo casting
    const id = Number(selectElement.value); 
    this.activoService.setSelectedActivo(id);
    this.selectionService.setActivo(id);
  }

  ngOnInit(): void {
    this.activoService.obtenerActivos().subscribe(
      (data: Activo[]) => {
        this.activos = data; 
      },
      error => {
        console.error('Error al obtener activos:', error);
      }
    );
  }

  
  setActivo($event: any) {
    this.activoService.setSelectedActivo($event.target.value);
  }
}
