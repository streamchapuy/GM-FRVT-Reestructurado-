import cors from 'cors';
import express from 'express';
import auth  from './middleware/auth.js';

// Ruta de logeo
import accesoRoutes from './routes/acceso.autenticacion.routes.js';
// Ruta de registro
import registroRoutes from './routes/registro.autenticacion.routes.js';

// Ruta para formularios
import activotareaRoutes from './routes/activo-tarea.routes.js';
import activoRoutes from './routes/activo.routes.js';
import edificioRoutes from './routes/edificio.routes.js';
import ordenTrabajoRoutes from './routes/orden.trabajo.routes.js';
import pisoRoutes from './routes/piso.routes.js';
import sectorRoutes from './routes/sector.routes.js';
import codigoRoutes from './routes/codigo.routes.js';
import tareaRoutes from './routes/tarea.routes.js';
import laborRoutes from './routes/labor.routes.js';
import ubicacionRoutes from './routes/ubicacion.routes.js';
import usuarioRutes from './routes/usuarios.routes.js';

const app = express();
const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}

app.use(cors(corsOptions))
app.use(express.json())

app.use('/API', accesoRoutes)
app.use('/API', auth, registroRoutes)

app.use('/API', auth, ordenTrabajoRoutes)
app.use('/API', auth, edificioRoutes)
app.use('/API', auth, sectorRoutes)
app.use('/API', auth, ubicacionRoutes)
app.use('/API', auth, pisoRoutes)
app.use('/API', auth, activoRoutes)
app.use('/API', auth, tareaRoutes)
app.use('/API', auth, activotareaRoutes)
app.use('/API', auth, laborRoutes)
app.use('/API', auth, codigoRoutes)
app.use('/API', auth, usuarioRutes)

app.use((_req, res) => {
    res.status(404).json({
        message: 'Ruta no encontrada'
    })
})

export default app;