import { Component } from '@angular/core';

@Component({
  selector: 'app-inicioAdmin',
  templateUrl: './inicioAdmin.component.html',
  styleUrls: ['./inicioAdmin.component.css']
})
export class inicioAdminComponent  {

  constructor() { }

  buttons = [
    { link: '/ordenTrabajo', imgSrc: '../../../assets/img/img-home/crear_ot.png', altText: 'GenerarOt', label: 'Crear Orden de Trabajo' },
    { link: '/formOT', imgSrc: '../../../assets/img/img-home/ot.png', altText: 'Órdenes de Trabajo', label: 'Órdenes de Trabajo Creadas' },
    { link: '/formActivo', imgSrc: '../../../assets/img/img-home/activo.png', altText: 'Activos', label: 'Activos' },
    { link: '/formEdificio', imgSrc: '../../../assets/img/img-home/edificio.png', altText: 'Edificios', label: 'Edificios' },
    { link: '/formPiso', imgSrc: '../../../assets/img/img-home/piso.png', altText: 'Pisos', label: 'Pisos' },
    { link: '/formSector', imgSrc: '../../../assets/img/img-home/sector.png', altText: 'Sector', label: 'Sectores' },
    { link: '/formUbicacion', imgSrc: '../../../assets/img/img-home/ubicacion.png', altText: 'Ubicacion', label: 'Ubicación' },
    { link: '/formUsuarios', imgSrc: '../../../assets/img/img-home/usuario.png', altText: 'Usuarios', label: 'Usuarios' },
    { link: '/formTareas', imgSrc: '../../../assets/img/img-home/tarea.png', altText: 'Tareas', label: 'Tareas' },
    { link: '/formLabor', imgSrc: '../../../assets/img/img-home/labor.png', altText: 'Labor', label: 'Labores' },
  ];

  maxVisible = 4;
  currentIndex = 0;

  touchStartY = 0;
  touchEndY = 0;

  get visibleButtons() {
    return this.buttons.slice(this.currentIndex, this.currentIndex + this.maxVisible);
  }

  next() {
    if (this.currentIndex + this.maxVisible < this.buttons.length) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartY = event.touches[0].clientY;
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndY = event.touches[0].clientY;

    
    if (this.touchStartY - this.touchEndY > 50) {
      this.next();
    }

    
    if (this.touchEndY - this.touchStartY > 50) {
      this.prev();
    }
  }

}
