import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivoTarea } from '../app/interfaces/activo-tarea';
import { Tarea } from '../app/interfaces/tarea';
import { Activo } from '../app/interfaces/activo';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivoTareaService {
  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient) {}

  obteneractivo_tarea(): Observable<ActivoTarea[]> {
    return this.http.get<ActivoTarea[]>(`${this.apiUrl}/activos/:id_activo/tareas/:id_tareaxactivo`).pipe(
      catchError(error => {
        console.error('Error al obtener activos y tareas:', error);
        return throwError(error); // O puedes devolver un Observable vacío
      })
    );
  }

  obtenerTareasPorActivo(activoId: number): Observable<ActivoTarea[]> {
    return this.http.get<ActivoTarea[]>(`${this.apiUrl}/activos/${activoId}/tareas`).pipe(
      catchError(error => {
        console.error(`Error al obtener tareas para el activo ${activoId}:`, error);
        return throwError(error);
      })
    );
  }
}

