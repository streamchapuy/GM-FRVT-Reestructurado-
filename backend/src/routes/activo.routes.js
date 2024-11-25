import { Router } from "express";
import { obtener_Activos, obtener_Activo_por_id, obtener_Activo_filtro, crear_Activo, editar_Activo, eliminar_Activo } from "../controllers/activo.controller.js";

const router = Router()

router.get('/obtener_activos', obtener_Activos)
router.post('/activosfiltros', obtener_Activo_filtro)
router.get('/obtener_activo/:id_activo', obtener_Activo_por_id)
router.post('/crear_activo', crear_Activo)
router.patch('/editar_activo/:id_activo', editar_Activo)
router.delete('/eliminar_activo/:id_activo', eliminar_Activo)

export default router