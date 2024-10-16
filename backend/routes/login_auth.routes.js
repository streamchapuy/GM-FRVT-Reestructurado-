import express from 'express';
import { logeoUser } from '../controllers/login.auth.controller.js';

const router = express.Router();

router.post('/login', logeoUser);


export default router