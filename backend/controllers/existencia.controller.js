import { pool } from '../db.js';

export const getExistencias = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM existencia');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener las existencias',
            error: error.message
        });
    }
};

export const getExistencia = async (req, res) => {
    const { id_existencia } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM existencia WHERE id_existencia = ?', [id_existencia]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Existencia no encontrada'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener la existencia',
            error: error.message
        });
    }
};

export const createExistencia = async (req, res) => {
    const { id_existencia, disponible } = req.body;
    try {
        const [rows] = await pool.query(
            'INSERT INTO existencia (id_existencia, disponible) VALUES (?, ?)', 
            [id_existencia, disponible]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear la existencia',
            error: error.message
        });
    }
};

export const editExistencia = async (req, res) => {
    const { id_existencia } = req.params;
    const { disponible } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE existencia SET disponible = IFNULL(?, disponible) WHERE id_existencia = ?', 
            [disponible, id_existencia]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Existencia no encontrada'
        });

        const [rows] = await pool.query('SELECT * FROM existencia WHERE id_existencia = ?', [id_existencia]);

        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar la existencia',
            error: error.message
        });
    }
};

export const deleteExistencia = async (req, res) => {
    const { id_existencia } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM existencia WHERE id_existencia = ?', [id_existencia]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Existencia no encontrada'
        });

        res.send('Existencia eliminada');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar la existencia',
            error: error.message
        });
    }
};