import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

export const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Conexión a la base de datos establecida");
    connection.release();
  } catch (error) {
    console.error("Error de conexión a la base de datos: " + error);
  }
};

testConnection();




export default pool;
