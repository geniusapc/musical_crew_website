const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");
const welcome = require("./welcome");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    welcome: {
      type: welcome,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return { message: "starting up graphql" };
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
  // mutation:,
});
