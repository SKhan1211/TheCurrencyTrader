const express = require("express");
const { Pool, Client } = require('pg');
const bodyParser = require("body-parser");
const user = require('./db/user');

const app = express();

app.use(bodyParser.json());

app.get('/', user.getUsers);

module.exports = app;

