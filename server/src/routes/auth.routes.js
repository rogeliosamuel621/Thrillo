import { Router } from 'express';
import { registerController } from '../controllers';
import { registerValidator } from '../validators/auth.validators';

const router = Router();

router.post('/register', registerValidator, registerController);

export default router;
