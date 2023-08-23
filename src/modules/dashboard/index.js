const router = require("express").Router();
const middleWare = require("../../utils/middleware");
const Controller = require("./controller");
let protecteRoute = middleWare.protecteRoute;

router.get("/dashboard", protecteRoute, Controller.HTTPSendMessage);

module.exports = router;
