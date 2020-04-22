const express = require("express");
// const { Client } = require('pg');
const bodyParser = require("body-parser");
// const client = new Client();
// client.connect();

const app = express();

app.use(bodyParser.json());

module.exports = app;

