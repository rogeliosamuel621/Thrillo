import { Router } from 'express';
import { body } from 'express-validator';

// middlewares
import handleBody from '../middlewares/handleBody';
// controllers
import { UserController } from '../controllers';

const router = Router();

function UserRoutes() {
  router.post(
    '/register',
    [
      body('username', 'Username is required').notEmpty(),
      body('email', 'Insert a valid email').isEmail(),
      body('password', 'Password must have 6 or more characters').isLength({ min: 6 }),
      handleBody
    ],
    UserController.create
  );

  return router;
}

export default UserRoutes;
