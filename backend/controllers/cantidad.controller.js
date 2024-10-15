import { pool } from '../db.js'

export const getCantidad = async (req, res)=> {
    const [rows] = await pool.query('SELECT * FROM cantidad')
    res.json(rows)
}

export const createCantidad = async (req, res)=>{
    const {id, activo, cantidad, existencia} = req.body
    const [rows] = await pool.query('INSERT INTO cantidad (id_cantidad, id_activo, cantidad, id_existencia) VALUES ( ?, ?, ?, ?)',
        [id, activo, cantidad, existencia])
    res.send({rows})
}
export const editCantidad = (req, res)=> res.send('Actualizando cantidad')