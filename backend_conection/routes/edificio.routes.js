import { Router } from "express"
import { createEdificio, editEdificio, getEdificio } from "../controllers/edificio.controller.js"

const router = Router()

router.get('/edificios', getEdificio)
router.post('/edificios', createEdificio)
router.put('/edificios', editEdificio)

export default router