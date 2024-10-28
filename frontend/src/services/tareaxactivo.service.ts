import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TareaxActivo } from '../app/interfaces/tareaxactivo';

@Injectable({
  providedIn: 'root'
})
export class TareaxactivoService {
  private apiUrl = 'http://127.0.0.1:3307/API';

  constructor(private http: HttpClient) {}

  obtenertareaxactivo(): Observable<TareaxActivo[]> {
    return this.http.get<TareaxActivo[]>(`${this.apiUrl}/tareaxactivos`);
  }

}
