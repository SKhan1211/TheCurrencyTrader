const db = require("./query");

const User = {
  async getUsers(req, res) {
    try {
      const readAllQuery = 'SELECT * FROM users';
      const { rows } = await db.query(readAllQuery);
      return rows;
    } catch (error) {
      return error;
    };
  },
  async getUser(req, res) {
    try {
      const query = {
        text: 'SELECT * FROM users WHERE email = $1',
        values: [req.data.email],
      }
      const { rows } = await db.query(query);
      return rows;
    } catch (error) {
      return error;
    };
  }
};

module.exports = User;