import { Router } from 'express';

// controllers
import { AuthController } from '../controllers';

// validators
import { registerValidator } from '../validators/auth.validators';

const router = Router();

function AuthRoutes() {
  router.post('/register', registerValidator, AuthController.register);

  return router;
}

export default AuthRoutes;
