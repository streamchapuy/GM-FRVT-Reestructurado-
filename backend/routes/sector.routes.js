import { Router } from "express"
import { createSector, editSector, getSector } from "../controllers/sector.controller.js"

const router = Router()

router.get('/sector', getSector)
router.post('/sector', createSector)
router.put('/sector', editSector)

export default router