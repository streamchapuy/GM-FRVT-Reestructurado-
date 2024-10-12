import { pool } from '../ot.js'

export const getEdificio = async (req, res)=> async (req, res)=> {
    const [rows] = await pool.query('SELECT * FROM edificio')
    res.json(rows)
}

export const createEdificio = async (req, res)=> {
    const {id, nombre, calle, existencia} = req.body
    const [rows] = await pool.query('INSERT INTO edificio (id_edificio, nombre, calle, id_existencia) VALUES (?, ?, ?, ?)',
        [id, nombre, calle, existencia])
    res.send({rows})
}

export const editEdificio = async (req, res)=> {
    
}