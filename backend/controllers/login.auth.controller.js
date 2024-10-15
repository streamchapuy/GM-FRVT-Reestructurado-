import { pool } from '../db.js'; 
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY; 

export const logeoUser = async (req, res) => {
    const { username, password } = req.body;

    try {
       
        const [results] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

        if (results.length === 0) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }
        const user = results[0];

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ message: 'Inicio de sesión exitoso', token }); 
    } catch (error) {
        console.error('Error en el proceso de login: ' + error);
        res.status(500).json({ message: 'Error en el proceso de login' });
    }
}
