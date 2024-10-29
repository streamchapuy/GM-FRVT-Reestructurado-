import { pool } from "../db.js";

export const getTags = async (req, res) => {
  try {
    console.log("Ejecutando consulta SQL...");
    const [rows] = await pool.query(`
    SELECT
	a.abreviacion AS abreviatura_activo,
    LPAD(ed.id_edificio, 4, '0') AS edificio_id_formateado,
    LPAD(p.id_piso, 4, '0') AS piso_id_formateado,
    LPAD(s.id_sector, 4, '0') AS sector_id_formateado,
    LPAD(a.id_activo, 4, '0') AS activo_id_formateado,
    LPAD(u.id_ubicacion, 4, '0') AS ubicacion_id_formateado,
    t.id_cantidad
FROM
    tag t
JOIN edificio ed ON t.id_edificio = ed.id_edificio
JOIN piso p ON t.id_piso = p.id_piso
JOIN sector s ON t.id_sector = s.id_sector
JOIN activo a ON t.id_activo = a.id_activo
JOIN ubicacion u ON t.id_ubicacion = u.id_ubicacion;

        `);
    console.log("Consulta ejecutada correctamente", rows);
    res.json(rows);
  } catch (error) {
    console.error("Error en el servidor:", error);
    return res.status(500).json({
      message: "Error al obtener los tags",
      error: error.message,
    });
  }
};

export const getTag = async (req, res) => {
  const { id_tag } = req.params;
  try {
    const [rows] = await pool.query("SELECT * FROM tag WHERE id_tag = ?", [
      id_tag,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        message: "Tag no encontrado",
      });

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener el tag",
      error: error.message,
    });
  }
};

export const createTag = async (req, res) => {
  const {
    id_tag,
    id_operario,
    id_edificio,
    id_piso,
    id_sector,
    id_activo,
    id_ubicacion,
    id_cantidad,
  } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO tag (id_tag, id_operario, id_edificio, id_piso, id_sector, id_activo, id_ubicacion, id_cantidad) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        id_tag,
        id_operario,
        id_edificio,
        id_piso,
        id_sector,
        id_activo,
        id_ubicacion,
        id_cantidad,
      ]
    );
    res.send({ rows });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear el tag",
      error: error.message,
    });
  }
};

export const editTag = async (req, res) => {
  const { id_tag } = req.params;
  const {
    id_operario,
    id_edificio,
    id_piso,
    id_sector,
    id_activo,
    id_ubicacion,
    id_cantidad,
  } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE tag SET id_operario = IFNULL(?, id_operario), id_edificio = IFNULL(?, id_edificio), id_piso = IFNULL(?, id_piso), id_sector = IFNULL(?, id_sector), id_activo = IFNULL(?, id_activo), id_ubicacion = IFNULL(?, id_ubicacion), id_cantidad = IFNULL(?, id_cantidad) WHERE id_tag = ?",
      [
        id_operario,
        id_edificio,
        id_piso,
        id_sector,
        id_activo,
        id_ubicacion,
        id_cantidad,
        id_tag,
      ]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Tag no encontrado",
      });

    const [rows] = await pool.query("SELECT * FROM tag WHERE id_tag = ?", [
      id_tag,
    ]);

    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error al actualizar el tag",
      error: error.message,
    });
  }
};

export const deleteTag = async (req, res) => {
  const { id_tag } = req.params;
  try {
    const [rows] = await pool.query("DELETE FROM tag WHERE id_tag = ?", [
      id_tag,
    ]);

    if (rows.affectedRows <= 0)
      return res.status(404).json({
        message: "Tag no encontrado",
      });

    res.send("Tag eliminado");
  } catch (error) {
    return res.status(500).json({
      message: "Error al eliminar el tag",
      error: error.message,
    });
  }
};
