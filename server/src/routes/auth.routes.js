import { Router } from 'express';
import { body } from 'express-validator';

// middlewares
import handleBody from '../middlewares/handleBody';
import handleToken from '../middlewares/handleToken';
// controllers
import { AuthController } from '../controllers';

const router = Router();

function AuthRoutes() {
  router.post(
    '/',
    [
      body('email', 'Insert a valid email').isEmail(),
      body('password', 'Password must have 6 or more characters').isLength({ min: 6 }),
      handleBody
    ],
    AuthController.authenticate
  );

  router.get('/refresh', handleToken, AuthController.refresh);

  return router;
}

export default AuthRoutes;
