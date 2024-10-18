import { pool } from '../db.js';

export const getOTs = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM orden_trabajo');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener las órdenes de trabajo',
            error: error.message
        });
    }
};

export const getOT = async (req, res) => {
    const { id_ot } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM orden_trabajo WHERE id_ot = ?', [id_ot]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Orden de trabajo no encontrada'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener la orden de trabajo',
            error: error.message
        });
    }
};

export const createOT = async (req, res) => {
    const { id_tag, id_usuarios } = req.body;
    try {
        const [rows] = await pool.query(
            'INSERT INTO orden_trabajo (id_ot, id_tag, id_usuarios) VALUES (?, ?, ?)',
            [id_tag, id_usuarios]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear la orden de trabajo',
            error: error.message
        });
    }
};

export const editOT = async (req, res) => {
    const { id_ot } = req.params;
    const { id_tag, id_usuarios } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE orden_trabajo SET id_tag = IFNULL(?, id_tag), id_usuarios = IFNULL(?, id_usuarios) WHERE id_ot = ?',
            [id_tag, id_usuarios, id_ot]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Orden de trabajo no encontrada'
        });

        const [rows] = await pool.query('SELECT * FROM orden_trabajo WHERE id_ot = ?', [id_ot]);

        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar la orden de trabajo',
            error: error.message
        });
    }
};

export const deleteOT = async (req, res) => {
    const { id_ot } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM orden_trabajo WHERE id_ot = ?', [id_ot]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Orden de trabajo no encontrada'
        });

        res.send('Orden de trabajo eliminada');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar la orden de trabajo',
            error: error.message
        });
    }
};