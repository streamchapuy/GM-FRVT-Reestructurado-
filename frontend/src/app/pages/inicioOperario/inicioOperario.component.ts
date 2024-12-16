import { Component } from '@angular/core';

@Component({
  selector: 'inicioOperario',
  templateUrl: './inicioOperario.component.html',
  styleUrls: ['./inicioOperario.component.css']
})
export class inicioOperarioComponent {
  constructor() { }

  buttons = [
    { link: '/formOT', imgSrc: '../../../assets/img/img-home/ot.png', altText: 'Órdenes asignadas', label: 'Órdenes asignadas' },
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

}

