import React from 'react'
import { Query } from 'react-apollo';
import helloQuery from '../query/hello.gql';
import App from './App';

const QueryApp = () => (
  <Query
    query={helloQuery}
  >
    {(props) => {
      const { loading, error, data } = props;
      if (error) return <App message={error} />
      if (loading || !data) return <App message="Fetching data" />

      return <App message={data.message} />
    }}
  </Query>
)

export default QueryApp;