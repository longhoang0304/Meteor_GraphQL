import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import App from '../imports/ui';
import ApolloClient from '../imports/startup/client';
import './main.scss';

const ApolloApp = () => (
  <ApolloProvider client={ApolloClient}>
    <App />
  </ApolloProvider>
)

Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById('root'));
});