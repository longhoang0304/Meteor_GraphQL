import { setup as createApolloServer } from 'meteor/swydo:ddp-apollo';
import { getUser } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from '../../api/schemas'
import resolvers from '../../api/resolvers'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

createApolloServer({
  schema,
});