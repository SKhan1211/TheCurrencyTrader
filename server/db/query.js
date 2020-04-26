const { Pool } = require('pg');
// my credentials
const connectionString = require("../../config/keys").connectionString;
if (!connectionString) {
  throw new Error("You must provide a valid string to connect to PostgreSQL database")
};

const pool = new Pool({
  connectionString
});

// a generic query, that executes all queries I send to it
function query(text, params) {
  return new Promise((resolve, reject) => {
    pool
      .query(text, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  query,
  pool
};
