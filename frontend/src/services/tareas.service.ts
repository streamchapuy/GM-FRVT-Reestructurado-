import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../app/interfaces/tarea';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient) { }

  obtenerTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.apiUrl}/obtener_tareas`);
  }

  crearTarea(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(`${this.apiUrl}/crear_tarea`, tarea);
  }

  editarTarea(id_tarea: number, tarea: Tarea): Observable<Tarea> {
    return this.http.patch<Tarea>(`${this.apiUrl}/editar_tarea/${id_tarea}`, tarea);
  }

  eliminarTarea(id_tarea: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar_tarea/${id_tarea}`);
  }
}

