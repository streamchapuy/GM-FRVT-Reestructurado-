import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { pool } from '../db.js';  

dotenv.config();


export const registerUser = async (req, res) => {
    const { email, contraseña_hash} = req.body;

    if (!email || !contraseña_hash) {
        return res.status(400).json({ message: 'El email y la contraseña son obligatorios.' });
    }

    try {        
        const [existingUser] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'El nombre de usuario ya está en uso.' });
        }

      

        const hashedPassword = await bcrypt.hash(contraseña_hash, 10);  
        
        const query = 'INSERT INTO usuarios (email,contraseña_hash ) VALUES (?, ?)';
        const [result] = await pool.query(query, [email, hashedPassword]);

        const token = jwt.sign({ userId: result.insertId }, process.env.SECRET_KEY, { expiresIn: '1h' });

        const newUser = {
            id_usuario: result.insertId,
            email: email,            
            token: token
        };

        res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
    } catch (error) {
        console.error('Error en el proceso de registro: ', error);
        res.status(500).json({ message: 'Error en el proceso de registro' });
    }
};
