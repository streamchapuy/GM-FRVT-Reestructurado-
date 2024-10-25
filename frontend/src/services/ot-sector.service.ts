import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sector } from '../app/interfaces/sector';

@Injectable({
  providedIn: 'root'
})
export class OtSectorService {
  private apiUrl = 'http://127.0.0.1:3307/API';


  constructor(private http: HttpClient) { }

  obtenerSector(): Observable<Sector[]> {
    return this.http.get<Sector[]>(`${this.apiUrl}/sectores`);
  }
}
