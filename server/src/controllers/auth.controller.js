import argon2 from 'argon2';

// models
import User from '../models/User';

// utils
import ErrorHandler from '../utils/errorHandler';

export const authenticate = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return next(new ErrorHandler(400, 'Email or Password incorrect'));
    }

    // check if the password match
    const isGoodPassword = await argon2.verify(user.password, password);
    if (!isGoodPassword) {
      return next(new ErrorHandler(400, 'Email or Password incorrect'));
    }

    // generate the token

    // return the response
    return res.status(200).json({
      message: 'Authenticated successfully'
    });
  } catch (error) {
    return next(new ErrorHandler(500, 'Internal server error'));
  }
};
