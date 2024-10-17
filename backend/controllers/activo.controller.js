import { pool } from '../db.js'

export const getActivo = async (req, res)=> {
    const [rows] = await pool.query('SELECT * FROM activo')
    res.json(rows)
}
export const createActivo = async (req, res)=> {
    const {id_activo, nombre, abreviacion, id_existencia} = req.body
    const [rows] = await pool.query('INSERT INTO activo (id_activo, nombre, abreviacion, id_existencia) VALUES (?, ?, ?, ?)',
        [id_activo, nombre, abreviacion, id_existencia])
    res.send({rows})
}

export const editActivo = (req, res)=> res.send('Actualizando activo')