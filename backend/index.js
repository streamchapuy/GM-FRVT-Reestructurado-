import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import authenticateToken from './middleware/authmiddleware.js';
import loginRoutes from './routes/login_auth.routes.js';
import registroRoutes from './routes/registro.auth.routes.js';

import activotareaRoutes from './routes/activo-tarea.routes.js';
import activoRoutes from './routes/activo.routes.js';
import adminRoutes from './routes/admin.routes.js';
import edificioRoutes from './routes/edificio.routes.js';
import existenciaRoutes from './routes/existencia.routes.js';
import indexRoutes from './routes/index.routes.js';
import operarioRoutes from './routes/operario.routes.js';
import otRoutes from './routes/ot.routes.js';
import pisoRoutes from './routes/piso.routes.js';
import sectorRoutes from './routes/sector.routes.js';
import tagRoutes from './routes/tag.routes.js';
import tareaRoutes from './routes/tarea.routes.js';
import tareaxactivoRoutes from './routes/tareaxactivo.routes.js';
import ubicacionRoutes from './routes/ubicacion.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';



dotenv.config();
const app = express();

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

app.use('/API', indexRoutes)
app.use('/API', otRoutes)
app.use('/API', edificioRoutes)
app.use('/API', sectorRoutes)
app.use('/API', ubicacionRoutes)
app.use('/API', pisoRoutes)
app.use('/API', activoRoutes)
app.use('/API', tareaRoutes)
app.use('/API', activotareaRoutes)
app.use('/API', tareaxactivoRoutes)
app.use('/API', existenciaRoutes)
app.use('/API', tagRoutes)
app.use('/API', usuariosRoutes)
app.use('/API', operarioRoutes)
app.use('/API', adminRoutes)
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Ruta no encontrada'
    })
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
