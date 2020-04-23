const express = require("express");
const { Pool, Client } = require('pg');
const bodyParser = require("body-parser");
const pool = new Pool({
  user: 'suhaib',
  host: 'localhost',
  database: 'thecurrencytrader_development',
  port: 3000
});

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    };
    res.status(200).json(results.rows);
  });
});

module.exports = app;

