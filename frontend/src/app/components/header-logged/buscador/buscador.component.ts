import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent {
  @Output() searchTerm = new EventEmitter<string>();

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm.emit(target.value);
  }
}
