import bcript from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../db.js';


export const  logeoUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const query = 'SELECT * FROM users WHERE username = ?';
        base_conexion.query(query, [username], async (error, results) => {
            if (error) {
                console.error('Error al buscar el usuario: ' + error);
                return res.status(500).json({ message: 'Error al buscar el usuario' });
            }

            if (results.length === 0) {
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }
            const user = results[0];

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Credenciales inválidas' });
            }

            const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ token });

            res.json({ message: 'Inicio de sesión exitoso', token });
        });


    } catch (error) {
        console.error('Error en el proceso de login: ' + error);
        res.status(500).json({ message: 'Error en el proceso de login' })
    }
}