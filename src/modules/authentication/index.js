const router = require("express").Router();
const Controller = require("./controller");
const middleWare = require("../../utils/middleware");

const validation = require("./validation");
let protected = middleWare.protecteRoute;

router.post(
  "/auth/register",
  validation.registerAUser,
  Controller.HTTPRegisterAUser
);
router.post("/auth/login", validation.log_in_user, Controller.HTTPLoginAUser);

router.patch(
  "/auth/change_password",
  protected,
  Controller.HTTPChangeUserPassword
);
router.delete(
  "/auth/delete_my_account",
  protected,
  Controller.HTTPDeleteMyAccount
);

module.exports = router;
