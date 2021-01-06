/* eslint-disable consistent-return */
import argon from 'argon2';
import { validationResult } from 'express-validator';
import { ErrorHandler } from '../middleware';
import User from '../models/User';

export const register = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new ErrorHandler(400, 'WRONG DATA SCHEMA', errors.array()));
  }

  const { email, username } = req.body;

  try {
    const hashedPassword = await argon.hash(req.body.password);
    delete req.body.password;

    const user = new User({
      email,
      password: hashedPassword,
      username
    });

    user.save((err) => {
      if (err) {
        return next(new ErrorHandler(400, 'EMAIL ALREADY TAKEN', err));
      }
      return res.status(200).json({
        msg: 'USER REGISTERED',
        data: null
      });
    });
  } catch (err) {
    return next(new ErrorHandler(500, 'INTERNAL SERVER ERROR', err));
  }
};

export default { register };
