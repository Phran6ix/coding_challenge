const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const AuthRouter = require("./src/modules/authentication");

const config = require("./src/utils/config");
const { globalErrorHandler } = require("./src/utils/helper");
const connectMongo = require("./src/database/config");
const { NotFoundError } = require("./src/utils/error");
let APIversion = "/v1";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan());

app.get("/health-check", (req, res, next) => {
  res.status(200).json({
    message: "API is live",
  });
});
app.use(APIversion, AuthRouter);

app.use("*", (req, res, next) => {
  next(NotFoundError("Route not found"));
});
app.use(globalErrorHandler);

const port = config.PORT;

app.listen(port, () => {
  connectMongo();
  console.log(`App is running on port ${port}`);
});
