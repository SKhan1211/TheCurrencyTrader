const db = require("./query");

const user = {
  async getUsers(req, res) {
    try {
      const readAllQuery = 'SELECT * FROM users';
      const { rows } = await db.query(readAllQuery);
      return res.send(rows);
    } catch (error) {
      return res.send(error);
    };
  }
};

module.exports = user;