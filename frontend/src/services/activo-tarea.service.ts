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

  getActivoTareas(consulta: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/obtener_ActivoTareas`, consulta);
  }

}

