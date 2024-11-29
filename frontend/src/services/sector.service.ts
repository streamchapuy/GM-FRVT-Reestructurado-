import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sector } from '../app/interfaces/sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient) { }

  obtenerSectores(): Observable<Sector[]> {
    return this.http.get<Sector[]>(`${this.apiUrl}/sectores`);
  }

  obtenerSectorPorId(id: number): Observable<Sector> {
    return this.http.get<Sector>(`${this.apiUrl}/obtener_sector/${id}`);
  }

  crearSector(sector: Sector): Observable<Sector> {
    return this.http.post<Sector>(`${this.apiUrl}/sectores`, sector);
  }

  editarSector(id: number, sector: Sector): Observable<Sector> {
    return this.http.put<Sector>(`${this.apiUrl}/sectores/${id}`, sector);
  }

  eliminarSector(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/sectores/${id}`);
  }
}
