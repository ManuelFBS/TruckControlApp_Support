import { Router } from 'express';
import {
  registrarUsuario,
  deleteUsuario,
  getAllUsuarios,
  getUsuario,
  updateUsuario,
} from '../controllers/usuarios.controller.js';
import { TokenValidation } from '../authentication/tokens/verifyToken.js';
import { validateUser } from '../middlewares/validateUser.js';

const router = Router();

router.post(
  '/addusuario',
  TokenValidation,
  validateUser,
  registrarUsuario,
);

router.get('/', TokenValidation, getAllUsuarios);

router.get('/:usuario', TokenValidation, getUsuario);

router.patch('/edit/:_id', TokenValidation, updateUsuario);

router.delete(
  '/delete/:_id',
  TokenValidation,
  deleteUsuario,
);

export default router;
