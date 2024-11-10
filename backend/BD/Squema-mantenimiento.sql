CREATE DATABASE mantenimiento;

USE mantenimiento; 

-- Tabla: Edificio
CREATE TABLE edificio (
    id_edificio INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    calle VARCHAR(255),
    existencia VARCHAR(30)    
);

-- Tabla: Piso
CREATE TABLE piso (
    id_piso INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    existencia VARCHAR(30) 
);

-- Tabla: Sector
CREATE TABLE sector (
    id_sector INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
	existencia VARCHAR(30) 
);

-- Tabla: Ubicación
CREATE TABLE ubicacion (
    id_ubicacion INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    existencia VARCHAR(30) 
);

-- Tabla: Activo
CREATE TABLE activo (
    id_activo INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    abreviacion VARCHAR(10),
    existencia VARCHAR(30)
);

-- Tabla: Labor
CREATE TABLE labor (
    id_labor INT PRIMARY KEY AUTO_INCREMENT,
    descripcion VARCHAR(255)
);

-- Tabla: Tarea
CREATE TABLE tarea (
    id_tarea INT PRIMARY KEY AUTO_INCREMENT,
    descripcion VARCHAR(255),
	existencia VARCHAR(30),
    id_labor INT,
    FOREIGN KEY (id_labor) REFERENCES labor(id_labor)
);


-- Tabla: Activo-Tarea
CREATE TABLE activo_tarea (
    id_activo_tarea INT PRIMARY KEY AUTO_INCREMENT,
    id_activo INT,
    id_tarea INT,
    FOREIGN KEY (id_activo) REFERENCES activo(id_activo),
    FOREIGN KEY (id_tarea) REFERENCES tarea(id_tarea)
);

-- Tabla: Cantidad
CREATE TABLE cantidad (
    id_cantidad INT PRIMARY KEY AUTO_INCREMENT,
    cantidad INT
);

-- Tabla: Usuarios
CREATE TABLE usuarios (
    id_usuarios INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contraseña_hash VARCHAR(255) NOT NULL,
    tipo_usuario VARCHAR(50) CHECK (tipo_usuario IN ('operario', 'admin'))
);

-- Tabla: Tag
CREATE TABLE tag (
    id_tag INT PRIMARY KEY AUTO_INCREMENT,
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

-- Tabla: Estado
CREATE TABLE estado (
    id_estado INT PRIMARY KEY AUTO_INCREMENT,
    descripcion VARCHAR(100) NOT NULL
);

-- Tabla: Orden de Trabajo
CREATE TABLE orden_trabajo (
    id_ot INT PRIMARY KEY AUTO_INCREMENT,
    id_tag INT,
    id_usuarios INT,
    id_estado INT,
    descripcion VARCHAR(255),
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    fecha_finalizacion DATETIME,
    tiempo_inicio DATETIME,
    tiempo_finalizacion DATETIME,
    FOREIGN KEY (id_tag) REFERENCES tag(id_tag),
    FOREIGN KEY (id_usuarios) REFERENCES usuarios(id_usuarios),
    FOREIGN KEY (id_estado) REFERENCES estado(id_estado)
);
