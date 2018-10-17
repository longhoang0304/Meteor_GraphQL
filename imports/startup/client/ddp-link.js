import ApolloClient from 'apollo-client';
import { DDPLink } from 'meteor/swydo:ddp-apollo';
// Choose any cache implementation, but we'll use InMemoryCache as an example
import { InMemoryCache } from 'apollo-cache-inmemory';

export default client = new ApolloClient ({
  link: new DDPLink(),
  cache: new InMemoryCache()
});