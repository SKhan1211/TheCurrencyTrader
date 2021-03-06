const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../db/user");
const keys = require("../../config/keys");

const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

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

const login = async (data) => {
  try {
    const { message, isValid } = validateLoginInput(data);

    if (!isValid) {
      throw new Error(message);
    }

    const user = await User.getUserByUsername(data.username);

    if (!user) {
      throw new Error("Username does not exist");
    }

    const isValidPassword = await bcrypt.compareSync(data.password, user.password);
    if (!isValidPassword) throw new Error("Invalid username or password combination");

    const token = jwt.sign({ id: user.id }, keys.secretOrKey);
    return { token, loggedIn: true, ...user, password: null };
  } catch (err) {
    throw err;
  }
}

const verifyUser = async data => {
  try {
    const { token } = data;

    const decoded = jwt.verify(token, keys.secretOrKey);
    const { id } = decoded;

    const loggedIn = await User.getUser(id).then(user => {
      return user ? true : false;
    });

    return { loggedIn };
  } catch (err) {
    return { loggedIn: false };
  }
}

module.exports = { register, logout, login, verifyUser };