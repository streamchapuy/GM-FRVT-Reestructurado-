import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Labor } from '../app/interfaces/labor';

@Injectable({
  providedIn: 'root',
})
export class LaborService {
  private apiUrl = 'http://127.0.0.1:3307/API';
  private selectedLaborId = new BehaviorSubject<number | null>(null);
  selectedLaborId$ = this.selectedLaborId.asObservable();

  constructor(private http: HttpClient) {}

  obtenerLabores(): Observable<Labor[]> {
    return this.http.get<Labor[]>(`${this.apiUrl}/obtener_labores`);
  }

  obtenerLaborPorId(id_labor: number): Observable<Labor> {
    return this.http.get<Labor>(`${this.apiUrl}/obtener_labor/${id_labor}`);
  }

  crearLabor(labor: Labor): Observable<Labor> {
    return this.http.post<Labor>(`${this.apiUrl}/crear_labor`, labor);
  }

  editarLabor(id_labor: number, labor: Labor): Observable<Labor> {
    return this.http.patch<Labor>(`${this.apiUrl}/editar_labor/${id_labor}`, labor);
  }

  eliminarLabor(id_labor: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar_labor/${id_labor}`);
  }

  setSelectedLabor(id_labor: number) {
    this.selectedLaborId.next(id_labor);
  }
}
