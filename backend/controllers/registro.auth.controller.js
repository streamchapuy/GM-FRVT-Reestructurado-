import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../db.js'; 

dotenv.config();  

export const registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {       
  
        const hashedPassword = await bcrypt.hash(password, 10);       


        const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
        const [result] = await pool.query(query, [username, hashedPassword]);

     
        res.status(201).json({ message: 'Usuario registrado exitosamente', userId: result.insertId });
    } catch (error) {
        console.error('Error en el proceso de registro: ' + error);
        res.status(500).json({ message: 'Error en el proceso de registro' });
    }
}
