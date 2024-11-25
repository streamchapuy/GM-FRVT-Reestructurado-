import { pool } from '../db.js';

export const obtener_Tareas = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM tarea');
        if(rows.length === 0) {
            return res.status(404).json({
                message: 'No hay tareas'
            });
        } else {
            res.json(rows);
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener las tareas',
            error: error.message
        });
    }
};

export const obtener_Tarea_por_id = async (req, res) => {
    const { id_tarea } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM tarea WHERE id_tarea = ?', [id_tarea]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Tarea no encontrada'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener la tarea',
            error: error.message
        });
    }
};

export const crear_Tarea = async (req, res) => {
    const { id_tarea, descripcion, existencia, id_labor } = req.body;
    try {
        const [rows] = await pool.query(
            'INSERT INTO tarea (id_tarea, descripcion, existencia, id_labor) VALUES (?, ?, ?, ?)',
            [id_tarea, descripcion, existencia, id_labor]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear la tarea',
            error: error.message
        });
    }
};

export const editar_Tarea = async (req, res) => {
    const { id_tarea } = req.params;
    const { descripcion, existencia, id_labor } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE tarea SET descripcion = IFNULL(?, descripcion), existencia = IFNULL(?, existencia), id_labor = IFNULL(?, id_labor) WHERE id_tarea = ?',
            [descripcion, existencia, id_labor, id_tarea]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Tarea no encontrada'
        });

        const [rows] = await pool.query('SELECT * FROM tarea WHERE id_tarea = ?', [id_tarea]);

        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar la tarea',
            error: error.message
        });
    }
};

export const eliminar_Tarea = async (req, res) => {
    const { id_tarea } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM tarea WHERE id_tarea = ?', [id_tarea]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Tarea no encontrada'
        });

        res.send('Tarea eliminada');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar la tarea',
            error: error.message
        });
    }
};