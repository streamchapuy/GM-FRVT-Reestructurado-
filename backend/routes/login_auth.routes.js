import express from 'express';
import { logeoUser } from '../controllers/login.aut.controller.js';

const router = express.Router();

router.post('/login', logeoUser);


export default router