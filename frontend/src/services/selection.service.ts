import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  private activoSource = new BehaviorSubject<number | null>(null);
  private laborSource = new BehaviorSubject<number | null>(null);

  activo$ = this.activoSource.asObservable();
  labor$ = this.laborSource.asObservable();

  setActivo(id: number) {
    this.activoSource.next(id);
  }

  setlabor(id: number) {
    this.laborSource.next(id);
  }
}
