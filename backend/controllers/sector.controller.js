import { pool } from '../db.js'

export const getSector = (req, res)=> async (req, res)=> {
    const [rows] = await pool.query('SELECT * FROM sector')
    res.json(rows)
}
export const createSector = async (req, res)=> {
    const {id, nombre, existencia} = req.body
    const [rows] = await pool.query('INSERT INTO sector (id_sector, nombre, id_existencia) VALUES ( ?, ?, ?)',
        [id, nombre, existencia])
    res.send({rows})
}

export const editSector = (req, res)=> res.send('Actualizando sector')