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
    return this.http.get<Sector[]>(`${this.apiUrl}/obtener_sectores`);
  }

  obtenerSectorPorId(id_sector: number): Observable<Sector> {
    return this.http.get<Sector>(`${this.apiUrl}/obtener_sector/${id_sector}`);
  }

  crearSector(sector: Sector): Observable<Sector> {
    return this.http.post<Sector>(`${this.apiUrl}/crear_sector`, sector);
  }

  editarSector(id_sector: number, sector: Sector): Observable<Sector> {
    return this.http.patch<Sector>(`${this.apiUrl}/editar_sector/${id_sector}`, sector);
  }

  eliminarSector(id_sector: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar_sector/${id_sector}`);
  }
}
