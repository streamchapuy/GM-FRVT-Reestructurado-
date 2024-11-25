import express from 'express';
import { acceso_de_Usuario } from '../controllers/acceso.autenticacion.controller.js';

const router = express.Router();

router.post('/login', acceso_de_Usuario);


export default router