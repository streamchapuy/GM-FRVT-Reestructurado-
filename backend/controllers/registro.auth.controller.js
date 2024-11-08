import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../db.js';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export const createUser = async (req, res) => {
    const { nombre, email, password } = req.body; 
    try {
        const [result] = await pool.query('INSERT INTO usuario (nombre, email, contraseña_hash) VALUES (?, ?, ?)', [nombre, email, password]);
        res.status(201).json({ id: result.insertId, nombre });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
};
