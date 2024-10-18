import { pool } from '../db.js';

export const getActivoTareas = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM activo_tarea');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener activos con tarea',
            error: error.message
        });
    }
};

export const getActivoTarea = async (req, res) => {
    try {
        const { id_activo_tarea } = req.params;
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

export const createActivoTarea = async (req, res) => {
    try {
        const { id_activo_tarea, id_activo, id_tarea } = req.body;
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

export const editActivoTarea = async (req, res) => {
    try {
        const { id_activo_tarea } = req.params;
        const { id_activo, id_tarea } = req.body;

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

export const deleteActivoTarea = async (req, res) => {
    try {
        const { id_activo_tarea } = req.params;
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