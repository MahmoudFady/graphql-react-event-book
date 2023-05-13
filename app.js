require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolvers/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true,
  })
);
mongoose
  .connect(process.env.MOGO_DB_URI)
  .then(() => {
    console.log("connected to db");
    app.listen(3000, () => {
      console.log("server running");
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
