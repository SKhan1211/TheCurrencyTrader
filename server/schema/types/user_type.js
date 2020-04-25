const graphql = require("graphql");
const { 
  GraphQLObjectType, 
  GraphQLID, 
  GraphQLString, 
  GraphQLBoolean 
} = graphql;

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    is_verified: { type: GraphQLBoolean } ,
    token: { type: GraphQLString },
    loggedIn: { type: GraphQLBoolean }
  })
});

module.exports = UserType;