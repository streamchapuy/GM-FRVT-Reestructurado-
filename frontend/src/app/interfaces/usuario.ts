export interface Usuario {
    id_usuario: number;
    nombre: string;
    email: string;
    tipo_usuario: 'admin' | 'operario';
}
