import { pool } from '../db.js';

export const obtener_Cantidades = async (req, res) => {
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

export const obtener_Cantidad_por_id = async (req, res) => {
    const { id_cantidad } = req.params;
    try {
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

export const crear_Cantidad = async (req, res) => {
    const { id_cantidad, cantidad } = req.body;
    try {
        const [rows] = await pool.query(
            'INSERT INTO cantidad (id_cantidad, cantidad ) VALUES (?, ?)',
            [id_cantidad, cantidad,]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear la cantidad',
            error: error.message
        });
    }
};

export const editar_Cantidad = async (req, res) => {
    const { id_cantidad } = req.params;
    const { cantidad } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE cantidad SET cantidad = IFNULL(?, cantidad) WHERE id_cantidad = ?',
            [ cantidad, id_cantidad]
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

export const eliminar_Cantidad = async (req, res) => {
    const { id_cantidad } = req.params;
    try {
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
