import { Router } from "express"
import { createSector, deleteSector, editSector, getSector, getSectores } from "../controllers/sector.controller.js"

const router = Router()

router.get('/sectores', getSectores)
router.get('/sector/:id_sector', getSector)
router.post('/sector', createSector)
router.patch('/sector', editSector)
router.delete('/sector', deleteSector)

export default router