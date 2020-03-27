const { GraphQLObjectType, GraphQLString } = require("graphql");

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    message: { type: GraphQLString }
  })
});

module.exports = BookType;
