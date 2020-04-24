// THIS FILE IS ONLY NEEDED WHEN DOING HTTP RESTFUL ROUTES, NOT POSTGRAPHILE/GRAPHQL/POSTGRES ROUTES 

const db = require("./query");

const user = {
  async getUsers(req, res) {
    try {
      const readAllQuery = 'SELECT * FROM users';
      const { rows } = await db.query(readAllQuery);
      return rows;
    } catch (error) {
      return error;
    };
  }
};

module.exports = user;