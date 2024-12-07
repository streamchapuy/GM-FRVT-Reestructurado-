import { createPool } from 'mysql2/promise';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE } from '../src/config.js';

export const pool = createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});

const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Conexión a la base de datos establecida:", DB_HOST + ":" + DB_PORT);
    connection.release();
  } catch (error) {
    console.error("Error de conexión a la base de datos: " + error);
  }
};

testConnection();

export default pool;
