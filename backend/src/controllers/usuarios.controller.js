import { pool } from '../db.js';

export const obtener_usuarios = async (req, res) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM usuarios`);
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los usuarios',
            error: error.message
        });
    }
};

export const obtener_tipos_de_usuarios = async (req, res) => {
    const { tipo_usuario } = req.body;
    console.log(tipo_usuario);
    try {
        console.log("Ejecutando consulta SQL...");
        const [rows] = await pool.query(`
        SELECT * 
FROM usuarios
WHERE tipo_usuario = ?;


        `, [tipo_usuario]);

        console.log("Consulta ejecutada correctamente", rows);
        res.json(rows);
    } catch (error) {
        console.error("Error en el servidor:", error);
        return res.status(500).json({
            message: "Error al obtener filtro",
            error: error.message,
        });
    }
};


export const obtener_usuario_por_id = async (req, res) => {
    const { id_usuarios } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM usuarios WHERE id_usuarios = ?', [id_usuarios]);

        if (rows.length <= 0) return res.status(404).json({
            message: 'usuario no encontrado'
        });

        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener el usuario',
            error: error.message
        });
    }
};


export const eliminar_usuarios = async (req, res) => {
    const { id_usuarios } = req.params;
    try {
        const [rows] = await pool.query('DELETE FROM usuarios WHERE id_usuarios = ?', [id_usuarios]);

        if (rows.affectedRows <= 0) return res.status(404).json({
            message: 'usuario no encontrado'
        });

        res.send('usuario eliminado');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar la usuario',
            error: error.message
        });
    }
};