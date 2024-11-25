import { Router } from "express"
import { obtener_Edificio_por_id, obtener_Edificios, obtener_filtros_edificio, crear_Edificio, editar_Edificio, eliminar_Edificio } from "../controllers/edificio.controller.js"

const router = Router()

router.get('/obtener_edificios', obtener_Edificios)
router.get('/obtener_edificio/:id_edificio', obtener_Edificio_por_id)
router.post('/filtrosedificio', obtener_filtros_edificio)
router.post('/crear_edificios', crear_Edificio)
router.patch('/editar_edificios/:id_edificio', editar_Edificio)
router.delete('/eliminar_edificios/:id_edificio', eliminar_Edificio)

export default router