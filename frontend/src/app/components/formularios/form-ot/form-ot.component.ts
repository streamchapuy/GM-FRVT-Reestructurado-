import { Component, OnInit } from '@angular/core';
import { OtService } from '../../../../services/ot.service';
import { NumeroOT } from '../../../interfaces/numero-ot';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-ot',
  templateUrl: './form-ot.component.html',
  styleUrls: ['./form-ot.component.css']
})
export class FormOtComponent implements OnInit {


  numeroOT: NumeroOT []=[];
  currentPage: number = 0;
  itemsPerPage: number = 6;
  Math: any = Math;
  

  constructor(private otService: OtService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerOt();
  }

  volver(){
    this.router.navigate(['/inicioAdmin']);
  }

  get paginadoActivos() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.numeroOT.slice(start, end);
  }
  
  nextPage(): void {
    if (this.currentPage < Math.ceil(this.numeroOT.length / this.itemsPerPage) - 1) {
      this.currentPage++;
    }
  }
  
  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }


  obtenerOt(): void {
    this.otService.obtenerOt().subscribe((data: NumeroOT[]) => {
        this.numeroOT = data;
      });  
  }
}
