import { Component, OnInit } from '@angular/core';
import { EdificioService } from '../../../../../services/edificio.service';
import { Edificio } from '../../../../interfaces/edificio';

@Component({
  selector: 'app-ot-info-edificio',
  templateUrl: './ot-info-edificio.component.html',
  styleUrl: './ot-info-edificio.component.css'
})
export class OtInfoEdificioComponent implements OnInit{
  edificios: Edificio[] = [];
  selectorEdificio: number | null = null;
  constructor(private edificioService: EdificioService) { }

  ngOnInit(): void {
    this.loadEdificios();
  }
  loadEdificios() {
    this.edificioService.obtenerEdificio().subscribe({
      next: (data: Edificio[]) => {
        this.edificios = data;
        console.log(this.edificios);
      },
      error: (err) => {
        console.error('Error al cargar los edificios:', err);
      }
    });
  }
}
