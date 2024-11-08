import { Router } from "express"
import { createEdificio, deleteEdificio, editEdificio, getEdificio, getEdificios, filtrosedificio } from "../controllers/edificio.controller.js"

const router = Router()

router.get('/edificios', getEdificios)
router.get('/edificio/:id_edificio', getEdificio)
router.post('/filtrosedificio', filtrosedificio)
router.post('/edificios', createEdificio)
router.patch('/edificios/:id_edificio', editEdificio)
router.delete('/edificios/:id_edificio', deleteEdificio)

export default router