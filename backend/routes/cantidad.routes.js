import { Router } from "express"
import { createCantidad, editCantidad, getCantidad } from "../controllers/cantidad.controller.js"

const router = Router()

router.get('/cantidad', getCantidad)
router.post('/cantidad', createCantidad)
router.put('/cantidad', editCantidad)

export default router