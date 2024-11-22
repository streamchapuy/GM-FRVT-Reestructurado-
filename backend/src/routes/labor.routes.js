import { Router } from "express";
import { obtener_Labores, obtener_Labor_por_id, crear_Labor, editar_Labor, eliminar_Labor } from "../controllers/labor.controller.js";


const router = Router()

router.get('/obtener_labores', obtener_Labores)
router.get('/obtener_labor/:id_labor', obtener_Labor_por_id)
router.post('/crear_labor', crear_Labor)
router.patch('/editar_labor/:id_labor', editar_Labor)
router.delete('/eliminar_labor/:id_labor', eliminar_Labor)

export default router