import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivoTareaService {

  private baseUrl = 'http://127.0.0.1:3307/API';
  apiUrl: any;

  constructor(private http: HttpClient) { }

  getActivoTareas(idActivo: number, idTareaXActivo: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/activos/${idActivo}/tareas/${idTareaXActivo}`);
  }
}

