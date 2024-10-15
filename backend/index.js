import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';

import loginRoutes from '../backend/routes/login_auth.routes.js';
import registroRoutes from '../backend/routes/registro.auth.routes.js';
import authenticateToken from "../backend/middleware/authmiddleware.js";

import activotareaRoutes from './routes/activo-tarea.routes.js';
import activoRoutes from './routes/activo.routes.js';
import edificioRoutes from './routes/edificio.routes.js';
import existenciaRoutes from './routes/existencia.routes.js';
import indexRoutes from './routes/index.routes.js';
import otRoutes from './routes/ot.routes.js';
import pisoRoutes from './routes/piso.routes.js';
import sectorRoutes from './routes/sector.routes.js';
import tareaRoutes from './routes/tarea.routes.js';
import tareaxactivoRoutes from './routes/tareaxactivo.routes.js';
import ubicacionRoutes from './routes/ubicacion.routes.js';



const app = express();
dotenv.config();

const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}

app.use(cors(corsOptions));
app.use(express.json())

app.use(loginRoutes)
app.use(registroRoutes)
app.use(authenticateToken)


app.use(indexRoutes)
app.use(otRoutes)
app.use(edificioRoutes)
app.use(sectorRoutes)
app.use(ubicacionRoutes)
app.use(pisoRoutes)
app.use(activoRoutes)
app.use(tareaRoutes)
app.use(activotareaRoutes)
app.use(tareaxactivoRoutes)
app.use(existenciaRoutes)



const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
