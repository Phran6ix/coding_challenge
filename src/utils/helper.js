const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Joi = require("joi");

const UserRepository = require("../modules/authentication/repository");
const cnfig = require("./config");
const constants = require("./constant");
const { HTTPError, UnauthorizedError, OperationFailed } = require("./error");
const config = require("./config");

const globalErrorHandler = function (err, req, res, next) {
  console.log(err instanceof HTTPError, err);
  if (err.code == 11000) {
    return responseHandler(res, 400, "Username already exists", null);
  }

  if (err instanceof Joi.ValidationError) {
    return responseHandler(res, 400, err.message, null);
  }

  if (err instanceof HTTPError) {
    res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
      stack:
        config.NODE_ENV == constants.NODE_ENVIRONMENT.DEVELOPMENT
          ? err.stack
          : null,
    });
  } else {
    res.status(500).json({
      status: 500,
      message: "Something went wrong, please try again later",
    });
  }
};

const hashPassword = async function (password) {
  return await bcrypt.hashSync(password, constants.SALT_ROUNDS);
};
const comparePasswords = async function (hashed_password, plain_password) {
  return await bcrypt.compare(plain_password, hashed_password);
};

const signJWT = async function (id) {
  return await jwt.sign({ id }, config.JWT_SECRET, { expiresIn: 600000 });
};

const verifyJWT = async function (token) {
  const data = await jwt.verify(token, config.JWT_SECRET);
  console.log(data);
  return data;
};

const responseHandler = function (res, status, message, data) {
  return res.status(status).json({
    status,
    message,
    data,
  });
};

module.exports = {
  responseHandler,
  globalErrorHandler,
  hashPassword,
  comparePasswords,
  signJWT,
  verifyJWT,
};
