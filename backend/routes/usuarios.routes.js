import { Router } from "express"
import { createUsuario, deleteUsuario, editUsuario, getUsuario, getUsuarios } from "../controllers/usuarios.controller.js"

const router = Router()

router.get('/usuarios', getUsuarios)
router.get('/usuario/:id_usuarios', getUsuario)
router.post('/usuario', createUsuario)
router.patch('/usuario/:id_usuarios', editUsuario)
router.delete('/usuario/:id_usuarios', deleteUsuario)

export default router