import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubicacion } from '../app/interfaces/ubicacion';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient) { }

  obtenerUbicacion(): Observable<Ubicacion[]> {
    return this.http.get<Ubicacion[]>(`${this.apiUrl}/ubicaciones`);
  }

  crearUbicacion(ubicacion: Ubicacion): Observable<Ubicacion[]> {
    return this.http.post<Ubicacion[]>(`${this.apiUrl}/ubicacion`, ubicacion);
  }

  editarUbicacion(id: number, ubicacion: Ubicacion): Observable<Ubicacion[]> {
    return this.http.put<Ubicacion[]>(`${this.apiUrl}/ubicaciones/${id}`, ubicacion);
  }

  eliminarUbicacion(id: number): Observable<Ubicacion[]> {
    return this.http.delete<Ubicacion[]>(`${this.apiUrl}/ubicacion/${id}`);
  }
}
