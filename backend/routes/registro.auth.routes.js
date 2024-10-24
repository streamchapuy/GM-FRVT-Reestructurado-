import express from 'express';
import { registerUser } from '../controllers/registro.auth.controller.js';
import authenticateToken from '../middleware/authmiddleware.js';
 

const router = express.Router();


router.post('/register', authenticateToken, registerUser)

export default router;