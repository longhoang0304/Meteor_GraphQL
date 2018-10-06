import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import App from '../imports/ui/App';
import ApolloClient from '../imports/startup/client';

const ApolloApp = () => (
  <ApolloProvider client={ApolloClient}>
    <App />
  </ApolloProvider>
)

Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById('root'));
});