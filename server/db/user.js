const db = require("./query");

const User = {
  async getUsers() {
    try {
      const readAllQuery = 'SELECT * FROM users';
      const { rows } = await db.query(readAllQuery);
      return rows;
    } catch (error) {
      return error;
    };
  },
  async getUser(email) {
    try {
      const query = {
        text: 'SELECT * FROM users WHERE email = $1',
        values: [email],
      }
      const { rows } = await db.query(query.text, query.values);
      return rows;
    } catch (error) {
      return error;
    };
  },
  async saveUser(userInput) {
    try {
      const { email, username, password, first_name, last_name, is_verified } = userInput;
      const query = {
        text: 'INSERT INTO users(email, username, password, first_name, last_name, is_verified) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
        values: [email, username, password, first_name, last_name, is_verified],
      }
      const { rows } = await db.query(query.text, query.values);
      return rows[0];
    } catch (error) {
      return error;
    };
  }
};

module.exports = User;