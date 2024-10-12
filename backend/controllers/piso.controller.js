import { pool } from '../db.js'

export const getPiso = async (req, res)=> {
    const [rows] = await pool.query('SELECT * FROM piso')
    res.json(rows)
}

export const createPiso = async (req, res)=> {
    const {id, nombre, existencia} = req.body
    const [rows] = await pool.query('INSERT INTO piso (id_piso, nombre, id_existencia) VALUES (?, ?, ?)',
        [id, nombre, existencia])
    res.send({rows})
}

export const editPiso = (req, res)=> res.send('Actualizando piso')