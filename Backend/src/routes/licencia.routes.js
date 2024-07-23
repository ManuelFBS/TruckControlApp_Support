import { Router } from 'express';
import {
  createLicencia,
  getLicencia,
  putLicencia,
  deleteLicencia,
} from '../controllers/licencias.controller.js';
import { TokenValidation } from '../authentication/tokens/verifyToken.js';

const router = Router();

router.post('/', TokenValidation, createLicencia);

router.get('/', TokenValidation, getLicencia);

router.put('/:id', TokenValidation, putLicencia);

router.delete('/:id', TokenValidation, deleteLicencia);

export default router;
