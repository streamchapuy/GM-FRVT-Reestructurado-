import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sector } from '../app/interfaces/sector';
import { environment } from '../environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class SectorService {

  constructor(private http: HttpClient) { }

  obtenerSectores(): Observable<Sector[]> {
    return this.http.get<Sector[]>(`${environment.urlBase}/obtener_sectores`);
  }

  obtenerSectorPorId(id_sector: number): Observable<Sector> {
    return this.http.get<Sector>(`${environment.urlBase}/obtener_sector/${id_sector}`);
  }

  crearSector(sector: Sector): Observable<Sector> {
    return this.http.post<Sector>(`${environment.urlBase}/crear_sector`, sector);
  }

  editarSector(id_sector: number, sector: Sector): Observable<Sector> {
    return this.http.patch<Sector>(`${environment.urlBase}/editar_sector/${id_sector}`, sector);
  }

  eliminarSector(id_sector: number): Observable<void> {
    return this.http.delete<void>(`${environment.urlBase}/eliminar_sector/${id_sector}`);
  }
}
