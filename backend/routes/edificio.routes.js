import { Router } from "express"
import { createEdificio, editEdificio, getEdificio, getEdificios, deleteEdificio } from "../controllers/edificio.controller.js"

const router = Router()

router.get('/edificios', getEdificios)
router.get('/edificio/:id_edificio', getEdificio)
router.post('/edificios', createEdificio)
router.put('/edificios', editEdificio)
router.delete('/edificios/:id_edificio', deleteEdificio)

export default router