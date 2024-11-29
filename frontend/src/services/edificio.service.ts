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

  obtenerEdificioPorId(id: number): Observable<Edificio> {
    return this.http.get<Edificio>(`${this.apiUrl}/obtener_edificio/${id}`);
  }

  editarEdificio(id: number, edificio: Edificio): Observable<Edificio> {
    return this.http.put<Edificio>(`${this.apiUrl}/edificios/${id}`, edificio);
  }

  eliminarEdificio(id: number): Observable<Edificio> {
    return this.http.delete<Edificio>(`${this.apiUrl}/edificios/${id}`);
  }

  
  guardarEdificio(edificio: Edificio): Observable<Edificio> {
    return this.http.post<Edificio>(`${this.apiUrl}/edificios`, edificio)
  }



  

}
