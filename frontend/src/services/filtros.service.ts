import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { FiltroInterfas } from '../app/interfaces/filtros-interfas';
import { environment } from '../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class FiltrosService {

  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient) {}

  filtroPorTag(consulta: { id_tag: number } ): Observable<any> {
    return this.http.post(`${environment.urlBase}/filtroscodigo`,consulta);
  }

  filtroPorActivo(consulta: {id_activo: number} ): Observable<any> {
    return this.http.post(`${environment.urlBase}/activosfiltros`,consulta);
  }

  filtroPorEdificio(consulta: {id_edificio: number} ): Observable<any> {
    return this.http.post(`${environment.urlBase}/filtrosedificio`,consulta);
  }

  filtroPorPiso(consulta: {id_piso: number} ): Observable<any> {
    return this.http.post(`${environment.urlBase}/filtrospiso`,consulta);
  }

  filtroPorSector(consulta: {id_sector: number} ): Observable<any> {
    return this.http.post(`${environment.urlBase}/filtrossector`,consulta);
  }
}
