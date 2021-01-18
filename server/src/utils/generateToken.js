import jwt from 'jsonwebtoken';

// utils
import ErrorHandler from './errorHandler';

const generateToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.JWT_SECRET_SEED, { expiresIn: '2h' }, (error, token) => {
      if (error) {
        reject(new ErrorHandler(500, 'Something failed when generating the token'));
      }
      resolve(token);
    });
  });
};

export default generateToken;
