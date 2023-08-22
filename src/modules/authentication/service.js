const { InvalidDetailsError, OperationFailed } = require("../../utils/error");
const {
  hashPassword,
  comparePasswords,
  signJWT,
} = require("../../utils/helper");
const User_repository = require("./repository");

const RegisterAUser = async function ({ username, password }) {
  try {
    let hashed_password = await hashPassword(password);
    const user = await User_repository.createAUser({
      username,
      password: hashed_password,
    });

    return user;
  } catch (error) {
    throw error;
  }
};

const UserSignIn = async function ({ username, password }) {
  try {
    const user = await User_repository.getAUserByUsername({ username });

    if (!comparePasswords(user.password, password)) {
      throw InvalidDetailsError("Incorrect passwords");
    }

    return { user, token: await signJWT(user.userId) };
  } catch (error) {
    throw error;
  }
};

const UserChangePassword = async function ({ id, old_password, password }) {
  try {
    let user = await User_repository.getAUserByUsername({ username });
    if (!comparePasswords(user.password, old_password)) {
      throw InvalidDetailsError("Invalid password");
    }

    if (comparePasswords(user.password, password)) {
      throw OperationFailed("Password cannot be the same as old password");
    }

    let hashed_password = await hashPassword(password);
    await User_repository.updateAUser(user.userId, {
      password: hashed_password,
    });

    return user;
  } catch (error) {
    throw error;
  }
};

const DeleteUser = async function ({ id }) {
  try {
    await User_repository.deleteAUser({ id });
    return;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  RegisterAUser,
  UserSignIn,
  UserChangePassword,
  DeleteUser,
};
