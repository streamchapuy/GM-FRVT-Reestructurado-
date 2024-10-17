import { Router } from "express"
import { createCantidad, editCantidad, getCantidad, getCantidades } from "../controllers/cantidad.controller.js"

const router = Router()

router.get('/cantidades', getCantidades)
router.get('/cantidad/:id_cantidad', getCantidad)
router.post('/cantidad', createCantidad)
router.put('/cantidad', editCantidad)

export default router