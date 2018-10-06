import React, { Component } from 'react';
import { Query } from 'react-apollo';
import helloQuery from '../query/hello.gql';

class App extends Component {
  render() {
    const { message } = this.props;
    return (
      <div>
        {message}
      </div>
    );
  }
}

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