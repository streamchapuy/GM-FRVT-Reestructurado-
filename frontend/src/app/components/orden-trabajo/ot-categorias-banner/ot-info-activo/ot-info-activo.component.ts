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
    const id = Number(selectElement.value); // Convierte el valor a número
    this.selectionService.setActivo(id);
  }

  ngOnInit(): void {
    this.loadActivos();
  }

  loadActivos() {
    this.activoService.obtenerActivos().subscribe({
      next: (data: Activo[]) => {
        this.activos = data;
        console.log(this.activos);
      },
      error: (err) => {
        console.error('Error al cargar los activos:', err);
      }
    });
  }
}
