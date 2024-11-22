import { pool } from '../db.js';

export const obtener_ActivoTareas = async (req, res) => {
    const { id_activo, id_labor } = req.body;
    console.log("id_activo", id_activo, "id_labor", id_labor);
    try {
        console.log("Ejecutando consulta SQL...");

        const [rows] = await pool.query(`
    SELECT 
    a.nombre AS nombre_activo,
    t.descripcion AS descripcion_tarea
FROM 
    activo a
JOIN 
    activo_tarea at ON a.id_activo = at.id_activo
JOIN 
    tarea t ON at.id_tarea = t.id_tarea
WHERE 
    a.id_activo = ? 
    AND t.id_labor = ?;  

        `, [id_activo, id_labor]);

        console.log("Consulta ejecutada correctamente", rows);
        res.json(rows.length > 0 ? rows : { message: "No se encontraron tareas." });
    } catch (error) {
        console.error("Error en el servidor:", error);
        return res.status(500).json({
            message: "Error al obtener las tareas",
            error: error.message,
        });
    }
};
export const obtener_ActivoTarea_por_id = async (req, res) => {
    const { id_activo_tarea } = req.params;
    try {
        console.log(req.params.id_activo_tarea);
        const [rows] = await pool.query('SELECT * FROM activo_tarea WHERE id_activo_tarea = ?', [id_activo_tarea]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Activo con tarea no encontrado'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener activo con tarea',
            error: error.message
        });
    }
};

export const crear_ActivoTarea = async (req, res) => {
    const { id_activo_tarea, id_activo, id_tarea } = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO activo_tarea (id_activo_tarea, id_activo, id_tarea) VALUES (?, ?, ?)',
            [id_activo_tarea, id_activo, id_tarea]);
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear activos con tarea',
            error: error.message
        });
    }
};

export const editar_ActivoTarea = async (req, res) => {
    const { id_activo_tarea } = req.params;
    const { id_activo, id_tarea } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE activo_tarea SET id_activo = IFNULL(?, id_activo), id_tarea = IFNULL(?, id_tarea) WHERE id_activo_tarea = ?',
            [id_activo, id_tarea, id_activo_tarea]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Activo con tarea no encontrado'
        });

        const [rows] = await pool.query('SELECT * FROM activo_tarea WHERE id_activo_tarea = ?', [id_activo_tarea]);

        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al editar activo con tarea',
            error: error.message
        });
    }
};

export const eliminar_ActivoTarea = async (req, res) => {
    const { id_activo_tarea } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM activo_tarea WHERE id_activo_tarea = ?', [id_activo_tarea]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Activo con tarea no encontrado'
        });

        res.send('Activo con tarea eliminado');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar activo con tarea',
            error: error.message
        });
    }
};