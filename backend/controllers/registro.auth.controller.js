import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { pool } from '../db.js';  

dotenv.config();

export const registerUser = async (req, res) => {
    const { email, contraseña_hash } = req.body;

    // Validación de campos
  if (!email || !contraseña_hash) {
    console.log('Datos Faltantes: ', req.body);
    return res.status(400).json({ message: 'El email y la contraseña son obligatorios.' });
}

    try {
        // Comprobar si el usuario ya existe
        const [existingUser] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'El nombre de usuario ya está en uso.' });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(contraseña_hash, 10);  

        // Insertar nuevo usuario en la base de datos
        const query = 'INSERT INTO usuarios (email, contraseña_hash) VALUES (?, ?)';
        const [result] = await pool.query(query, [email, hashedPassword]);

        // Generar el token de autenticación
        const token = jwt.sign({ userId: result.insertId }, process.env.SECRET_KEY, { expiresIn: '1h' });

        // Crear objeto de respuesta
        const newUser = {
            id_usuario: result.insertId,
            email: email,            
            token: token
        };

        // Responder con éxito
        res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
    } catch (error) {
        console.error('Error en el proceso de registro: ', error);
        res.status(500).json({ message: 'Error en el proceso de registro' });
    }
};
