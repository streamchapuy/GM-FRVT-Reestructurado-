import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Edificio } from '../app/interfaces/edificio';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class EdificioService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  obtenerEdificio(): Observable<Edificio[]> {
    return this.http.get<Edificio[]>(
      `${environment.urlBase}/obtener_edificios`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }

  obtenerEdificioPorId(id_edificio: number): Observable<Edificio> {
    return this.http.get<Edificio>(
      `${environment.urlBase}/obtener_edificio/${id_edificio}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }

  editarEdificio(
    id_edificio: number,
    edificio: Edificio
  ): Observable<Edificio> {
    return this.http.patch<Edificio>(
      `${environment.urlBase}/editar_edificios/${id_edificio}`,
      edificio,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }

  crearEdificio(edificio: Edificio): Observable<Edificio> {
    return this.http.post<Edificio>(
      `${environment.urlBase}/crear_edificios`,
      edificio,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }

  eliminarEdificio(id_edificio: number): Observable<void> {
    return this.http.delete<void>(
      `${environment.urlBase}/eliminar_edificios/${id_edificio}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }
}
