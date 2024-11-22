import { Router } from "express";
import { obtener_Ubicaciones, obtener_Ubicacion_por_id, obtener_filtros_ubicacion, crear_Ubicacion, editar_Ubicacion, eliminar_Ubicacion } from "../controllers/ubicacion.controller.js";

const router = Router()

router.get('/obtener_ubicaciones', obtener_Ubicaciones)
router.get('/obtener_ubicacion/:id_ubicacion', obtener_Ubicacion_por_id)
router.post('/filtrosubicacion', obtener_filtros_ubicacion)
router.post('/crear_ubicacion', crear_Ubicacion)
router.patch('/editar_ubicacion/:id_ubicacion', editar_Ubicacion)
router.delete('/eliminar_ubicacion/:id_ubicacion', eliminar_Ubicacion)

export default router