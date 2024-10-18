import { Router } from "express";
import { createTarea, deleteTarea, editTarea, getTarea, getTareas } from "../controllers/tarea.controller.js";

const router = Router()

router.get('/tareas', getTareas)
router.get('/tarea/:id_tarea', getTarea)
router.post('/tarea', createTarea)
router.patch('/tarea:id_tarea', editTarea)
router.delete('/tarea:id_tarea', deleteTarea)

export default router