import { Component, OnInit } from '@angular/core';
import { OtActivoService } from '../../../../../services/ot-activo.service';
import { Activo } from '../../../../interfaces/activo';

@Component({
  selector: 'app-ot-info-activo',
  templateUrl: './ot-info-activo.component.html',
  styleUrl: './ot-info-activo.component.css'
})
export class OtInfoActivoComponent implements OnInit{
  activos: Activo[] = [];
  selectorActivo: number | null = null;
  constructor(private activoService: OtActivoService) { }

  ngOnInit(): void {
    this.loadActivos();
  }
  loadActivos() {
    this.activoService.obtenerActivo().subscribe({
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
