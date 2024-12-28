import { Router } from 'express';
import { createVolqueta, getVolqueta, putVolqueta, deleteVolqueta } from '../controllers/volquetas.controller.js';
import { TokenValidation } from '../authentication/tokens/verifyToken.js';
const router = Router();
router.post('/', TokenValidation, createVolqueta);
router.get('/', TokenValidation, getVolqueta);
router.put('/:id', TokenValidation, putVolqueta);
router.delete('/:id', TokenValidation, deleteVolqueta);
export default router;