import { Router } from 'express';
import { registerController } from '../controllers';
import { registerValidator } from '../validators/auth.validators';

const router = Router();

function AuthRoutes() {
  router.post('/register', registerValidator, registerController);

  return router;
}

export default AuthRoutes;
