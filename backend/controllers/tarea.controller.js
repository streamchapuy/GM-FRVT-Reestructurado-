import { pool } from '../db.js';

export const getTareas = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM tarea');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener las tareas',
            error: error.message
        });
    }
};

export const getTarea = async (req, res) => {
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

export const createTarea = async (req, res) => {
    const { id_tarea, descripcion, id_existencia, id_tareaxactico } = req.body;
    try {
        const [rows] = await pool.query(
            'INSERT INTO tarea (id_tarea, descripcion, id_existencia, id_tareaxactico) VALUES (?, ?, ?, ?)',
            [id_tarea, descripcion, id_existencia, id_tareaxactico]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear la tarea',
            error: error.message
        });
    }
};

export const editTarea = async (req, res) => {
    const { id_tarea } = req.params;
    const { descripcion, id_existencia, id_tareaxactico } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE tarea SET descripcion = IFNULL(?, descripcion), id_existencia = IFNULL(?, id_existencia), id_tareaxactico = IFNULL(?, id_tareaxactico) WHERE id_tarea = ?',
            [descripcion, id_existencia, id_tareaxactico, id_tarea]
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

export const deleteTarea = async (req, res) => {
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