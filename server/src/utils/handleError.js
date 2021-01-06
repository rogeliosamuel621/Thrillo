class ErrorHandler extends Error {
  constructor(statusCode, messages, err) {
    super();
    this.statusCode = statusCode;
    this.message = messages;
    this.error = err;
  }
}

export default ErrorHandler;
