import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {
  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient) {}

  // Obtener datos por tag
  getDatosPorTag(idTag: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/filtrostag${idTag}`);
  }

  // Obtener tags por activo
  getTagsPorActivo(idActivo: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/activosfiltros${idActivo}`);
  }

  // Obtener tags por edificio
  getTagsPorEdificio(idEdificio: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/filtrosedificio${idEdificio}`);
  }

  // Obtener tags por piso
  getTagsPorPiso(idPiso: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/filtrospiso${idPiso}`);
  }

  // Obtener tags por sector
  getTagsPorSector(idSector: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/filtrossector${idSector}`);
  }
}
