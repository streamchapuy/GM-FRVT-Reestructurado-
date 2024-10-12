import { Router } from "express";
import { createActivoTarea, editActivoTarea, getActivoTarea } from "../controllers/activo-tarea.controller.js";

const router = Router()

router.get('/activo-tarea', getActivoTarea)
router.post('/activo-tarea', createActivoTarea)
router.put('/activo-tarea', editActivoTarea)

export default router