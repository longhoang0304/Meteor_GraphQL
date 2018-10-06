import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { MeteorAccountsLink } from 'meteor/apollo';

const link = ApolloLink.from([
  new MeteorAccountsLink(),
  new HttpLink({
    url: '/graphql',
  })
]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

export default client;