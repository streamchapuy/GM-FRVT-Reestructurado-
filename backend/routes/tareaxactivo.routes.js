import { Router } from "express";
import { createTareaXActivo, deleteTareaXActivo, editTareaXActivo, getTareaXActivo, getTareaXActivos } from "../controllers/tareaxactivo.controller.js";

const router = Router()

router.get('/tareaxactivos', getTareaXActivos)
router.get('/tareaxactivo/:id_tareaxactivo', getTareaXActivo)
router.post('/tareaxactivo ', createTareaXActivo)
router.patch('/tareaxactivo/:id_tareaxactivo', editTareaXActivo)
router.delete('/tareaxactivo/:id_tareaxactivo', deleteTareaXActivo)

export default router