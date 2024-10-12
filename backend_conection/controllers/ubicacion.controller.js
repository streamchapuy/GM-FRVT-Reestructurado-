import { pool } from '../db.js'

export const getUbicacion = async (req, res)=> {
    const [rows] = await pool.query('SELECT * FROM ubicacion')
    res.json(rows)
}

export const createUbicacion = async (req, res)=> {
    const {id, nombre, existencia} = req.body
    const [rows] = await pool.query('INSERT INTO ubicacion (id_ubicacion, nombre, id_existencia) VALUES ( ?, ?, ?)',
        [id, nombre, existencia])
    res.send({rows})
}

export const editUbicacion = (req, res)=> res.send('Actualizando ubicacion')