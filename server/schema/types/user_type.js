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
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    isVerified: { type: GraphQLBoolean } ,
    token: { type: GraphQLString },
    loggedIn: { type: GraphQLBoolean }
  })
});

module.exports = UserType;