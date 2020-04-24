const express = require("express");
const { postgraphile } = require("postgraphile");
// const { Pool, Client } = require('pg');
const bodyParser = require("body-parser");
const keys = require("../config/keys");
const db = keys.connectionString;
// const user = require('./db/user');

const expressGraphQL = require("express-graphql");
const schema = require("./schema/schema");

if (!db) {
  throw new Error("Your PostgreSQL connection string is invalid!")
};

const app = express();

app.use(bodyParser.json());

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

app.use(
  postgraphile(
    process.env.connectionString || db,
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
    }
  )
);

// app.get('/', user.getUsers);

module.exports = app;

