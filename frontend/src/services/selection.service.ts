import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  private activoSubject = new BehaviorSubject<number | null>(null);
  private laborSubject = new BehaviorSubject<number | null>(null);

  activo$ = this.activoSubject.asObservable();
  labor$ = this.laborSubject.asObservable();

  setActivo(id: number) {
    this.activoSubject.next(id);
  }

  getActivo(): number | null {
    return this.activoSubject.value;
  }

  setlabor(id: number) {
    this.laborSubject.next(id);
  }

  getLabor(): number | null {
    return this.laborSubject.value;
  }
}
