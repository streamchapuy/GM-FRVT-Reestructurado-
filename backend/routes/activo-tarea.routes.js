import { Router } from "express";
import { createActivoTarea, deleteActivoTarea, editActivoTarea, getActivoTarea, getActivoTareas } from "../controllers/activo-tarea.controller.js";

const router = Router();

router.get('/activos/:id_activo/tareas/:id_tareaxactivo', getActivoTareas);
router.get('/activo-tarea/:id_activo_tarea', getActivoTarea);
router.post('/activo-tarea', createActivoTarea);
router.patch('/activo-tarea/:id_activo_tarea', editActivoTarea);
router.delete('/activo-tarea/:id_activo_tarea', deleteActivoTarea); 

export default router;