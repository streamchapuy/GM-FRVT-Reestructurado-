import { Router } from "express"
import { createPiso, editPiso, getPiso } from "../controllers/piso.controller.js"

const router = Router()

router.get('API/piso', getPiso)
router.post('API/piso', createPiso)
router.put('API/piso', editPiso)

export default router