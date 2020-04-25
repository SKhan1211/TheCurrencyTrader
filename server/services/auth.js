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
    
    const existingUser = await User.getUser(email);

    if (existingUser) {
      throw new Error("Sorry, this user already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = User.saveUser(
      {
        email,
        username,
        password: hashedPassword,
        first_name,
        last_name
      },
      err => {
        if (err) throw err;
      }
    )
  } catch (err) {
    throw err;
  };
};

module.exports = { register };