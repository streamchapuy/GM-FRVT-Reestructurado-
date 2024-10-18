import { pool } from '../db.js';

export const getActivos = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM activo');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los activos',
            error: error.message
        });
    }
};

export const getActivo = async (req, res)=> {
    try {
        const {id_activo} = req.params;
        console.log(req.params.id_activo)
        const [rows] = await pool.query('SELECT * FROM activo WHERE id_activo = ?',
        [req.params.id_activo])
        
        if (rows.length <= 0) return res.status(404).json({
            message: 'Activo no encontrado'
        })
        
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener el activo',
            error: error.message
        });
    }
};

export const createActivo = async (req, res)=> {
    try {
        const {id_activo, nombre, abreviacion, id_existencia} = req.body
    const [rows] = await pool.query('INSERT INTO activo (id_activo, nombre, abreviacion, id_existencia) VALUES (?, ?, ?, ?)',
        [id_activo, nombre, abreviacion, id_existencia])
    res.send({rows})
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el activo',
            error: error.message
        });
    }
};

export const editActivo = async (req, res)=> {
    try {
        const {id_activo} = req.params
        const {nombre, abreviacion, id_existencia} = req.body
    
        const [result] = await pool.query('UPDATE activo SET nombre = IFNULL(?, nombre), abreviacion = IFNULL(?, abreviacion), id_existencia = IFNULL(?, id_existencia) WHERE id_activo = ?',
            [nombre, abreviacion, id_existencia, id_activo])
    
        console.log(result)
    
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Activo no encontrado'
        })
    
        const [rows] = await pool.query('SELECT * FROM activo WHERE id_activo = ?', [id_activo])
    
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Error al editar el activo',
            error: error.message
        });
    }
};

export const deleteActivo = async (req, res)=> {
    try {
        const {id_activo} = req.params;
        const [rows] = await pool.query('DELETE FROM activo WHERE id_activo = ?',
        [req.params.id_activo])
    
        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'Activo no encontrado'
        })
    
        res.send('402')
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar el activo',
            error: error.message
        });
    }
};