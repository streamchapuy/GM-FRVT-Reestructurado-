import { Component, OnInit } from '@angular/core';
import { CodigoService } from '../../../../../services/codigo.service';
import { CodigoActivo } from '../../../../interfaces/codigo-activo';


@Component({
  selector: 'app-ot-info-codigo',
  templateUrl: './ot-info-codigo.component.html',
  styleUrl: './ot-info-codigo.component.css'
})
export class OtInfoCodigoComponent implements OnInit {
  CodigoActivo: CodigoActivo [] = [];
  selectorcodigo: number | null = null;
  constructor(private CodigoService: CodigoService) { }

  ngOnInit(): void {
    this.loadOts();
  }
  loadOts() {
    this.CodigoService.obtenerCodigoActivo().subscribe({
      next: (data: CodigoActivo[]) => {
        this.CodigoActivo = data;
        console.log(this.CodigoActivo);
      },
      error: (err) => {
        console.error('Error al cargar los :', err);
      }
    });
  }



}
