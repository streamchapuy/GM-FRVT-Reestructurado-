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
    try {
        const { id_ot } = req.params;
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
    try {
        const { id_operario, id_edificio, id_piso, id_sector, id_activo, id_ubicacion, id_cantidad } = req.body;
        const [rows] = await pool.query(
            'INSERT INTO orden_trabajo (id_operario, id_edificio, id_piso, id_sector, id_activo, id_ubicacion, id_cantidad) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [id_operario, id_edificio, id_piso, id_sector, id_activo, id_ubicacion, id_cantidad]
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
    try {
        const { id_ot } = req.params;
        const { id_operario, id_edificio, id_piso, id_sector, id_activo, id_ubicacion, id_cantidad } = req.body;

        const [result] = await pool.query(
            'UPDATE orden_trabajo SET id_operario = IFNULL(?, id_operario), id_edificio = IFNULL(?, id_edificio), id_piso = IFNULL(?, id_piso), id_sector = IFNULL(?, id_sector), id_activo = IFNULL(?, id_activo), id_ubicacion = IFNULL(?, id_ubicacion), id_cantidad = IFNULL(?, id_cantidad) WHERE id_ot = ?',
            [id_operario, id_edificio, id_piso, id_sector, id_activo, id_ubicacion, id_cantidad, id_ot]
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
    try {
        const { id_ot } = req.params;
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