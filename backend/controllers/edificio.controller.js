import { pool } from '../db.js';

export const getEdificios = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM edificio');
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Un error ha sucedido',
            error: error.message
        });
    }
};

export const getEdificio = async (req, res)=> {
    const {id_edificio} = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM edificio WHERE id_edificio = ?',
        [req.params.id_edificio])
        
        if (rows.length <= 0) return res.status(404).json({
            message: 'Edificio no encontrado'
        })
        
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Un error ha sucedido',
            error: error.message
        });
    }
};

export const createEdificio = async (req, res) => {
    const { nombre, calle, id_existencia } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO edificio (nombre, calle, id_existencia) VALUES (?, ?, ?)',
            [nombre, calle, id_existencia]
        );
        res.status(201).json({ id_edificio: result.insertId, nombre, calle, id_existencia });
    } catch (error) {
        return res.status(500).json({
            message: 'Un error ha sucedido',
            error: error.message
        });
    }
};


export const editEdificio = async (req, res)=> {
    const {id_edificio} = req.params
    const {nombre, calle, id_existencia} = req.body
    try {
        const [result] = await pool.query('UPDATE edificio SET nombre = IFNULL(?, nombre), calle = IFNULL(?, calle), id_existencia = IFNULL(?, id_existencia) WHERE id_edificio = ?',
            [nombre, calle, id_existencia, id_edificio])
    
        console.log(result)
    
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Edificio no encontrado'
        })
    
        const [rows] = await pool.query('SELECT * FROM edificio WHERE id_edificio = ?', [id_edificio])
    
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Un error ha sucedido',
            error: error.message
        });
    }
};

export const deleteEdificio = async (req, res) => {
    const { id_edificio } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM edificio WHERE id_edificio = ?', [id_edificio]);
        
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Edificio no encontrado'
        });
        
        res.status(204).send();
    } catch (error) {
        return res.status(500).json({
            message: 'Un error ha sucedido',
            error: error.message
        });
    }
};
