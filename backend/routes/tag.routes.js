import { Router } from "express"
import { createTag, deleteTag, editTag, getTag, getTags } from "../controllers/tag.controller.js"

const router = Router()

router.get('/tags', getTags)
router.get('/tag/:id_tag', getTag)
router.post('/tag', createTag)
router.patch('/tag/:id_tag', editTag)
router.delete('/tag/:id_tag', deleteTag)

export default router