import { pool } from '../db.js'

export const getCantidades = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM cantidad');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los edificios',
            error: error.message
        });
    }
};

export const getCantidad = async (req, res)=> {
    const [rows] = await pool.query('SELECT * FROM cantidad')
    res.json(rows)
    
    if (rows.length <= 0) return res.status(404).json({
        message: 'Cantidad no encontrada'
    })
    
    res.json(rows[0])
}

export const createCantidad = async (req, res)=>{
    const {id_cantidad, id_activo, cantidad, id_existencia} = req.body
    const [rows] = await pool.query('INSERT INTO cantidad (id_cantidad, id_activo, cantidad, id_existencia) VALUES ( ?, ?, ?, ?)',
        [id_cantidad, id_activo, cantidad, id_existencia])
    res.send({rows})
}
export const editCantidad = (req, res)=> res.send('Actualizando cantidad')