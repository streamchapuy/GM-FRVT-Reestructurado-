export interface NumeroOT {
    id_ot: number;
    abreviatura: string;
    id_edificio: string; 
    id_piso: string; 
    id_sector: string; 
    id_activo: string; 
    id_ubicacion: string;   
    id_cantidad: string;   
    nombre_usuario: string; 
    descripcion_estado: string;
    descripcion: string;
    fecha_creacion: Date;
    fecha_finalizacion?: Date;
    tiempo_inicio?: Date;
    tiempo_finalizacion?: Date;
}