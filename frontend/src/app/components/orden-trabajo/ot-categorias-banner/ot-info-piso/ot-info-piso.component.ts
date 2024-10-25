import { Component, OnInit } from '@angular/core';
import { PisoService } from '../../../../../services/piso.service';
import { Piso } from '../../../../interfaces/piso';

@Component({
  selector: 'app-ot-info-piso',
  templateUrl: './ot-info-piso.component.html',
  styleUrl: './ot-info-piso.component.css'
})
export class OtInfoPisoComponent implements OnInit{
  pisos: Piso[] = [];
  selectorPiso: number | null = null;
  constructor(private pisoService: PisoService) { }

  ngOnInit(): void {
    this.loadPisos();
  }
  loadPisos() {
    this.pisoService.obtenerPiso().subscribe({
      next: (data: Piso[]) => {
        this.pisos = data;
        console.log(this.pisos);
      },
      error: (err) => {
        console.error('Error al cargar los pisos:', err);
      }
    });
  }
}