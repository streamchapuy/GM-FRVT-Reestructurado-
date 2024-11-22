import { Router } from "express"
import { obtener_codigos, obtener_codigo_por_id, obtener_filtro_codigo, crear_codigo, editar_codigo, eliminar_codigo } from "../controllers/codigo=tag.controller.js"

const router = Router()

router.get('/obtener_codigos', obtener_codigos)
router.get('/obtener_codigo/:id_tag', obtener_codigo_por_id)
router.post('/filtroscodigo', obtener_filtro_codigo)
router.post('/crear_codigo', crear_codigo)
router.patch('/editar_codigo/:id_tag', editar_codigo)
router.delete('/eliminar_codigo/:id_tag', eliminar_codigo)

export default router