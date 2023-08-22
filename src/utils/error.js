class HTTPError extends Error {
  constructor(message, statusCode, name) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.name = name;

    Error.captureStackTrace(this, this.constructor);
  }
}

const NotFoundError = (message) => new HTTPError(message, 404, "Not Found");

const InvalidDetailsError = (message) =>
  new HTTPError(message, 400, "Invalid Credentials");

const UnauthorizedError = (message) => {
  new HTTPError(message, 401, "Unauthorized");
};

const OperationFailed = (message) => {
  new HTTPError(message, 400, "Operation failed");
};
module.exports = {
  HTTPError,
  NotFoundError,
  InvalidDetailsError,
  UnauthorizedError,
  OperationFailed,
};
