import { pool } from '../db.js';

export const obtener_ordenes_de_Trabajo = async (req, res) => {
    try {
        const [rows] = await pool.query(`SELECT
            ot.id_ot,

            a.abreviacion AS abreviatura,
            LPAD(ed.id_edificio, 3, '0') AS id_edificio,
            LPAD(p.id_piso, 3, '0') AS id_piso,
            LPAD(s.id_sector, 3, '0') AS id_sector,
            LPAD(a.id_activo, 3, '0') AS id_activo,
            LPAD(u.id_ubicacion, 3, '0') AS id_ubicacion,
            CONCAT(' - ', t.id_cantidad) AS id_cantidad,
    
            us.nombre AS nombre_usuario,
           
            e.descripcion AS descripcion_estado,
           
            ot.descripcion,
            ot.fecha_creacion,
            ot.fecha_finalizacion,
            ot.tiempo_inicio,
            ot.tiempo_finalizacion
        FROM
            orden_trabajo ot
       
        JOIN tag t ON ot.id_tag = t.id_tag
        JOIN edificio ed ON t.id_edificio = ed.id_edificio
        JOIN piso p ON t.id_piso = p.id_piso
        JOIN sector s ON t.id_sector = s.id_sector
        JOIN activo a ON t.id_activo = a.id_activo
        JOIN ubicacion u ON t.id_ubicacion = u.id_ubicacion
        JOIN cantidad c ON t.id_cantidad = c.id_cantidad
    
        JOIN usuarios us ON ot.id_usuarios = us.id_usuarios
     
        JOIN estado e ON ot.id_estado = e.id_estado;`);
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener las órdenes de trabajo',
            error: error.message
        });
    }
};

export const obtener_ordene_de_Trabajo_por_id = async (req, res) => {
    const { id_ot } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM orden_trabajo WHERE id_ot = ?', [id_ot]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Orden de trabajo no encontrada'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener la orden de trabajo',
            error: error.message
        });
    }
};

export const crear_ordenes_de_Trabajo = async (req, res) => {
    const { id_tag, id_usuarios, id_estado, descripcion, fecha_finalizacion, tiempo_inicio, tiempo_finalizacion } = req.body;

    // Validar campos obligatorios
    if (!id_tag || !id_usuarios || !id_estado || !descripcion) {
        return res.status(400).json({
            message: 'Campos obligatorios faltantes: id_tag, id_usuarios, id_estado, descripcion'
        });
    }

    // Si la fecha de creación no es proporcionada, usar la fecha actual
    const fecha_creacion = new Date(); // Asignar la fecha de creación como la fecha actual

    try {
        // Insertar nueva orden de trabajo en la base de datos
        const [result] = await pool.query(
            'INSERT INTO orden_trabajo (id_tag, id_usuarios, id_estado, descripcion, fecha_creacion, fecha_finalizacion, tiempo_inicio, tiempo_finalizacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [id_tag, id_usuarios, id_estado, descripcion, fecha_creacion, fecha_finalizacion, tiempo_inicio, tiempo_finalizacion]
        );

        // Si se insertó correctamente, devolver el ID de la nueva orden de trabajo
        res.status(201).json({
            message: 'Orden de trabajo creada exitosamente',
            id_ot: result.insertId // El ID auto-generado de la nueva orden
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error al crear la orden de trabajo',
            error: error.message
        });
    }
};


export const editar_ordenes_de_Trabajo = async (req, res) => {
    const { id_ot } = req.params;
    const { id_tag, id_usuarios } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE orden_trabajo SET id_tag = IFNULL(?, id_tag), id_usuarios = IFNULL(?, id_usuarios) WHERE id_ot = ?',
            [id_tag, id_usuarios, id_ot]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Orden de trabajo no encontrada'
        });

        const [rows] = await pool.query('SELECT * FROM orden_trabajo WHERE id_ot = ?', [id_ot]);

        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar la orden de trabajo',
            error: error.message
        });
    }
};

export const eliminar_ordenes_de_Trabajo = async (req, res) => {
    const { id_ot } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM orden_trabajo WHERE id_ot = ?', [id_ot]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Orden de trabajo no encontrada'
        });

        res.send('Orden de trabajo eliminada');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar la orden de trabajo',
            error: error.message
        });
    }
};