const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {}
});

module.exports = mutation;