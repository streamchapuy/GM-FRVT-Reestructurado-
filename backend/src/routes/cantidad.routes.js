import { Router } from "express"
import { obtener_Cantidades, obtener_Cantidad_por_id, crear_Cantidad, editar_Cantidad, eliminar_Cantidad } from "../controllers/cantidad.controller.js"

const router = Router()

router.get('/obtener_cantidades', obtener_Cantidades)
router.get('/obtener_cantidad/:id_cantidad', obtener_Cantidad_por_id)
router.post('/crear_cantidad', crear_Cantidad)
router.patch('/editar_cantidad/:id_cantidad', editar_Cantidad)
router.delete('/eliminar_cantidad/:id_cantidad', eliminar_Cantidad)

export default router