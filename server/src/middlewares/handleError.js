/* eslint-disable no-unused-vars */
const handleError = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;

  return res.status(statusCode).json({ error: error.message });
};

export default handleError;
