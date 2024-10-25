import { Component, OnInit } from '@angular/core';
import { NumeroOTService } from '../../../../../services/numero-ot.service';
import { NumeroOT } from '../../../../interfaces/numero-ot';


@Component({
  selector: 'app-ot-info-codigo',
  templateUrl: './ot-info-codigo.component.html',
  styleUrl: './ot-info-codigo.component.css'
})
export class OtInfoCodigoComponent implements OnInit {
  ots: NumeroOT[] = [];
  selectorOT: number | null = null;
  constructor(private otService: NumeroOTService) { }

  ngOnInit(): void {
    this.loadOts();
  }
  loadOts() {
    this.otService.obtenerNumeroOT().subscribe({
      next: (data: NumeroOT[]) => {
        this.ots = data;
        console.log(this.ots);
      },
      error: (err) => {
        console.error('Error al cargar los OT:', err);
      }
    });
  }



}
