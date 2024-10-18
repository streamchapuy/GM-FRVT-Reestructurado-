import { Router } from "express"
import { createOperario, deleteOperario, editOperario, getOperario, getOperarios } from "../controllers/operario.controller.js"

const router = Router()

router.get('/operarios', getOperarios)
router.get('/operario/:id_operario', getOperario)
router.post('/operario', createOperario)
router.patch('/operario/:id_operario', editOperario)
router.delete('/operario/:id_operario', deleteOperario)

export default router