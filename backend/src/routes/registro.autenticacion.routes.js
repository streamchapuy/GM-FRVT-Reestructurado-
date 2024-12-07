import express from 'express';
import { register_de_Usuario } from '../controllers/registro.autenticacion.controller.js';
// import authenticateToken from '../middleware/authmiddleware.js';
 

const router = express.Router();


router.post('/register', register_de_Usuario)

export default router;