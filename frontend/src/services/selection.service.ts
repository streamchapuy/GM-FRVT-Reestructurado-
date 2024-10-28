import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  private activoSource = new BehaviorSubject<number | null>(null);
  private tareaxactivoSource = new BehaviorSubject<number | null>(null);

  activo$ = this.activoSource.asObservable();
  tareaxactivo$ = this.tareaxactivoSource.asObservable();

  setActivo(id: number) {
    this.activoSource.next(id);
  }

  setTareaxactivo(id: number) {
    this.tareaxactivoSource.next(id);
  }
}
