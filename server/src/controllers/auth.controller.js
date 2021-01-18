import argon2 from 'argon2';

// models
import User from '../models/User';

// utils
import ErrorHandler from '../utils/errorHandler';
import generateToken from '../utils/generateToken';

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
    const token = await generateToken({ id: user.id, username: user.username });

    // return the response
    return res.status(200).json({
      message: 'Authenticated successfully',
      user: { id: user.id, username: user.username },
      token
    });
  } catch (error) {
    return next(new ErrorHandler(500, 'Internal server error'));
  }
};

export const refresh = async (req, res, next) => {
  // get the information of the current user
  const { user } = req;

  try {
    // generate new token
    const token = await generateToken({ id: user.id, username: user.username });

    // return the response
    return res.status(200).json({
      message: 'Token refresh successfully',
      user: { id: user.id, username: user.username },
      token
    });
  } catch (error) {
    return next(new ErrorHandler(500, 'Internal server error'));
  }
};
