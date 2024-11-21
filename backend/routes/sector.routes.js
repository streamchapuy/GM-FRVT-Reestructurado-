import { Router } from "express"
import { obtener_Sectores, obtener_Sector_por_id, obtener_filtros_sector, crear_Sector, editar_Sector, eliminar_Sector } from "../controllers/sector.controller.js"

const router = Router()

router.get('/obtener_sectores', obtener_Sectores)
router.get('/obtener_sector/:id_sector', obtener_Sector_por_id)
router.post('/filtrossector', obtener_filtros_sector)
router.post('/crear_sector', crear_Sector)
router.patch('/editar_sector', editar_Sector)
router.delete('/eliminar_sector', eliminar_Sector)

export default router