import { pool } from '../db.js'

export const getTarea = async (req, res)=> {
    const [rows] = await pool.query('SELECT * FROM tarea')
    res.json(rows)
}

export const createTarea = async (req, res)=> {
    const {id_tarea, descripcion, id_existencia, id_tareaxactico} = req.body
    const [rows] = await pool.query('INSERT INTO tarea (id_tarea, descripcion, id_existencia, id_tareaxactico) VALUES (?, ?, ?, ?)',
        [id_tarea, descripcion, id_existencia, id_tareaxactico])
    res.send({rows})
}

export const editTarea = (req, res)=> res.send('Actualizando tarea')