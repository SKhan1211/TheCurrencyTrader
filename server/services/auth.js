const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const User = 
const keys = require("../../config/keys");

const validateRegisterInput = require("../validation/register");

const register = async data => {
  try {
    const { message, isValid } = validateRegisterInput(data);

    if (!isValid) {
      throw new Error(message);
    }

    const { email, username, password, first_name, last_name } = data;
    
    
  } catch (err) {
    throw err;
  };
};

module.exports = { register };