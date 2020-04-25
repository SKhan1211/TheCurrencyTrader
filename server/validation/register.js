const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
  data.email = validText(data.email) ? data.email : "";
  data.username = validText(data.username) ? data.username : "";
  data.password = validText(data.password) ? data.password : "";
  data.first_name = validText(data.first_name) ? data.first_name : "";
  data.last_name = validText(data.last_name) ? data.last_name : "";

  if (!Validator.isEmail(data.email)) {
    return { message: "Email is invalid", isValid: false };
  };

  if (Validator.isEmpty(data.email)) {
    return { message: "Email field is required", isValid: false };
  };

  if (Validator.isEmpty(data.username)) {
    return { message: "Username field is required", isValid: false };
  };

  if (Validator.isEmpty(data.password)) {
    return { message: "Password field is required", isValid: false };
  };

  if (Validator.isLength(data.password, {min: 8, max: 32})) {
    return { message: "Password must be between 8 and 32 characters", isValid: false }
  };

  if (Validator.isEmpty(data.first_name)) {
    return { message: "First Name field is required", isValid: false };
  };

  if (Validator.isEmpty(data.last_name)) {
    return { message: "Last Name field is required", isValid: false };
  };
};