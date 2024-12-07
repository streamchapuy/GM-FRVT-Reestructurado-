import app from './src/app.js';
import dotenv from 'dotenv';
import { PORT } from './src/config.js';

dotenv.config();

app.listen(PORT)
console.log('Servidor corriendo en el puerto:' , PORT)

