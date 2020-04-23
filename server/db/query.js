const { Pool } = require('pg');
// my credentials
const connectionString = require("../../config/keys").connectionString;

const pool = new Pool({
  connectionString
});

// a generic query, that executes all queries I send to it
function query(text) {
  return new Promise((resolve, reject) => {
    pool
      .query(text)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  query
};
