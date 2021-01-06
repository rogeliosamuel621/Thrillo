function handlerErrors(err, req, res) {
  const { statusCode, message } = err;

  return res.status(statusCode).json({
    statusCode,
    message
  });
}

export default handlerErrors;
