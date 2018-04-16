const express = require('express');
const expressGraphQL = require('express-graphql');

const { schema, resolvers } = require('./schema/schema2');

const app = express();

app.use(
  '/graphql',
  expressGraphQL({
    graphiql: true,
    schema,
    rootValue: resolvers
  })
);

app.listen(5002, () => console.log('Listening at 5002'));
