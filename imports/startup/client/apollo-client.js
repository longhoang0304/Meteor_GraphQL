import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { DDPSubscriptionLink, isSubscription } from 'meteor/swydo:ddp-apollo';
import { MeteorAccountsLink } from 'meteor/apollo';

const link = ApolloLink.from([
  new MeteorAccountsLink(),
  ApolloLink.split(
    isSubscription,
    new DDPSubscriptionLink(),
    new HttpLink({
      url: '/graphql',
    }),
  ),
]);

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

export default client;