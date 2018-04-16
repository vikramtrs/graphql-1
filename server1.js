const express = require('express');
const expressGraphQL = require('express-graphql');

const schema = require('./schema/schema1');

const app = express();

app.use(
  '/graphql',
  expressGraphQL({
    graphiql: true,
    schema
  })
);

app.listen(5001, () => console.log('Listening at 5001'));
