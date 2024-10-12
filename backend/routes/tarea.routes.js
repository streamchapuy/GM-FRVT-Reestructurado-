import { Router } from "express";
import { createTarea, editTarea, getTarea } from "../controllers/tarea.controller.js";

const router = Router()

router.get('/tarea', getTarea)
router.post('/tarea', createTarea)
router.put('/tarea', editTarea)

export default router