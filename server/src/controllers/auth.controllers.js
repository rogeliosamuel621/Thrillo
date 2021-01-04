import argon from 'argon2';
import { validationResult } from 'express-validator';

const registerController = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
  }
};
