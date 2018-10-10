import React from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import App from './App';
import MessageLoader from './MessageScreen';


const getTodoList = gql`
  {
    getTodoList {
      _id
      title
      content
      createdAt
    }
  }
`;

const QueryApp = () => (
  <Query
    query={getTodoList}
  >
    {(props) => {
      const { loading, error, data } = props;
      if (error) return <MessageLoader message={error} />;
      if (loading || !data) return <MessageLoader message="Fetching data" />;

      return <App todoList={data.getTodoList} />
    }}
  </Query>
)

export default QueryApp;