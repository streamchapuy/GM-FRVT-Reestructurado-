import { Router } from "express";
import { obtener_Tareas, obtener_Tarea_por_id, crear_Tarea, editar_Tarea, eliminar_Tarea } from "../controllers/tarea.controller.js";

const router = Router()

router.get('/obtener_tareas', obtener_Tareas)
router.get('/obtener_tarea/:id_tarea', obtener_Tarea_por_id)
router.post('/crear_tarea', crear_Tarea)
router.patch('/editar_tarea:id_tarea', editar_Tarea)
router.delete('/eliminar_tarea:id_tarea', eliminar_Tarea)

export default router