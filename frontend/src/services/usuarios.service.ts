import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UsuariosService {
    obtener_Usuarios() {
      throw new Error('Method not implemented.');
    }
    private apiUrl = 'http://127.0.0.1:3307/API';

    constructor(private http: HttpClient) { }

    obtenerUsuarios(): Observable<any[]> {
        return this.http.get<[]>(`${this.apiUrl}/obtener_usuarios`);
    }
}
