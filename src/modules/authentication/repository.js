const { NotFoundError } = require("../../utils/error");
const { User } = require("./model");

const getAllUsers = async function () {
  try {
    return await User.find().lean();
  } catch (error) {
    throw error;
  }
};

const getAUserByUsername = async function ({ username }) {
  try {
    const user = await User.findOne({ username }); //.lean();
    if (!user) {
      throw NotFoundError("User not found");
    }
    return user.toObject();
  } catch (error) {
    throw error;
  }
};

const getUserById = async function ({ id }) {
  try {
    const user = await User.findById(id);
    if (!user) {
      throw NotFoundError("User not found");
    }

    return user.toObject();
  } catch (error) {
    throw error;
  }
};

const createAUser = async function ({ username, password }) {
  try {
    const new_user = new User({ username, password });
    await new_user.save();
    return new_user;
  } catch (error) {
    throw error;
  }
};

const updateAUser = async function ({ id, payload }) {
  try {
    const user = await User.findByIdAndUpdate(id, payload);
    if (!user) {
      throw NotFoundError("User not found");
    }
    return user;
  } catch (error) {
    throw error;
  }
};

const deleteAUser = async function ({ id }) {
  try {
    return await User.findByIdAnddelete(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createAUser,
  getAUserByUsername,
  getAllUsers,
  updateAUser,
  deleteAUser,
  getUserById,
};
