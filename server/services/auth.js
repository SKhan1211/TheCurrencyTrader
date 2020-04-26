const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../db/user");
const keys = require("../../config/keys");

const validateRegisterInput = require("../validation/register");

const register = async data => {
  try {
    const { message, isValid } = validateRegisterInput(data);

    if (!isValid) {
      throw new Error(message);
    }

    const { email, username, password, first_name, last_name } = data;
    
    const existingUser = await User.getUserByEmail(email);

    if (existingUser) {
      throw new Error("Sorry, this user already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.saveUser(
      {
        email,
        username,
        password: hashedPassword,
        first_name,
        last_name,
        is_verified: false
      }
    )

    const token = jwt.sign({ id: user.id }, keys.secretOrKey);

    return { token, loggedIn: true, ...user, password: null };
  } catch (err) {
    throw err;
  };
};

const logout = async data => {
  try {
    const { id } = data;

    const user = await User.getUser(id);
    const token = '';

    return { token, loggedIn: false, ...user, password: null };
  } catch (err) {
    throw err;
  };
};

module.exports = { register };