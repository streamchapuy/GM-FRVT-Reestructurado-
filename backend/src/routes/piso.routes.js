import { Router } from "express"
import { obtener_Pisos, obtener_Piso_por_id, obtener_filtros_piso, crear_Piso, editar_Piso, eliminar_Piso } from "../controllers/piso.controller.js"
const router = Router()

router.get('/obtener_pisos', obtener_Pisos)
router.get('/obtener_piso/:id_piso', obtener_Piso_por_id)
router.post('/filtrospiso', obtener_filtros_piso)
router.post('/crear_piso', crear_Piso)
router.patch('/editar_piso/:id_piso', editar_Piso)
router.delete('/eliminar_piso/:id_piso', eliminar_Piso)

export default router