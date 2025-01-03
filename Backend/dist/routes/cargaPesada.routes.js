import { Router } from 'express';
import { createHeavyLoadForm,
// deleteHeavyLoadForm,
getAllHeavyLoadForms, getHeavyLoadByFormNumber, getHeavyLoadByFormID
// updateHeavyLoadForm,
} from '../controllers/cargaPesada.controller.js';
import { TokenValidation } from '../authentication/tokens/verifyToken.js';
const router = Router();
router.post('/addplanillacarga', TokenValidation, createHeavyLoadForm);
router.get('/', TokenValidation, getAllHeavyLoadForms);
router.get('/planilla/:n_planilla', TokenValidation, getHeavyLoadByFormNumber);
router.get('/planillaid/:_id', TokenValidation, getHeavyLoadByFormID);
export default router;