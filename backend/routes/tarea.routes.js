import { Router } from "express";
import { createTarea, editTarea, getTarea } from "../controllers/tarea.controller.js";

const router = Router()

router.get('API/tarea', getTarea)
router.post('API/tarea', createTarea)
router.put('API/tarea', editTarea)

export default router