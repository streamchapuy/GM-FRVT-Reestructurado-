import { pool } from '../db.js';

export const getOperarios = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM operario');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los operarios',
            error: error.message
        });
    }
};

export const getOperario = async (req, res) => {
    const { id_operario } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM operario WHERE id_operario = ?', [id_operario]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Operario no encontrado'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener el operario',
            error: error.message
        });
    }
};

export const createOperario = async (req, res) => {
    const { id_operario, nombre, id_existencia } = req.body;
    try {
        const [rows] = await pool.query(
            'INSERT INTO operario (id_operario, nombre, id_existencia) VALUES (?, ?, ?)',
            [id_operario, nombre, id_existencia]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el operario',
            error: error.message
        });
    }
};

export const editOperario = async (req, res) => {
    const { id_operario } = req.params;
    const { nombre, id_existencia } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE operario SET nombre = IFNULL(?, nombre), id_existencia = IFNULL(?, id_existencia) WHERE id_operario = ?',
            [nombre, id_existencia, id_operario]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Operario no encontrado'
        });

        const [rows] = await pool.query('SELECT * FROM operario WHERE id_operario = ?', [id_operario]);

        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar el operario',
            error: error.message
        });
    }
};

export const deleteOperario = async (req, res) => {
    const { id_operario } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM operario WHERE id_operario = ?', [id_operario]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Operario no encontrado'
        });

        res.send('Operario eliminado');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar el operario',
            error: error.message
        });
    }
};