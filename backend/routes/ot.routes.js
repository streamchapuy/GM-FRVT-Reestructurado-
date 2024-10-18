import { Router } from "express"
import { createOT, deleteOT, editOT, getOT, getOTs } from "../controllers/ot.controller.js"

const router = Router()

router.get('/ordenestrabajo', getOTs)
router.get('/ordentrabajo/:id_ot', getOT)
router.post('/ordentrabajo', createOT)
router.patch('/ordentrabajo/:id_ot', editOT)
router.delete('/ordentrabajo/:id_ot', deleteOT)

export default router