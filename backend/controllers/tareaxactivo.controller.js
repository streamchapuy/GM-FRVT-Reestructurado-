import { pool } from '../db.js';

export const getTareasXActivos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM tareaxactivo');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener las tareas por activo',
            error: error.message
        });
    }
};

export const getTareaXActivo = async (req, res) => {
    try {
        const { id_tareaxactico } = req.params;
        const [rows] = await pool.query('SELECT * FROM tareaxactivo WHERE id_tareaxactico = ?', [id_tareaxactico]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Tarea por activo no encontrada'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener la tarea por activo',
            error: error.message
        });
    }
};

export const createTareaXActivo = async (req, res) => {
    try {
        const { id_tareaxactico, descripcion } = req.body;
        const [rows] = await pool.query(
            'INSERT INTO tareaxactivo (id_tareaxactico, descripcion) VALUES (?, ?)',
            [id_tareaxactico, descripcion]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear la tarea por activo',
            error: error.message
        });
    }
};

export const editTareaXActivo = async (req, res) => {
    try {
        const { id_tareaxactico } = req.params;
        const { descripcion } = req.body;

        const [result] = await pool.query(
            'UPDATE tareaxactivo SET descripcion = IFNULL(?, descripcion) WHERE id_tareaxactico = ?',
            [descripcion, id_tareaxactico]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Tarea por activo no encontrada'
        });

        const [rows] = await pool.query('SELECT * FROM tareaxactivo WHERE id_tareaxactico = ?', [id_tareaxactico]);

        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar la tarea por activo',
            error: error.message
        });
    }
};

export const deleteTareaXActivo = async (req, res) => {
    try {
        const { id_tareaxactico } = req.params;
        const [rows] = await pool.query('DELETE FROM tareaxactivo WHERE id_tareaxactico = ?', [id_tareaxactico]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Tarea por activo no encontrada'
        });

        res.send('Tarea por activo eliminada');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar la tarea por activo',
            error: error.message
        });
    }
};