const express = require("express");
const bodyParser = require("body-parser");
const keys = require("../config/keys");
const db = keys.connectionString;

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

module.exports = app;

