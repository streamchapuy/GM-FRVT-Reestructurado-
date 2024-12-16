import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../app/interfaces/tarea';
import { environment } from '../environments/environment.development';



@Injectable({
  providedIn: 'root',
})
export class TareaService {

  constructor(private http: HttpClient) { }

  obtenerTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${environment.urlBase}/obtener_tareas`);
  }

  crearTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(`${environment.urlBase}/crear_tarea`, tarea);
  }

  editarTarea(id_tarea: number, tarea: Tarea): Observable<Tarea> {
    return this.http.patch<Tarea>(`${environment.urlBase}/editar_tarea/${id_tarea}`, tarea);
  }

  eliminarTarea(id_tarea: number): Observable<void> {
    return this.http.delete<void>(`${environment.urlBase}/eliminar_tarea/${id_tarea}`);
  }
}
