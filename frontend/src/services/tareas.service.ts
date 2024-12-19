import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../app/interfaces/tarea';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  obtenerTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${environment.urlBase}/obtener_tareas`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: `Bearer ${this.authService.getToken()}`,
      }),
    });
  }

  crearTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(`${environment.urlBase}/crear_tarea`, tarea, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: `Bearer ${this.authService.getToken()}`,
      }),
    });
  }

  editarTarea(id_tarea: number, tarea: Tarea): Observable<Tarea> {
    return this.http.patch<Tarea>(
      `${environment.urlBase}/editar_tarea/${id_tarea}`,
      tarea,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }

  eliminarTarea(id_tarea: number): Observable<void> {
    return this.http.delete<void>(
      `${environment.urlBase}/eliminar_tarea/${id_tarea}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }
}
