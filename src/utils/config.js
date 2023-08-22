module.exports = {
  PORT: process.env.PORT || 3001,
  JWT_SECRET: process.env.JWT_SECRET || "ApP_seCret",
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGO_URL: process.env.MONGO_URL,
};
