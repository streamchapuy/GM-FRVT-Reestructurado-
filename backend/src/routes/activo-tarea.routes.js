import { Router } from "express";
import { obtener_ActivoTarea_por_id, obtener_ActivoTareas, eliminar_ActivoTarea, editar_ActivoTarea, crear_ActivoTarea } from "../controllers/activo-tarea.controller.js";

const router = Router();

router.post('/obtener_ActivoTareas', obtener_ActivoTareas);
router.get('/obtener_ActivoTarea/:id_activo_tarea', obtener_ActivoTarea_por_id);
router.post('/crear_activo-tarea', crear_ActivoTarea);
router.patch('/editar_activo-tarea/:id_activo_tarea', editar_ActivoTarea);
router.delete('/eliminar_activo-tarea/:id_activo_tarea', eliminar_ActivoTarea);

export default router;