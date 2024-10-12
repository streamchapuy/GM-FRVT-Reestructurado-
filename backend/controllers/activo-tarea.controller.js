import { pool } from '../db.js'

export const getActivoTarea = async (req, res)=> {
    const [rows] = await pool.query('SELECT * FROM activo_tarea')
    res.json(rows)
}

export const createActivoTarea = async (req, res)=> {
    const {activo_tarea, activo, tarea} = req.body
    const [rows] = await pool.query('INSERT INTO activo_tarea (id_activo_tarea, id_activo, id_tarea) VALUES ( ?, ?, ?)',
        [activo_tarea, activo, tarea])
    res.send({rows})
}

export const editActivoTarea = (req, res)=> res.send('Actualizando activo-tarea')