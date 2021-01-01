class ErrorHandler extends Error {
  constructor(statusCode, messages, err) {
    super();
    this.statusCode = statusCode;
    this.message = messages;
    this.error = err;
  }

  logError(error) {
    console.log(error);
  }
}

function handlerErrors(err, req, res, next) {
  const { statusCode, message, error } = err;

  err.logError(error);

  return res.status(statusCode).json({
    statusCode,
    message
  });
}

export { ErrorHandler, handlerErrors };
