import { pool } from '../db.js'

export const getExistencia = (req, res)=> async (req, res)=> {
    const [rows] = await pool.query('SELECT * FROM existencia')
    res.json(rows)
}

export const createExistencia = async (req, res)=> {
    const {existencia, disponible} = req.body
    const [rows] = await pool.query('INSERT INTO existencia (id_existencia, disponible) VALUES (?, ?)',
        [existencia, disponible])
    res.send({rows})
}

export const editExistencia = (req, res)=> res.send('Actualizando existencia')