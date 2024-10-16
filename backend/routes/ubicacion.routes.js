import { Router } from "express";
import { createUbicacion, editUbicacion, getUbicacion } from "../controllers/ubicacion.controller.js";

const router = Router()

router.get('API/ubicacion', getUbicacion)
router.post('API/ubicacion', createUbicacion)
router.put('API/ubicacion', editUbicacion)

export default router