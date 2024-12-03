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
    return this.http.get<Ubicacion[]>(`${this.apiUrl}/obtener_ubicaciones`);
  }

  obtenerUbicacionPorId(id_ubicacion:number): Observable<Ubicacion>{
    return this.http.get<Ubicacion>(`${this.apiUrl}/obtener_ubicacion/${id_ubicacion}`);
  }

  crearUbicacion(ubicacion: Ubicacion): Observable<Ubicacion[]> {
    return this.http.post<Ubicacion[]>(`${this.apiUrl}/crear_ubicacion`, ubicacion);
  }

  editarUbicacion(id_ubicacion: number, ubicacion: Ubicacion): Observable<Ubicacion[]> {
    return this.http.patch<Ubicacion[]>(`${this.apiUrl}/editar_ubicacion/${id_ubicacion}`, ubicacion);
  }

  eliminarUbicacion(id_ubicacion: number): Observable<Ubicacion[]> {
    return this.http.delete<Ubicacion[]>(`${this.apiUrl}/eliminar_ubicacion/${id_ubicacion}`);
  }
}
