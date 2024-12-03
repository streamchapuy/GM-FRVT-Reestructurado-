import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../db.js';

const SECRET_KEY = process.env.SECRET_KEY;

export const acceso_de_Usuario = async (req, res) => {
    const { email, password } = req.body;

    try {
        const [results] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);

        if (results.length === 0) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }
        const user = results[0];

        // Aquí cambiamos password a contraseña_hash
        const isMatch = await bcrypt.compare(password, user.contraseña_hash);
        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Utilizamos el id_usuario como identificador en el JWT
        const token = jwt.sign({ userId: user.id_usuario, tipo_usuario: user.tipo_usuario }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ message: 'Inicio de sesión exitoso', token, tipo_usuario: user.tipo_usuario });

    } catch (error) {
        console.error('Error en el proceso de login:', error);
        res.status(500).json({ message: 'Error en el proceso de login' });
    }
};
