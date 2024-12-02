import { Component, OnInit } from '@angular/core';
import { OtService } from '../../../../services/ot.service';
import { NumeroOT } from '../../../interfaces/numero-ot';

@Component({
  selector: 'app-form-ot',
  templateUrl: './form-ot.component.html',
  styleUrls: ['./form-ot.component.css']
})
export class FormOtComponent implements OnInit {
  numeroOT: NumeroOT[] = [];
  

  constructor(private otService: OtService) {}

  ngOnInit(): void {
    this.obtenerOt();
  }

  obtenerOt(): void {
    this.otService.obtenerOt().subscribe(
      (data: NumeroOT[]) => {
        this.numeroOT = data;
      },
      (error) => {
        console.error('Error al obtener las órdenes de trabajo', error);
      }
    );
  }
}
