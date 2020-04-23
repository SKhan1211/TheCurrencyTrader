const express = require("express");
const { Pool, Client } = require('pg');
const bodyParser = require("body-parser");
const connectionString = require("../config/keys").connectionString;

if (!connectionString) {
  throw new Error("Your PostgreSQL connection string is invalid!")
};

const pool = new Pool({
  connectionString
});

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  pool.query('SELECT * FROM users', (error, results) => {
    console.log(error, results);
    if (error) {
      throw error
    };
    res.status(200).json(results.rows);
  });
  pool.end();
});

module.exports = app;

