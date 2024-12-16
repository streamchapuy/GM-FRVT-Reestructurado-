import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Activo } from '../app/interfaces/activo';
import { environment } from '../environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class ActivoService {
  private selectedActivoId = new BehaviorSubject<number | null>(null);
  selectedActivoId$ = this.selectedActivoId.asObservable();

  constructor(private http: HttpClient) {}

  setSelectedActivo(id_activo: number) {
    this.selectedActivoId.next(id_activo);
  }

  obtenerActivos(): Observable<Activo[]> {
    return this.http.get<Activo[]>(`${environment.urlBase}/obtener_activos`);
  }

  obtenerActivoPorId(id_activo: number): Observable<Activo> {
    return this.http.get<Activo>(`${environment.urlBase}/obtener_activo/${id_activo}`);
  }

  crearActivo(activo: Activo): Observable<Activo> {
    return this.http.post<Activo>(`${environment.urlBase}/crear_activo`, activo);
  }

  editarActivo(activo: Activo): Observable<Activo> {
    return this.http.patch<Activo>(
      `${environment.urlBase}/editar_activo/${activo.id_activo}`,
      activo
    );
  }

  eliminarActivo(id_activo: number): Observable<void> {
    return this.http.delete<void>(
      `${environment.urlBase}/eliminar_activo/${id_activo}`
    );
  }

  obtenerSelectedActivoId(): number | null {
    return this.selectedActivoId.value;
  }
  setSelectedActivoId(id_activo: number) {
    this.selectedActivoId.next(id_activo);
  }
}
