import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import {pool} from '../db.js';

export const registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {       
  
        const hashedPassword = await bcrypt.hash(password, 10);       
        
        const query = 'INSERT INTO operario (username, password) VALUES (?, ?)';
        base_conexion.query(query, [username, hashedPassword], (error, result) => {
            if (error) {
                console.error('Error al registrar el usuario: ' + error);
                return res.status(500).json({ message: 'Error al registrar el usuario' }); 
            }
            
            res.status(201).json({ message: 'Usuario registrado exitosamente', userId: result.insertId });
        });
    } catch (error) {
        console.error('Error en el proceso de registro: ' + error);
        res.status(500).json({ message: 'Error en el proceso de registro' });
    }
}
