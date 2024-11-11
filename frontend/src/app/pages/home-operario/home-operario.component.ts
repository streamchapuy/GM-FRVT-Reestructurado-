import { Component } from '@angular/core';

@Component({
  selector: 'app-home-operario',
  templateUrl: './home-operario.component.html',
  styleUrls: ['./home-operario.component.css']
})
export class HomeOperarioComponent {
  mostrarPendientes: boolean = false;
  mostrarTerminadas: boolean = true;

  mostrarComponentePendientes(): void {
    this.mostrarPendientes = false;
    this.mostrarTerminadas = true;
  }

  mostrarComponenteTerminadas(): void {
    this.mostrarPendientes = true;
    this.mostrarTerminadas = false;
  }
}
