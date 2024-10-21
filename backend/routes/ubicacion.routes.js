import { Router } from "express";
import { createUbicacion, deleteUbicacion, editUbicacion, getUbicacion, getUbicaciones } from "../controllers/ubicacion.controller.js";

const router = Router()

router.get('/ubicaciones', getUbicacion)
router.get('/ubicacion/:id_ubicacion', getUbicaciones)
router.post('/ubicacion', createUbicacion)
router.patch('/ubicacion/:id_ubicacion', editUbicacion)
router.delete('/ubicacion/:id_ubicacion', deleteUbicacion)

export default router