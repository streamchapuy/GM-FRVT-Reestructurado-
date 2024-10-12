import { Router } from "express"
import { createExistencia, editExistencia, getExistencia } from "../controllers/existencia.controller.js"

const router = Router()

router.get('/existencia', getExistencia)
router.post('/existencia', createExistencia)
router.put('/existencia', editExistencia)

export default router