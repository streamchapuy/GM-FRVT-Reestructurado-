import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivoTarea } from '../app/interfaces/activo-tarea';

@Injectable({
  providedIn: 'root'
})
export class ActivoTareaService {
  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient) {}

  
  obteneractivo_tarea(): Observable<ActivoTarea[]> {
    return this.http.get<ActivoTarea[]>(this.apiUrl);
  }
}
