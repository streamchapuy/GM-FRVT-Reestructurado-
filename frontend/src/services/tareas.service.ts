import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../app/interfaces/tarea';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient) {}

  obtenerTareas(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.apiUrl}/tareas`);
  }
}
