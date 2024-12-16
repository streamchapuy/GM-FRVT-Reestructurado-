import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../app/interfaces/usuario';
import { environment } from '../environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class UsuariosService {

    constructor(private http: HttpClient) { }

    obtenerUsuarios(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(`${environment.urlBase}/obtener_usuarios`);
    }
}