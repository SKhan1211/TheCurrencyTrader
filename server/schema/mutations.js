const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } = graphql;

const AuthService = require("../services/auth");

const UserType = require("./types/user_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    register: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString }
      },
      resolve(_, args) {
        return AuthService.register(args);
      }
    }
  }
});

module.exports = mutation;