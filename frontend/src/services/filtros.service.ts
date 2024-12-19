import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FiltrosService {

  constructor(private http: HttpClient, private authService: AuthService) {}

  filtroPorTag(consulta: { id_tag: number }): Observable<any> {
    return this.http.post(`${environment.urlBase}/filtroscodigo`, consulta, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: `Bearer ${this.authService.getToken()}`,
      }),
    });
  }

  filtroPorActivo(consulta: { id_activo: number }): Observable<any> {
    return this.http.post(`${environment.urlBase}/activosfiltros`, consulta, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: `Bearer ${this.authService.getToken()}`,
      }),
    });
  }

  filtroPorEdificio(consulta: { id_edificio: number }): Observable<any> {
    return this.http.post(`${environment.urlBase}/filtrosedificio`, consulta, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: `Bearer ${this.authService.getToken()}`,
      }),
    });
  }

  filtroPorPiso(consulta: { id_piso: number }): Observable<any> {
    return this.http.post(`${environment.urlBase}/filtrospiso`, consulta, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: `Bearer ${this.authService.getToken()}`,
      }),
    });
  }

  filtroPorSector(consulta: { id_sector: number }): Observable<any> {
    return this.http.post(`${environment.urlBase}/filtrossector`, consulta, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: `Bearer ${this.authService.getToken()}`,
      }),
    });
  }
}
