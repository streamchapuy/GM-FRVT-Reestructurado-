import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivoTareaService {

  private apiUrl = 'http://127.0.0.1:3307/API';
  ApiUrl: any;

  constructor(private http: HttpClient) { }

  getActivoTareas(id_Activo: number, id_labor: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/activo-tareas?id_Activo=${id_Activo}&id_labor=${id_labor}`);
}

}

