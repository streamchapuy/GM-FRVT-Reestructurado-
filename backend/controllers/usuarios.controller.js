import { pool } from '../db.js';

export const getUsuarios = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los usuarios',
            error: error.message
        });
    }
};

export const getUsuario = async (req, res) => {
    try {
        const { id_usuarios } = req.params;
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE id_usuarios = ?', [id_usuarios]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'Usuario no encontrado'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener el usuario',
            error: error.message
        });
    }
};

export const createUsuario = async (req, res) => {
    try {
        const { id_usuarios, id_operario, id_admin } = req.body;
        const [rows] = await pool.query(
            'INSERT INTO usuarios (id_usuarios, id_operario, id_admin) VALUES (?, ?, ?)',
            [id_usuarios, id_operario, id_admin]
        );
        res.send({ rows });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el usuario',
            error: error.message
        });
    }
};

export const editUsuario = async (req, res) => {
    try {
        const { id_usuarios } = req.params;
        const { id_operario, id_admin } = req.body;

        const [result] = await pool.query(
            'UPDATE usuarios SET id_operario = IFNULL(?, id_operario), id_admin = IFNULL(?, id_admin) WHERE id_usuarios = ?',
            [id_operario, id_admin, id_usuarios]
        );

        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Usuario no encontrado'
        });

        const [rows] = await pool.query('SELECT * FROM usuarios WHERE id_usuarios = ?', [id_usuarios]);

        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar el usuario',
            error: error.message
        });
    }
};

export const deleteUsuario = async (req, res) => {
    try {
        const { id_usuarios } = req.params;
        const [rows] = await pool.query('DELETE FROM usuarios WHERE id_usuarios = ?', [id_usuarios]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Usuario no encontrado'
        });

        res.send('Ubicación eliminada');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar el usuario',
            error: error.message
        });
    }
};