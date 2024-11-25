import { Router } from "express"
import { obtener_usuarios, obtener_tipos_de_usuarios, obtener_usuario_por_id, eliminar_usuarios } from "../controllers/usuarios.controller.js"

const router = Router()

router.get('/obtener_usuarios', obtener_usuarios)
router.get('/obtener_usuario/:id_usuarios', obtener_usuario_por_id)
router.post('/filtros_usuarios', obtener_tipos_de_usuarios)
router.delete('/usuario/:id_usuarios', eliminar_usuarios)

export default router