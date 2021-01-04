import { check } from 'express-validator';

const registerValidator = [
  check('email', 'Must be an email').isEmail(),
  check('password', 'Must have at least 6 characters').isLength({ min: 6 }),
  check('username', 'Must be an string').notEmpty().isString()
];

export { registerValidator };
