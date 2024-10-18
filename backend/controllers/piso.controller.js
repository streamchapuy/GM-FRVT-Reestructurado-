import { pool } from '../db.js';

export const getPisos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM piso');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los pisos',
            error: error.message
        });
    }
};

export const getPiso = async (req, res) => {
    const { id_piso } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM piso WHERE id_piso = ?', [id_piso]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Piso no encontrado'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener el piso',
            error: error.message
        });
    }
};

export const createPiso = async (req, res) => {
    const { id_piso, nombre, id_existencia } = req.body;
    try {
        const [rows] = await pool.query(
            'INSERT INTO piso (id_piso, nombre, id_existencia) VALUES (?, ?, ?)',
            [id_piso, nombre, id_existencia]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el piso',
            error: error.message
        });
    }
};

export const editPiso = async (req, res) => {
    const { id_piso } = req.params;
    const { nombre, id_existencia } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE piso SET nombre = IFNULL(?, nombre), id_existencia = IFNULL(?, id_existencia) WHERE id_piso = ?',
            [nombre, id_existencia, id_piso]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Piso no encontrado'
        });

        const [rows] = await pool.query('SELECT * FROM piso WHERE id_piso = ?', [id_piso]);

        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar el piso',
            error: error.message
        });
    }
};

export const deletePiso = async (req, res) => {
    const { id_piso } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM piso WHERE id_piso = ?', [id_piso]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Piso no encontrado'
        });

        res.send('Piso eliminado');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar el piso',
            error: error.message
        });
    }
};