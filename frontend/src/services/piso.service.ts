import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Piso } from '../app/interfaces/piso';

@Injectable({
  providedIn: 'root'
})
export class PisoService {
  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient) { }

  obtenerPisos(): Observable<Piso[]> {
    return this.http.get<Piso[]>(`${this.apiUrl}/pisos`);
  }
  
  obtenerPisoPorId(id: number): Observable<Piso> {
    return this.http.get<Piso>(`${this.apiUrl}/obtener_piso/${id}`);
  }

  crearPiso(piso: Piso): Observable<Piso> {
    return this.http.post<Piso>(`${this.apiUrl}/pisos`, piso);
  }

  editarPiso(piso: Piso): Observable<Piso> {
    return this.http.put<Piso>(`${this.apiUrl}/pisos/${piso.id_piso}`, piso);
  }

  eliminarPiso(id_piso: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/pisos/${id_piso}`);
  }
}
