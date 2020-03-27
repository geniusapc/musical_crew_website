const app = require("express")();
const config = require("./config");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(config.port, () => {
  console.log(`listening to port ${config.port}`);
});
