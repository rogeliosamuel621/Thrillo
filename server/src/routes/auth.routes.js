import { Router } from 'express';
import { register } from '../controllers/auth.controllers';
import { registerValidator } from '../validators/auth.validators';

const router = Router();

function AuthRoutes() {
  router.post('/register', registerValidator, register);

  return router;
}

export default AuthRoutes;
