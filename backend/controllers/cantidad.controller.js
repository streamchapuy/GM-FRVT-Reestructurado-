import { pool } from '../db.js';

export const getCantidades = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM cantidad');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener las cantidades',
            error: error.message
        });
    }
};

export const getCantidad = async (req, res) => {
    try {
        const { id_cantidad } = req.params;
        const [rows] = await pool.query('SELECT * FROM cantidad WHERE id_cantidad = ?', [id_cantidad]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Cantidad no encontrada'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener la cantidad',
            error: error.message
        });
    }
};

export const createCantidad = async (req, res) => {
    try {
        const { id_cantidad, id_activo, cantidad, id_existencia } = req.body;
        const [rows] = await pool.query(
            'INSERT INTO cantidad (id_cantidad, id_activo, cantidad, id_existencia) VALUES (?, ?, ?, ?)',
            [id_cantidad, id_activo, cantidad, id_existencia]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear la cantidad',
            error: error.message
        });
    }
};

export const editCantidad = async (req, res) => {
    try {
        const { id_cantidad } = req.params;
        const { id_activo, cantidad, id_existencia } = req.body;

        const [result] = await pool.query(
            'UPDATE cantidad SET id_activo = IFNULL(?, id_activo), cantidad = IFNULL(?, cantidad), id_existencia = IFNULL(?, id_existencia) WHERE id_cantidad = ?',
            [id_activo, cantidad, id_existencia, id_cantidad]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Cantidad no encontrada'
        });

        const [rows] = await pool.query('SELECT * FROM cantidad WHERE id_cantidad = ?', [id_cantidad]);

        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar la cantidad',
            error: error.message
        });
    }
};

export const deleteCantidad = async (req, res) => {
    try {
        const { id_cantidad } = req.params;
        const [rows] = await pool.query('DELETE FROM cantidad WHERE id_cantidad = ?', [id_cantidad]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Cantidad no encontrada'
        });

        res.send('Cantidad eliminada');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar la cantidad',
            error: error.message
        });
    }
};
