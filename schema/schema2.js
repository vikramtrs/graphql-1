const { buildSchema } = require('graphql');
const _ = require('lodash');

const users = [
  { id: '23', firstName: 'Bill', age: 20 },
  { id: '47', firstName: 'Samantha', age: 27 }
];

const schema = buildSchema(`
  type User {
    id: String,
    firstName: String,
    age: Int
  },
  type Query {
    user(id: String!): User
  }
`);

const getUser = ({ id }) => {
  return _.find(users, { id });
};

const resolvers = {
  user: getUser
};

module.exports = { schema, resolvers };
