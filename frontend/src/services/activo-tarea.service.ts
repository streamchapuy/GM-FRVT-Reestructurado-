import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ActivoTareaService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getActivoTareas(consulta: any): Observable<any> {
    return this.http.post(`${environment.urlBase}/obtener_ActivoTareas`, consulta, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            authorization: `Bearer ${this.authService.getToken()}`,
          }),
        });
  }

}

