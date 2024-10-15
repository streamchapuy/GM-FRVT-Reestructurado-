import { Router } from "express";
import { createActivoTarea, editActivoTarea, getActivoTarea } from "../controllers/activo-tarea.controller.js";

const router = Router()

router.get('API/activo-tarea', getActivoTarea)
router.post('API/activo-tarea', createActivoTarea)
router.put('API/activo-tarea', editActivoTarea)

export default router