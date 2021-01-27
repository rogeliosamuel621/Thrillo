import jwt from 'jsonwebtoken';

// utils
import ErrorHandler from '../utils/errorHandler';

const handleToken = (req, res, next) => {
  try {
    // check if the token is in headers
    const token = req.header('x-auth-token');
    if (!token) {
      return next(new ErrorHandler(401, 'Token not provided'));
    }

    // verify the token
    const user = jwt.verify(token, process.env.JWT_SECRET_SEED);
    // send user information to the requests
    req.user = user;

    // go to next middleware
    return next();
  } catch (error) {
    return next(new ErrorHandler(500, 'Internal server error'));
  }
};

export default handleToken;
