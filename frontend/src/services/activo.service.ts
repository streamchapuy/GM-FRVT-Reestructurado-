import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Activo } from '../app/interfaces/activo';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {
  private apiUrl = 'http://127.0.0.1:3307/API';
  private selectedActivoId = new BehaviorSubject <number | null >(null);
  selectedActivoId$ = this.selectedActivoId.asObservable();

  constructor(private http: HttpClient) { }
  
  obtenerActivos(): Observable<Activo[]> {
    return this.http.get<Activo[]>(`${this.apiUrl}/activos`);
  }
  
  setSelectedActivo(id_activo: number) {
    this.selectedActivoId.next(id_activo); // Establecer id_activo seleccionado
  }

  crearActivo(activo: Activo): Observable<Activo> {
    return this.http.post<Activo>(`${this.apiUrl}/activos`, activo);
  }

  editarActivo(activo: Activo): Observable<Activo> {
    return this.http.put<Activo>(`${this.apiUrl}/activos/${activo.id_activo}`, activo);
  }

  eliminarActivo(id_activo: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/activos/${id_activo}`);
  }

  obtenerActivoPorId(id_activo: number): Observable<Activo> {
    return this.http.get<Activo>(`${this.apiUrl}/obtener_activo/${id_activo}`);
  }
}