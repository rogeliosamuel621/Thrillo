import { Router } from 'express';
import { body } from 'express-validator';

// middlewares
import handleBody from '../middlewares/handleBody';
// controllers
import { AuthController } from '../controllers';

const router = Router();

function AuthRoutes() {
  router.post(
    '/login',
    [
      body('email', 'Insert a valid email').isEmail(),
      body('password', 'Password must have 6 or more characters').isLength({ min: 6 }),
      handleBody
    ],
    AuthController.authenticate
  );

  return router;
}

export default AuthRoutes;
