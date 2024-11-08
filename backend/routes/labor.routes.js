import { Router } from "express";
import { getLabor, getLabores, deleteLabor, editLabor, createLabor } from "../controllers/labor.controller.js";


const router = Router()

router.get('/labores', getLabores)
router.get('/labor/:id_labor', getLabor)
router.post('/labor', createLabor)
router.patch('/labor/:id_labor', editLabor)
router.delete('/labor/:id_labor', deleteLabor)

export default router