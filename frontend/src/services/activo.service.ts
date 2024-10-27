import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activo } from '../app/interfaces/activo';

@Injectable({
  providedIn: 'root'
})
export class ActivoService {
  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient) { }

  obtenerActivos(): Observable<Activo[]> {
    return this.http.get<Activo[]>(`${this.apiUrl}/activos`);
  }

  crear(activo: Activo): Observable<Activo> {
    return this.http.post<Activo>(`${this.apiUrl}/activos`, activo);
  }

  actualizar(id_activo: number, activo: Activo): Observable<Activo> {
    return this.http.put<Activo>(`${this.apiUrl}/activos/${id_activo}`, activo);
  }

  eliminar(id_activo: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/activos/${id_activo}`);
  }

  obtenerActivoPorId(id_activo: number): Observable<Activo> {
    return this.http.get<Activo>(`${this.apiUrl}/activos/${id_activo}`);
  }
}