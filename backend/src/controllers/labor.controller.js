import { pool } from '../db.js';

export const obtener_Labores = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM labor');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener labores',
            error: error.message
        });
    }
};

export const obtener_Labor_por_id = async (req, res) => {
    const { id_labor } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM labor WHERE id_labor = ?', [id_labor]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'labor no encontrada'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener labor',
            error: error.message
        });
    }
};

export const crear_Labor = async (req, res) => {
    const { id_labor, descripcion } = req.body;
    try {
        const [rows] = await pool.query(
            'INSERT INTO labor (id_labor, descripcion) VALUES (?, ?)',
            [id_labor, descripcion]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear labor',
            error: error.message
        });
    }
};

export const editar_Labor = async (req, res) => {
    const { id_labor } = req.params;
    const { descripcion } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE labor SET descripcion = IFNULL(?, descripcion) WHERE id_labor = ?',
            [descripcion, id_labor]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'labor no encontrada'
        });

        const [rows] = await pool.query('SELECT * FROM labor WHERE id_labor = ?', [id_labor]);

        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar labor',
            error: error.message
        });
    }
};

export const eliminar_Labor = async (req, res) => {
    const { id_labor } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM labor WHERE id_labor = ?', [id_labor]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'labor no encontrada'
        });

        res.send('labor eliminada');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar labor',
            error: error.message
        });
    }
};