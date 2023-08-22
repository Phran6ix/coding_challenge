const router = require("express").Router();
const Controller = require("./controller");
const { protected } = require("../../utils/helper");

router.post("/auth/register", Controller.HTTPRegisterAUser);
router.post("/auth/login", Controller.HTTPLoginAUser);
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
