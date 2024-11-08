import { pool } from '../db.js';

export const getUbicaciones = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM ubicacion');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener las ubicaciones',
            error: error.message
        });
    }
};

export const filtrosubicacion = async (req, res) => {
    const { id_ubicacion } = req.body;
    console.log(id_ubicacion);
    try {
        console.log("Ejecutando consulta SQL...");
        const [rows] = await pool.query(`
                                SELECT 
    tag.id_tag,
    activo.nombre AS nombre_activo,
    edificio.nombre AS nombre_edificio,
    sector.nombre AS nombre_sector,
     piso.nombre AS nombre_piso
FROM 
    tag
JOIN 
    activo ON tag.id_activo = activo.id_activo
JOIN 
    edificio ON tag.id_edificio = edificio.id_edificio
 JOIN 
    sector ON tag.id_sector = sector.id_sector
JOIN 
    piso ON tag.id_piso = piso.id_piso
WHERE 
    tag.id_ubicacion = ?;

        `, [id_ubicacion]);
  
        console.log("Consulta ejecutada correctamente", rows);
        res.json(rows);
    } catch (error) {
        console.error("Error en el servidor:", error);
        return res.status(500).json({
            message: "Error al obtener filtro",
            error: error.message,
        });
    }
  };


export const getUbicacion = async (req, res) => {
    const { id_ubicacion } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM ubicacion WHERE id_ubicacion = ?', [id_ubicacion]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Ubicación no encontrada'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener la ubicación',
            error: error.message
        });
    }
};

export const createUbicacion = async (req, res) => {
    const { id_ubicacion, nombre, id_existencia } = req.body;
    try {
        const [rows] = await pool.query(
            'INSERT INTO ubicacion (id_ubicacion, nombre, id_existencia) VALUES (?, ?, ?)',
            [id_ubicacion, nombre, id_existencia]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear la ubicación',
            error: error.message
        });
    }
};

export const editUbicacion = async (req, res) => {
    const { id_ubicacion } = req.params;
    const { nombre, id_existencia } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE ubicacion SET nombre = IFNULL(?, nombre), id_existencia = IFNULL(?, id_existencia) WHERE id_ubicacion = ?',
            [nombre, id_existencia, id_ubicacion]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Ubicación no encontrada'
        });

        const [rows] = await pool.query('SELECT * FROM ubicacion WHERE id_ubicacion = ?', [id_ubicacion]);

        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar la ubicación',
            error: error.message
        });
    }
};

export const deleteUbicacion = async (req, res) => {
        const { id_ubicacion } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM ubicacion WHERE id_ubicacion = ?', [id_ubicacion]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Ubicación no encontrada'
        });

        res.send('Ubicación eliminada');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar la ubicación',
            error: error.message
        });
    }
};