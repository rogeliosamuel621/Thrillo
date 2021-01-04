import argon from 'argon2';
import { validationResult } from 'express-validator';
import { ErrorHandler } from '../middleware/';
import User from '../models/User';

const registerController = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new ErrorHandler(400, 'WRONG DATA SCHEMA', errors.array()));
  }

  const { email, password, username } = req.body;

  try {
    const hashedPassword = await argon.hash(password);
    password = undefined;

    const user = new User({
      email,
      password: hashedPassword,
      username
    });

    user.save();

    return res.status(200).json({
      msg: 'USER REGISTERED',
      data: null
    });
  } catch (err) {
    return next(new ErrorHandler(500, 'INTERNAL SERVER ERROR', err));
  }
};

export { registerController };
