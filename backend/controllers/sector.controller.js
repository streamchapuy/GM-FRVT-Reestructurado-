import { pool } from '../db.js';

export const getSectores = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM sector');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los sectores',
            error: error.message
        });
    }
};

export const getSector = async (req, res) => {
    const { id_sector } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM sector WHERE id_sector = ?', [id_sector]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Sector no encontrado'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener el sector',
            error: error.message
        });
    }
};

export const createSector = async (req, res) => {
    const { id_sector, nombre, id_existencia } = req.body;
    try {
        const [rows] = await pool.query(
            'INSERT INTO sector (id_sector, nombre, id_existencia) VALUES (?, ?, ?)',
            [id_sector, nombre, id_existencia]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el sector',
            error: error.message
        });
    }
};

export const editSector = async (req, res) => {
    const { id_sector } = req.params;
    const { nombre, id_existencia } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE sector SET nombre = IFNULL(?, nombre), id_existencia = IFNULL(?, id_existencia) WHERE id_sector = ?',
            [nombre, id_existencia, id_sector]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Sector no encontrado'
        });

        const [rows] = await pool.query('SELECT * FROM sector WHERE id_sector = ?', [id_sector]);

        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar el sector',
            error: error.message
        });
    }
};

export const deleteSector = async (req, res) => {
    const { id_sector } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM sector WHERE id_sector = ?', [id_sector]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Sector no encontrado'
        });

        res.send('Sector eliminado');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar el sector',
            error: error.message
        });
    }
};