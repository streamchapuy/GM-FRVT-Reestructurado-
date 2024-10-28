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
    return this.http.get<Edificio[]>(`${this.apiUrl}/edificios`);
  }

  crearEdificio(edificio: Edificio): Observable<Edificio> {
    return this.http.post<Edificio>(`${this.apiUrl}/edificios`, edificio);
  }

  editarEdificio(edificio: Edificio): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/edificios/${edificio.id_edificio}`, edificio);
  }

  eliminarEdificio(id_edificio: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/edificios/${id_edificio}`);
  }
}
