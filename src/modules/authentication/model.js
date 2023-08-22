const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, "Username already exist"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toObject: {
      transform: function (doc, ret) {
        return {
          userId: ret._id,
          username: ret.username,
          password: ret.password,
        };
      },
    },
  }
);

const User = new mongoose.model("Users", UserSchema);
module.exports = { User };
