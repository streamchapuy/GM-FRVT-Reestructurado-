import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubicacion } from '../app/interfaces/ubicacion';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UbicacionService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  obtenerUbicacion(): Observable<Ubicacion[]> {
    return this.http.get<Ubicacion[]>(
      `${environment.urlBase}/obtener_ubicaciones`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }

  obtenerUbicacionPorId(id_ubicacion: number): Observable<Ubicacion> {
    return this.http.get<Ubicacion>(
      `${environment.urlBase}/obtener_ubicacion/${id_ubicacion}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }

  crearUbicacion(ubicacion: Ubicacion): Observable<Ubicacion[]> {
    return this.http.post<Ubicacion[]>(
      `${environment.urlBase}/crear_ubicacion`,
      ubicacion,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }

  editarUbicacion(
    id_ubicacion: number,
    ubicacion: Ubicacion
  ): Observable<Ubicacion[]> {
    return this.http.patch<Ubicacion[]>(
      `${environment.urlBase}/editar_ubicacion/${id_ubicacion}`,
      ubicacion,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }

  eliminarUbicacion(id_ubicacion: number): Observable<Ubicacion[]> {
    return this.http.delete<Ubicacion[]>(
      `${environment.urlBase}/eliminar_ubicacion/${id_ubicacion}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }
}
