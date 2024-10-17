import { pool } from '../db.js'

export const getEdificios = async (req, res) => {
    try {

        const [rows] = await pool.query('SELECT * FROM edificio');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener la cantidad',
            error: error.message
        });
    }
};

export const getEdificio = async (req, res)=> {
    const {id_edificio} = req.params;
    console.log(req.params.id_edificio)
    const [rows] = await pool.query('SELECT * FROM edificio WHERE id_edificio = ?',
    [req.params.id_edificio])
    
    if (rows.length <= 0) return res.status(404).json({
        message: 'Edificio no encontrado'
    })
    
    res.json(rows[0])
}

export const createEdificio = async (req, res)=> {
    const {id_edificio, nombre, calle, id_existencia} = req.body
    const [rows] = await pool.query('INSERT INTO edificio (id_edificio, nombre, calle, id_existencia) VALUES (?, ?, ?, ?)',
        [id_edificio, nombre, calle, id_existencia])
    res.send({rows})
}

export const editEdificio = async (req, res)=> {
    
}

export const deleteEdificio = async (req, res)=> {
    const {id_edificio} = req.params;
    const [rows] = await pool.query('DELETE FROM edificio WHERE id_edificio = ?',
    [req.params.id])
    res.send('Edificio borrado')
}