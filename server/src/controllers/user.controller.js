import argon2 from 'argon2';
import ErrorHandler from '../utils/errorHandler';

// models
import User from '../models/User';
import generateToken from '../utils/generateToken';

export const create = async (req, res, next) => {
  const { email, username, password } = req.body;

  try {
    // check if the user is already registered
    const userExists = await User.findOne({ email });
    if (userExists) {
      return next(new ErrorHandler(400, 'User already registered'));
    }

    // hash the password
    const hashedPassword = await argon2.hash(password);

    // build a new user object
    const user = new User({ username, email, password: hashedPassword });

    // save in database
    await user.save();

    // generate token
    const token = await generateToken({ id: user.id, username: user.username });

    // return the response
    return res.status(200).json({
      message: 'You registered successfully',
      user: { id: user.id, username: user.username },
      token
    });
  } catch (error) {
    return next(new ErrorHandler(500, 'Internal server error'));
  }
};
