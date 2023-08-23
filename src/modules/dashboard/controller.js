const { responseHandler } = require("../../utils/helper");

const HTTPSendMessage = async function (req, res, next) {
  try {
    responseHandler(
      res,
      200,
      `Welcome to your dashboard ${req.user.username}`,
      null
    );
  } catch (error) {
    next(error);
  }
};

module.exports = { HTTPSendMessage };
