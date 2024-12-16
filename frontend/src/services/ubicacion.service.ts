import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubicacion } from '../app/interfaces/ubicacion';
import { environment } from '../environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private http: HttpClient) { }

  obtenerUbicacion(): Observable<Ubicacion[]> {
    return this.http.get<Ubicacion[]>(`${environment.urlBase}/obtener_ubicaciones`);
  }

  obtenerUbicacionPorId(id_ubicacion:number): Observable<Ubicacion>{
    return this.http.get<Ubicacion>(`${environment.urlBase}/obtener_ubicacion/${id_ubicacion}`);
  }

  crearUbicacion(ubicacion: Ubicacion): Observable<Ubicacion[]> {
    return this.http.post<Ubicacion[]>(`${environment.urlBase}/crear_ubicacion`, ubicacion);
  }

  editarUbicacion(id_ubicacion: number, ubicacion: Ubicacion): Observable<Ubicacion[]> {
    return this.http.patch<Ubicacion[]>(`${environment.urlBase}/editar_ubicacion/${id_ubicacion}`, ubicacion);
  }

  eliminarUbicacion(id_ubicacion: number): Observable<Ubicacion[]> {
    return this.http.delete<Ubicacion[]>(`${environment.urlBase}/eliminar_ubicacion/${id_ubicacion}`);
  }
}
