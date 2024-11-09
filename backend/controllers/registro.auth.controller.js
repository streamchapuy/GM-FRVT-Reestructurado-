import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../db.js';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export const registerUser = async (req, res) => {
    const { nombre, email, contrasena } = req.body;

    // Validar si los campos requeridos están presentes
    if (!nombre || !email || !contrasena) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    try {
        const [existingUser] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'El email ya está en uso.' });
        }

        const hashedPassword = await bcrypt.hash(contrasena, 10);
        const query = 'INSERT INTO usuarios (nombre, email, contraseña_hash) VALUES (?, ?, ?)';
        const [result] = await pool.query(query, [nombre, email, hashedPassword]);

        const token = jwt.sign({ userId: result.insertId }, SECRET_KEY, { expiresIn: '1h' });

        const newUser = {
            id_usuario: result.insertId,            
            nombre: nombre,
            email: email,
            token: token
        };

        res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
    } catch (error) {
        console.error('Error en el proceso de registro: ', error);
        res.status(500).json({ message: 'Error en el proceso de registro' });
    }
};

