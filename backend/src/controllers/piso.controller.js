import { pool } from '../db.js';

export const obtener_Pisos = async (req, res) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM mantenimiento.piso;`);
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los pisos',
            error: error.message
        });
    }
};

export const obtener_filtros_piso = async (req, res) => {
    const { id_piso } = req.body;
    console.log(id_piso);
    try {
        console.log("Ejecutando consulta SQL...");
        const [rows] = await pool.query(`
                                SELECT 
    tag.id_tag,
    activo.nombre AS nombre_activo,
    edificio.nombre AS nombre_edificio,
    sector.nombre AS nombre_sector,
    ubicacion.nombre AS nombre_ubicacion
FROM 
    tag
JOIN 
    activo ON tag.id_activo = activo.id_activo
JOIN 
    edificio ON tag.id_edificio = edificio.id_edificio
 JOIN 
    sector ON tag.id_sector = sector.id_sector
JOIN 
    ubicacion ON tag.id_ubicacion = ubicacion.id_ubicacion
WHERE 
    tag.id_piso = ?;


  
        `, [id_piso]);
  
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

export const obtener_Piso_por_id = async (req, res) => {
    const { id_piso } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM piso WHERE id_piso = ?', [id_piso]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Piso no encontrado'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener el piso',
            error: error.message
        });
    }
};

export const crear_Piso = async (req, res) => {
    const { id_piso, nombre, existencia } = req.body;
    try {
        const [rows] = await pool.query(
            'INSERT INTO piso (id_piso, nombre, existencia) VALUES (?, ?, ?)',
            [id_piso, nombre, existencia]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el piso',
            error: error.message
        });
    }
};

export const editar_Piso = async (req, res) => {
    const { id_piso } = req.params;
    const { nombre, existencia } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE piso SET nombre = IFNULL(?, nombre), existencia = IFNULL(?, existencia) WHERE id_piso = ?',
            [nombre, existencia, id_piso]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Piso no encontrado'
        });

        const [rows] = await pool.query('SELECT * FROM piso WHERE id_piso = ?', [id_piso]);

        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar el piso',
            error: error.message
        });
    }
};

export const eliminar_Piso = async (req, res) => {
    const { id_piso } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM piso WHERE id_piso = ?', [id_piso],
            [req.params.id_piso])


        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Piso no encontrado'
        });

        res.send('402');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar el piso',
            error: error.message
        });
    }
};
