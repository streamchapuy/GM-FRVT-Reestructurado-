import { pool } from '../db.js'

export const getOT = (req, res)=> async (req, res)=> {
    const [rows] = await pool.query('SELECT * FROM orden_trabajo')
    res.json(rows)
}

export const createOT = async (req, res)=> {
    const {operario, edificio, piso, sector, activo, ubicacion, cantidad} = req.body
    const [rows] = await pool.query('INSERT INTO orden_trabajo (id_operario, id_edificio, id_piso, id_sector, id_activo, id_ubicacion, id_cantidad) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [operario, edificio, piso, sector, activo, ubicacion, cantidad])
    res.send({rows})
}

export const editOT = (req, res)=> res.send('Actualizando orden de trabajo')