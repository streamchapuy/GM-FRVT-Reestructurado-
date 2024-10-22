-- Tabla: Existencia
CREATE TABLE existencia (
    id_existencia INT PRIMARY KEY,
    disponible BOOLEAN
);

-- Tabla: Edificio
CREATE TABLE edificio (
    id_edificio INT PRIMARY KEY,
    nombre VARCHAR(100),
    calle VARCHAR(255),
    id_existencia INT,
    FOREIGN KEY (id_existencia) REFERENCES existencia(id_existencia)
);

-- Tabla: Piso
CREATE TABLE piso (
    id_piso INT PRIMARY KEY,
    nombre VARCHAR(100),
    id_existencia INT,
    FOREIGN KEY (id_existencia) REFERENCES existencia(id_existencia)
);

-- Tabla: Sector
CREATE TABLE sector (
    id_sector INT PRIMARY KEY,
    nombre VARCHAR(100),
    id_existencia INT,
    FOREIGN KEY (id_existencia) REFERENCES existencia(id_existencia)
);

-- Tabla: Ubicación
CREATE TABLE ubicacion (
    id_ubicacion INT PRIMARY KEY,
    nombre VARCHAR(100),
    id_existencia INT,
    FOREIGN KEY (id_existencia) REFERENCES existencia(id_existencia)
);

-- Tabla: Activo
CREATE TABLE activo (
    id_activo INT PRIMARY KEY,
    nombre VARCHAR(100),
    abreviacion VARCHAR(10),
    id_existencia INT,
    FOREIGN KEY (id_existencia) REFERENCES existencia(id_existencia)
);

-- Tabla: Tarea por Activo
CREATE TABLE tareaxactivo (
    id_tareaxactivo INT PRIMARY KEY,
    descripcion VARCHAR(255)
);

-- Tabla: Tarea
CREATE TABLE tarea (
    id_tarea INT PRIMARY KEY,
    descripcion VARCHAR(255),
    id_existencia INT,
    id_tareaxactivo INT,
    FOREIGN KEY (id_existencia) REFERENCES existencia(id_existencia),
    FOREIGN KEY(id_tareaxactivo) REFERENCES tareaxactivo(id_tareaxactivo)
    
);

-- Tabla: Activo-Tarea
CREATE TABLE activo_tarea (
    id_activo_tarea INT PRIMARY KEY,
    id_activo INT,
    id_tarea INT,
    FOREIGN KEY (id_activo) REFERENCES activo(id_activo),
    FOREIGN KEY (id_tarea) REFERENCES tarea(id_tarea)
);

-- Tabla: Cantidad
CREATE TABLE cantidad (
    id_cantidad INT PRIMARY KEY,
    cantidad INT
);
-- Tabla: Operario
CREATE TABLE operario (
    id_operario INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_existencia INT,
    FOREIGN KEY (id_existencia) REFERENCES existencia(id_existencia)
);

-- Tabla: Admin
CREATE TABLE admin (
    id_admin INT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    id_existencia INT,
    FOREIGN KEY (id_existencia) REFERENCES existencia(id_existencia)
);

-- Tabla: Usuarios
CREATE TABLE usuarios (
    id_usuarios INT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    contraseña_hash VARCHAR(255) NOT NULL,
    id_operario INT,
    id_admin INT,
    tipo_usuario VARCHAR(50) CHECK (tipo_usuario IN ('operario', 'admin')),
    FOREIGN KEY (id_operario) REFERENCES operario(id_operario),
    FOREIGN KEY (id_admin) REFERENCES admin(id_admin)
);


-- Tabla: tag
CREATE TABLE tag (
    id_tag INT PRIMARY KEY,
    id_edificio INT,
    id_piso INT,
    id_sector INT,
    id_activo INT,
    id_ubicacion INT,
    id_cantidad INT,
    FOREIGN KEY (id_edificio) REFERENCES edificio(id_edificio),
    FOREIGN KEY (id_piso) REFERENCES piso(id_piso),
    FOREIGN KEY (id_sector) REFERENCES sector(id_sector),
    FOREIGN KEY (id_activo) REFERENCES activo(id_activo),
    FOREIGN KEY (id_ubicacion) REFERENCES ubicacion(id_ubicacion),
    FOREIGN KEY (id_cantidad) REFERENCES cantidad(id_cantidad)
);

-- Tabla: Orden de Trabajo
CREATE TABLE orden_trabajo (
    id_ot INT PRIMARY KEY,
    id_tag INT,
    id_usuarios INT,
    descripcion VARCHAR(255),
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP, 
    fecha_finalizacion DATETIME,
    FOREIGN KEY (id_tag) REFERENCES tag(id_tag),
    FOREIGN KEY (id_usuarios) REFERENCES usuarios(id_usuarios)
);