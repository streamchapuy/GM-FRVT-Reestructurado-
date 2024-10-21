import { Router } from "express"
import { createCantidad, deleteCantidad, editCantidad, getCantidad, getCantidades } from "../controllers/cantidad.controller.js"

const router = Router()

router.get('/cantidades', getCantidades)
router.get('/cantidad/:id_cantidad', getCantidad)
router.post('/cantidad', createCantidad)
router.patch('/cantidad/:id_cantidad', editCantidad)
router.delete('/cantidad/:id_cantidad', deleteCantidad)

export default router