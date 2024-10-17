import { pool } from '../db.js'

export const getTareaXActivo = async (req, res)=> {
    const [rows] = await pool.query('SELECT * FROM tareaxactivo')
    res.json(rows)
}

export const createTareaXActivo = async (req, res)=> {
    const {id_tareaxactico, descripcion} = req.body
    const [rows] = await pool.query('INSERT INTO tareaxactivo (id_tareaxactico, descripcion) VALUES (?, ?)',
        [id_tareaxactico, descripcion])
    res.send({rows})
}

export const editTareaXActivo = (req, res)=> res.send('Actualizando tarea x activo')