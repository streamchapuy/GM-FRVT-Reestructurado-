import { Component, Input } from '@angular/core';
import { UsuariosService } from '../../../../services/usuarios.service';
import { Usuario } from '../../../interfaces/usuario';

@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrl: './fechas.component.css',
})
export class FechasComponent {
  @Input() orden = {
    usuario: 0,
    fecha_creacion: new Date(),
    fecha_finalizacion: new Date(),
    tiempo_inicio: new Date(),
    tiempo_finalizacion: new Date(),
  };
  fechaCreacion = "";
  fechaFinalizacion = "";
  usuario = 0;


  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuariosService.obtenerUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data.filter(
          (usuario) => usuario.tipo_usuario === 'operario'
        );
      },
      error: (error) => {
        console.error('Error al obtener usuarios:', error);
      },
    });
  }

  updateOrdenDate($event: Event) {
    const name = ($event.target as HTMLInputElement).name;
    const value = ($event.target as HTMLInputElement).value;
    if (
      name !== 'fecha_creacion' &&
      name !== 'fecha_finalizacion' &&
      name !== 'tiempo_inicio' &&
      name !== 'tiempo_finalizacion'
    )
      return;
    this.orden[name] = new Date(value);
  }
}
