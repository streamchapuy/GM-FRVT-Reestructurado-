import { Router } from "express"
import { createOT, editOT, getOT } from "../controllers/ot.controller.js"

const router = Router()

router.get('/ordentrabajo', getOT)
router.post('/ordentrabajo', createOT)
router.put('/ordentrabajo', editOT)

export default router