import { Component } from '@angular/core';
import { OtService } from '../../../../services/ot.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrl: './cuerpo.component.css',
})
export class CuerpoComponent {
  selectorData = {
    códigoÚnico: '',
    activo: '',
    piso: '',
    edificio: '',
    sector: '',
    ubicacion: '',
    tag: 0,
  };
  dateData = {
    usuario: 0,
    fecha_creacion: new Date(),
    fecha_finalizacion: new Date(),
    tiempo_inicio: new Date(),
    tiempo_finalizacion: new Date(),
  };

  constructor(private otService: OtService, private router: Router) {}

  volver(){
    this.router.navigate(['/inicioAdmin']);
  }

  CrearOt() {
    const orden = {
      id_usuarios: this.dateData.usuario,
      id_tag: this.selectorData.tag,
      id_estado: 1,
      descripcion: 'Orden de trabajo',
      fecha_creacion: this.dateData.fecha_creacion,
      fecha_finalizacion: this.dateData.fecha_finalizacion,
      tiempo_inicio: this.dateData.tiempo_inicio,
      tiempo_finalizacion: this.dateData.tiempo_finalizacion,
    };

    console.log(orden);
    this.otService.crearOt(orden).subscribe({
      next: (data) => {
        console.log('OT creada', data);
        alert('Orden de trabajo creada exitosamente');
      },
      error: (error) => {
        console.error(error);
        alert('Hubo un error al crear la orden de trabajo');
      },
    });
  }
}
