import { Router } from "express";
import { createTareaXActivo, editTareaXActivo, getTareaXActivo } from "../controllers/tareaxactivo.controller.js";

const router = Router()

router.get('/tareaxactivo', getTareaXActivo)
router.post('/tareaxactivo ', createTareaXActivo)
router.put('/tareaxactivo', editTareaXActivo)

export default router