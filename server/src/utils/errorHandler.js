class ErrorHandler extends Error {
  constructor(statusCode, messages) {
    super();
    this.statusCode = statusCode;
    this.message = messages;
  }
}

export default ErrorHandler;
