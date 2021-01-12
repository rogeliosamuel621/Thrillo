import { validationResult } from 'express-validator';
import ErrorHandler from '../utils/errorHandler';

const handleBody = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new ErrorHandler(400, errors.formatWith(({ msg }) => `${msg}`).array()));
  }
  return next();
};

export default handleBody;
