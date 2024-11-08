import { Router } from "express"
import { createPiso, deletePiso, editPiso, filtrospiso, getPiso, getPisos } from "../controllers/piso.controller.js"
const router = Router()

router.get('/pisos', getPisos)
router.get('/piso/:id_piso', getPiso)
router.post('/filtrospiso', filtrospiso)
router.post('/piso', createPiso)
router.patch('/piso/:id_piso', editPiso)
router.delete('/piso/:id_piso', deletePiso)

export default router