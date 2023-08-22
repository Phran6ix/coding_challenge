const { responseHandler } = require("../../utils/helper");
const Service = require("./service");

const HTTPRegisterAUser = async function (req, res, next) {
  try {
    const data = await Service.RegisterAUser(req.body);
    responseHandler(res, 201, "User has been created successfully", data);
  } catch (error) {
    next(error);
  }
};

const HTTPLoginAUser = async function (req, res, next) {
  try {
    const data = await Service.UserSignIn(req.body);
    responseHandler(res, 200, "User signed successfully", data);
  } catch (error) {
    next(error);
  }
};

const HTTPChangeUserPassword = async function (req, res, next) {
  try {
    const data = await Service.UserChangePassword({
      id: req.user.userId,
      ...req.body,
    });
    responseHandler(res, 200, "Password changed successfully", data);
  } catch (error) {
    next(error);
  }
};

const HTTPDeleteMyAccount = async function (req, res, next) {
  try {
    const data = await Service.deleteAUser({ id: req.user.userId });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  HTTPChangeUserPassword,
  HTTPRegisterAUser,
  HTTPLoginAUser,
  HTTPDeleteMyAccount,
};
