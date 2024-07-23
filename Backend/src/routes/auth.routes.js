import { Router } from 'express';
import { login } from '../authentication/login_out/login.controller.js';
import { logout } from '../authentication/login_out/logout.controller.js';

const router = Router();

router.post('/login', login);

router.post('/logout', logout);

export default router;
