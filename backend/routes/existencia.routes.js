import { Router } from "express"
import { createExistencia, deleteExistencia, editExistencia, getExistencia, getExistencias } from "../controllers/existencia.controller.js"

const router = Router()

router.get('/existencias', getExistencias)
router.get('/existencia', getExistencia)
router.post('/existencia', createExistencia)
router.patch('/existencia', editExistencia)
router.delete('/existencia', deleteExistencia)

export default router