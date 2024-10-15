import { Router } from "express"
import { createEdificio, editEdificio, getEdificio } from "../controllers/edificio.controller.js"

const router = Router()

router.get('API/edificios', getEdificio)
router.post('API/edificios', createEdificio)
router.put('API/edificios', editEdificio)

export default router