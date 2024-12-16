import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Piso } from '../app/interfaces/piso';
import { environment } from '../environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class PisoService {
  
  constructor(private http: HttpClient) { }

  obtenerPisos(): Observable<Piso[]> {
    return this.http.get<Piso[]>(`${environment.urlBase}/obtener_pisos`);
  }
  
  obtenerPisoPorId(id_piso: number): Observable<Piso> {
    return this.http.get<Piso>(`${environment.urlBase}/obtener_piso/${id_piso}`);
  }

  crearPiso(piso: Piso): Observable<Piso> {
    return this.http.post<Piso>(`${environment.urlBase}/crear_piso`, piso);
  }

  editarPiso(piso: Piso): Observable<Piso> {
    return this.http.patch<Piso>(`${environment.urlBase}/editar_piso/${piso.id_piso}`, piso);
  }

  eliminarPiso(id_piso: number): Observable<void> {
    return this.http.delete<void>(`${environment.urlBase}/eliminar_piso/${id_piso}`);
  }
}
