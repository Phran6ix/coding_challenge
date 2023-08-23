const { getUserById } = require("../modules/authentication/repository");
const {
  UnauthorizedError,
  OperationFailed,
  NotFoundError,
} = require("./error");
const { verifyJWT } = require("./helper");

module.exports = {
  protecteRoute: async (req, res, next) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next(UnauthorizedError("You are not logged in"));
    }

    let decode = await verifyJWT(token);

    if (!decode) {
      return next(OperationFailed("Invalid token"));
    }

    let user = await getUserById({ id: decode.id });
    if (!user) {
      return next(NotFoundError("User not found, please sign in"));
    }

    req.user = user;
    next();
  },
};
