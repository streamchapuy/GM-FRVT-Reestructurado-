import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Labor } from '../app/interfaces/labor';
import { environment } from '../environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class LaborService {
  private selectedLaborId = new BehaviorSubject<number | null>(null);
  selectedLaborId$ = this.selectedLaborId.asObservable();

  constructor(private http: HttpClient) {}

  obtenerLabores(): Observable<Labor[]> {
    return this.http.get<Labor[]>(`${environment.urlBase}/obtener_labores`);
  }

  obtenerLaborPorId(id_labor: number): Observable<Labor> {
    return this.http.get<Labor>(`${environment.urlBase}/obtener_labor/${id_labor}`);
  }

  crearLabor(labor: Labor): Observable<Labor> {
    return this.http.post<Labor>(`${environment.urlBase}/crear_labor`, labor);
  }

  editarLabor(id_labor: number, labor: Labor): Observable<Labor> {
    return this.http.patch<Labor>(`${environment.urlBase}/editar_labor/${id_labor}`, labor);
  }

  eliminarLabor(id_labor: number): Observable<void> {
    return this.http.delete<void>(`${environment.urlBase}/eliminar_labor/${id_labor}`);
  }

  setSelectedLabor(id_labor: number) {
    this.selectedLaborId.next(id_labor);
  }
}
