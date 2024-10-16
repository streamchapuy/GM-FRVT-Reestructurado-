import { Router } from "express";
import { createTareaXActivo, editTareaXActivo, getTareaXActivo } from "../controllers/tareaxactivo.controller.js";

const router = Router()

router.get('API/tareaxactivo', getTareaXActivo)
router.post('API/tareaxactivo ', createTareaXActivo)
router.put('API/tareaxactivo', editTareaXActivo)

export default router