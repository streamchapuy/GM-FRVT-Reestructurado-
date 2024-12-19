import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Labor } from '../app/interfaces/labor';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LaborService {
  private selectedLaborId = new BehaviorSubject<number | null>(null);
  selectedLaborId$ = this.selectedLaborId.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) {}

  obtenerLabores(): Observable<Labor[]> {
    return this.http.get<Labor[]>(`${environment.urlBase}/obtener_labores`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: `Bearer ${this.authService.getToken()}`,
      }),
    });
  }

  obtenerLaborPorId(id_labor: number): Observable<Labor> {
    return this.http.get<Labor>(
      `${environment.urlBase}/obtener_labor/${id_labor}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }

  crearLabor(labor: Labor): Observable<Labor> {
    return this.http.post<Labor>(`${environment.urlBase}/crear_labor`, labor, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        authorization: `Bearer ${this.authService.getToken()}`,
      }),
    });
  }

  editarLabor(id_labor: number, labor: Labor): Observable<Labor> {
    return this.http.patch<Labor>(
      `${environment.urlBase}/editar_labor/${id_labor}`,
      labor,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }

  eliminarLabor(id_labor: number): Observable<void> {
    return this.http.delete<void>(
      `${environment.urlBase}/eliminar_labor/${id_labor}`,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          authorization: `Bearer ${this.authService.getToken()}`,
        }),
      }
    );
  }

  setSelectedLabor(id_labor: number) {
    this.selectedLaborId.next(id_labor);
  }
}
