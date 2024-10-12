import { Router } from "express"
import { createPiso, editPiso, getPiso } from "../controllers/piso.controller.js"

const router = Router()

router.get('/piso', getPiso)
router.post('/piso', createPiso)
router.put('/piso', editPiso)

export default router