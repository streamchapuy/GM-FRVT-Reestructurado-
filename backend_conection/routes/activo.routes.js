import { Router } from "express";
import { createActivo, editActivo, getActivo } from "../controllers/activo.controller.js";

const router = Router()

router.get('/activo', getActivo)
router.post('/activo', createActivo)
router.put('/activo', editActivo)

export default router