import { pool } from '../db.js';

export const obtener_Ubicaciones = async (req, res) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM ubicacion`);
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener las ubicaciones',
            error: error.message
        });
    }
};

export const obtener_filtros_ubicacion = async (req, res) => {
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


export const obtener_Ubicacion_por_id = async (req, res) => {
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

export const crear_Ubicacion = async (req, res) => {
    const { id_ubicacion, nombre, existencia } = req.body;
    try {
        const [rows] = await pool.query(
            'INSERT INTO ubicacion (id_ubicacion, nombre, existencia) VALUES (?, ?, ?)',
            [id_ubicacion, nombre, existencia]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear la ubicación',
            error: error.message
        });
    }
};

export const editar_Ubicacion = async (req, res) => {
    const { id_ubicacion } = req.params;
    const { nombre, existencia } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE ubicacion SET nombre = IFNULL(?, nombre), existencia = IFNULL(?, existencia) WHERE id_ubicacion = ?',
            [nombre, existencia, id_ubicacion]
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

export const eliminar_Ubicacion = async (req, res) => {
    const { id_ubicacion } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM ubicacion WHERE id_ubicacion = ?', [id_ubicacion],
            [req.params.id_ubicacion])

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Ubicación no encontrada'
        });

        res.send('402');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar la ubicación',
            error: error.message
        });
    }
};