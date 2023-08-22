const mongoose = require("mongoose");
const config = require("../utils/config");

let MONGO_URL = config.MONGO_URL;
const connectMongo = async function () {
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log(`MongoDB Database has been connected`);
    })
    .catch((error) => {
      console.error(`Mongo Database connection failed ${error}`);
    });
};

module.exports = connectMongo;
