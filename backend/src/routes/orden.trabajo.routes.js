import { Router } from "express"
import {obtener_ordenes_de_Trabajo, obtener_ordene_de_Trabajo_por_id, crear_ordenes_de_Trabajo, editar_ordenes_de_Trabajo,eliminar_ordenes_de_Trabajo } from "../controllers/orden.trabajo.controller.js"

const router = Router()

router.get('/obtener_ordenestrabajo', obtener_ordenes_de_Trabajo)
router.get('/obtener_ordentrabajo/:id_ot', obtener_ordene_de_Trabajo_por_id)
router.post('/crear_ordentrabajo', crear_ordenes_de_Trabajo)
router.patch('/editar_ordentrabajo/:id_ot', editar_ordenes_de_Trabajo)
router.delete('/eliminar_ordentrabajo/:id_ot', eliminar_ordenes_de_Trabajo)

export default router