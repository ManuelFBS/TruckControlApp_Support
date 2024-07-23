import { Router } from 'express';
import {
  createDocumento,
  getAllDocumento,
  putDocumento,
  deleteDocumento,
} from '../controllers/documentos.controller.js';
import { TokenValidation } from '../authentication/tokens/verifyToken.js';

const router = Router();

router.post('/', TokenValidation, createDocumento);

router.get('/', TokenValidation, getAllDocumento);

router.put('/:id', TokenValidation, putDocumento);

router.delete('/:id', TokenValidation, deleteDocumento);

export default router;
