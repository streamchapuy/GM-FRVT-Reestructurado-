import { pool } from '../db.js';

export const getAdmins = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM admin');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los admin',
            error: error.message
        });
    }
};

export const getAdmin = async (req, res) => {
    const { id_admin } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM admin WHERE id_admin = ?', [id_admin]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Admin no encontrado'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener el admin',
            error: error.message
        });
    }
};

export const createAdmin = async (req, res) => {
    const { id_admin, nombre, id_existencia } = req.body;
    try {
        const [rows] = await pool.query(
            'INSERT INTO admin (id_admin, nombre, id_existencia) VALUES (?, ?, ?)',
            [id_admin, nombre, id_existencia]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el admin',
            error: error.message
        });
    }
};

export const editAdmin = async (req, res) => {
    const { id_admin } = req.params;
    const { nombre, id_existencia } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE admin SET nombre = IFNULL(?, nombre), id_existencia = IFNULL(?, id_existencia) WHERE id_admin = ?',
            [nombre, id_existencia, id_admin]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Admin no encontrado'
        });

        const [rows] = await pool.query('SELECT * FROM admin WHERE id_admin = ?', [id_admin]);

        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar el admin',
            error: error.message
        });
    }
};

export const deleteAdmin = async (req, res) => {
    const { id_admin } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM admin WHERE id_admin = ?', [id_admin]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Admin no encontrado'
        });

        res.send('Admin eliminado');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar el admin',
            error: error.message
        });
    }
};