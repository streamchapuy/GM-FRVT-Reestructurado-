export interface Usuario {
    id_usuarios: number;
    nombre: string;
    email: string;
    tipo_usuario: 'admin' | 'operario';
}
