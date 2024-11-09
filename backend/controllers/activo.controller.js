import { pool } from '../db.js';


export const getActivofiltro = async (req, res) => {
    const { id_activo } = req.body;
    console.log(id_activo);
    try {
        console.log("Ejecutando consulta SQL...");
        const [rows] = await pool.query(`
            SELECT 
                tag.id_tag,
                edificio.nombre AS nombre_edificio,
                piso.nombre AS nombre_piso,
                sector.nombre AS nombre_sector,
                ubicacion.nombre AS nombre_ubicacion
            FROM 
                tag
            JOIN 
                edificio ON tag.id_edificio = edificio.id_edificio
            JOIN 
                piso ON tag.id_piso = piso.id_piso
            JOIN 
                sector ON tag.id_sector = sector.id_sector
            JOIN 
                ubicacion ON tag.id_ubicacion = ubicacion.id_ubicacion
            WHERE 
                tag.id_activo = ?;
        `, [id_activo]);

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

export const getActivos = async (req, res) => {
    try {
        const [rows] = await pool.query(` 
    SELECT 
    id_activo,
    nombre,
    abreviacion,
    CASE 
        WHEN id_existencia IS NOT NULL THEN 'Sí'
        ELSE 'No'
    END AS id_existencia
FROM activo;`
        );
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los activos',
            error: error.message
        });
    }
};

export const getActivo = async (req, res) => {
    const { id_activo } = req.params;
    try {
        console.log(req.params.id_activo)
        const [rows] = await pool.query('SELECT * FROM activo WHERE id_activo = ?',
            [req.params.id_activo])

        if (rows.length <= 0) return res.status(404).json({
            message: 'Activo no encontrado'
        })

        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener el activo',
            error: error.message
        });
    }
};

export const createActivo = async (req, res) => {
    const { id_activo, nombre, abreviacion, id_existencia } = req.body
    try {
        const [rows] = await pool.query('INSERT INTO activo (id_activo, nombre, abreviacion, id_existencia) VALUES (?, ?, ?, ?)',
            [id_activo, nombre, abreviacion, id_existencia])
        res.send({ rows })
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el activo',
            error: error.message
        });
    }
};

export const editActivo = async (req, res) => {
    const { id_activo } = req.params
    const { nombre, abreviacion, id_existencia } = req.body
    try {
        const [result] = await pool.query('UPDATE activo SET nombre = IFNULL(?, nombre), abreviacion = IFNULL(?, abreviacion), id_existencia = IFNULL(?, id_existencia) WHERE id_activo = ?',
            [nombre, abreviacion, id_existencia, id_activo])

        console.log(result)

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Activo no encontrado'
        })

        const [rows] = await pool.query('SELECT * FROM activo WHERE id_activo = ?', [id_activo])

        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Error al editar el activo',
            error: error.message
        });
    }
};

export const deleteActivo = async (req, res) => {
    const { id_activo } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM activo WHERE id_activo = ?',
            [req.params.id_activo])

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Activo no encontrado'
        })

        res.send('402')
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar el activo',
            error: error.message
        });
    }
};