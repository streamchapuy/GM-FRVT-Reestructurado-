import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Edificio } from '../app/interfaces/edificio';

@Injectable({
  providedIn: 'root'
})
export class EdificioService {
  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient) {}

  obtenerEdificio(): Observable<Edificio[]> {
    return this.http.get<Edificio[]>(`${this.apiUrl}/obtener_edificios`);
  }

  obtenerEdificioPorId(id_edificio: number): Observable<Edificio> {
    return this.http.get<Edificio>(`${this.apiUrl}/obtener_edificio/${id_edificio}`);
  }

  editarEdificio(id_edificio: number, edificio: Edificio): Observable<Edificio> {
    return this.http.patch<Edificio>(`${this.apiUrl}/editar_edificios/${id_edificio}`, edificio);
  }
  
  crearEdificio(edificio: Edificio): Observable<Edificio> {
    return this.http.post<Edificio>(`${this.apiUrl}/crear_edificios`, edificio)
  }

  eliminarEdificio(id_edificio: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar_edificios/${id_edificio}`);
  }
  
}
