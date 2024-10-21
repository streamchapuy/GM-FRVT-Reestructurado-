import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import { pool } from '../db.js';

export const registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {        
        const [existingUser] = await pool.query('SELECT * FROM operario WHERE username = ?', [username]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'El nombre de usuario ya está en uso.' });
        }      
        const hashedPassword = await bcrypt.hash(password, 10);        
       
        const query = 'INSERT INTO operario (username, password) VALUES (?, ?)';
        const [result] = await pool.query(query, [username, hashedPassword]);

        const newUser = {
            id_operario: result.insertId,
            username: username,
            password: password,
            token: hashedPassword
        };       
        res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
    } catch (error) {
        console.error('Error en el proceso de registro: ', error);
        res.status(500).json({ message: 'Error en el proceso de registro' });
    }
};
