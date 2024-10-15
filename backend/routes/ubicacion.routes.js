import { Router } from "express";
import { createUbicacion, editUbicacion, getUbicacion } from "../controllers/ubicacion.controller.js";

const router = Router()

router.get('/ubicacion', getUbicacion)
router.post('/ubicacion', createUbicacion)
router.put('/ubicacion', editUbicacion)

export default router