import { pool } from '../db.js';

export const getTags = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM tag');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los tags',
            error: error.message
        });
    }
};

export const getTag = async (req, res) => {
    const { id_tag } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM tag WHERE id_tag = ?', [id_tag]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Tag no encontrado'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener el tag',
            error: error.message
        });
    }
};

export const createTag = async (req, res) => {
    const { id_tag, id_operario, id_edificio, id_piso, id_sector, id_activo, id_ubicacion, id_cantidad } = req.body;
    try {
        const [rows] = await pool.query(
            'INSERT INTO tag (id_tag, id_operario, id_edificio, id_piso, id_sector, id_activo, id_ubicacion, id_cantidad) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [id_tag, id_operario, id_edificio, id_piso, id_sector, id_activo, id_ubicacion, id_cantidad]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el tag',
            error: error.message
        });
    }
};

export const editTag = async (req, res) => {
    const { id_tag } = req.params;
    const { id_operario, id_edificio, id_piso, id_sector, id_activo, id_ubicacion, id_cantidad } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE tag SET id_operario = IFNULL(?, id_operario), id_edificio = IFNULL(?, id_edificio), id_piso = IFNULL(?, id_piso), id_sector = IFNULL(?, id_sector), id_activo = IFNULL(?, id_activo), id_ubicacion = IFNULL(?, id_ubicacion), id_cantidad = IFNULL(?, id_cantidad) WHERE id_tag = ?',
            [id_operario, id_edificio, id_piso, id_sector, id_activo, id_ubicacion, id_cantidad, id_tag]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Tag no encontrado'
        });

        const [rows] = await pool.query('SELECT * FROM tag WHERE id_tag = ?', [id_tag]);

        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar el tag',
            error: error.message
        });
    }
};

export const deleteTag = async (req, res) => {
    const { id_tag } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM tag WHERE id_tag = ?', [id_tag]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Tag no encontrado'
        });

        res.send('Tag eliminado');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar el tag',
            error: error.message
        });
    }
};