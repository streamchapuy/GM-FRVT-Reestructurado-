import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ActivoTareaService {

  constructor(private http: HttpClient) { }

  getActivoTareas(consulta: any): Observable<any> {
    return this.http.post(`${environment.urlBase}/obtener_ActivoTareas`, consulta);
  }

}

