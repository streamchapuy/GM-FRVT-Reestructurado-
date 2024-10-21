import { Router } from "express"
import { createAdmin, deleteAdmin, editAdmin, getAdmin, getAdmins } from "../controllers/admin.controller.js"

const router = Router()

router.get('/admins', getAdmins)
router.get('/admin/:id_admin', getAdmin)
router.post('/admin', createAdmin)
router.patch('/admin/:id_admin', editAdmin)
router.delete('/admin/:id_admin', deleteAdmin)

export default router