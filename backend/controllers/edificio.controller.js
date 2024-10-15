import { pool } from '../db.js'

export const getEdificios = async (req, res)=> async (req, res)=> {
    const [rows] = await pool.query('SELECT * FROM edificio')
    res.json(rows)
}

export const getEdificio = async (req, res)=> async (req, res)=> {
    console.log(req.params.id)
    const [rows] = await pool.query('SELECT * FROM edificio WHERE id = ?', [req.params.id])
    res.json(rows[0])
}

export const createEdificio = async (req, res)=> {
    const {id, nombre, calle, existencia} = req.body
    const [rows] = await pool.query('INSERT INTO edificio (id_edificio, nombre, calle, id_existencia) VALUES (?, ?, ?, ?)',
        [id, nombre, calle, existencia])
    res.send({rows})
}

export const editEdificio = async (req, res)=> {
    
}