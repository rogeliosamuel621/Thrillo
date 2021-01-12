import { Router } from 'express';

// controllers
import { UserController } from '../controllers';

const router = Router();

function UserRoutes() {
  router.post('/register', UserController.create);

  return router;
}

export default UserRoutes;
