import { Router } from 'express';
import {
  createPersona,
  deletePersona,
  getAllPersonas,
  getPersonaByDNI,
  getPersonaByID,
  updatePersona,
} from '../controllers/personas.controller.js';
import { TokenValidation } from '../authentication/tokens/verifyToken.js';
import { validatePerson } from '../middlewares/validatePerson.js';

const router = Router();

router.post(
  '/addpersona',
  TokenValidation,
  validatePerson,
  createPersona,
);

router.get('/', TokenValidation, getAllPersonas);

router.get(
  '/personaced/:cedula',
  TokenValidation,
  getPersonaByDNI,
);

router.get(
  '/personaid/:_id',
  TokenValidation,
  getPersonaByID,
);

router.patch(
  '/persona/edit/:_id',
  TokenValidation,
  updatePersona,
);

router.delete(
  '/persona/delete/:_id',
  TokenValidation,
  deletePersona,
);

export default router;
