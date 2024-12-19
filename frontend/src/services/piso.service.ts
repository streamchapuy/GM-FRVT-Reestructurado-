import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Piso } from '../app/interfaces/piso';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class PisoService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  obtenerPisos(): Observable<Piso[]> {
    return this.http.get<Piso[]>(`${environment.urlBase}/obtener_pisos`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: `Bearer ${this.authService.getToken()}`,
      }),
    });
  }

  obtenerPisoPorId(id_piso: number): Observable<Piso> {
    return this.http.get<Piso>(
      `${environment.urlBase}/obtener_piso/${id_piso}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }

  crearPiso(piso: Piso): Observable<Piso> {
    return this.http.post<Piso>(`${environment.urlBase}/crear_piso`, piso, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: `Bearer ${this.authService.getToken()}`,
      }),
    });
  }

  editarPiso(piso: Piso): Observable<Piso> {
    return this.http.patch<Piso>(
      `${environment.urlBase}/editar_piso/${piso.id_piso}`,
      piso,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }

  eliminarPiso(id_piso: number): Observable<void> {
    return this.http.delete<void>(
      `${environment.urlBase}/eliminar_piso/${id_piso}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }
}
