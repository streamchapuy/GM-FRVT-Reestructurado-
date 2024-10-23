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
    const { id_usuarios } = req.params;
    try {
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
    const { id_usuarios, email, contraseña_hash, id_operario, id_admin, tipo_usuario } = req.body;
    try {
        const [rows] = await pool.query(
            'INSERT INTO usuarios (id_usuarios, email, contraseña_hash, id_operario, id_admin, tipo_usuario) VALUES (?, ?, ?, ?, ?, ?)',
            [id_usuarios, email, contraseña_hash, id_operario, id_admin, tipo_usuario]
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
    const { id_usuarios } = req.params;
    const {email, contraseña_hash, id_operario, id_admin, tipo_usuario } = req.body;
    try {
        const [result] = await pool.query(
            'UPDATE usuarios SET email = IFNULL(?, email), contraseña_hash = IFNULL(?, contraseña_hash), id_operario = IFNULL(?, id_operario), id_admin = IFNULL(?, id_admin), tipo_usuario = IFNULL(?, tipo_usuario) WHERE id_usuarios = ?',
            [email, contraseña_hash, id_operario, id_admin, tipo_usuario, id_usuarios]
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
    const { id_usuarios } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM usuarios WHERE id_usuarios = ?', [id_usuarios]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Usuario no encontrado'
        });

        res.send('Usuario eliminado');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar el usuario',
            error: error.message
        });
    }
};