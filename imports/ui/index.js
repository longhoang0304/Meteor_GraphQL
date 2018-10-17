import React from 'react'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import App from './App';
import MessageLoader from './MessageScreen';

const TodoAddedEvent = gql`
  subscription TodoAdded {
    todoAdded {
      _id
      title
      content
      createdAt
    }
  }
`;

const TodoList = gql`
  query TodoList {
    TodoList {
      _id
      title
      content
      createdAt
    }
  }
`;

const QueryApp = () => (
  <Query
    query={TodoList}
  >
    {(props) => {
      const { loading, error, data, subscribeToMore } = props;
      if (error) return <MessageLoader message={error} />;
      if (loading || !data) return <MessageLoader message="Fetching data" />;

      return (
        <App
          todoList={data.TodoList}
          getMoreTodo={() => {
            subscribeToMore({
              document: TodoAddedEvent,
              // variables: { repoName: params.repoName },
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newTodoItem = subscriptionData.data.todoAdded;

                if (!newTodoItem) throw new Error('Cannot create new user');

                return {
                  ...prev,
                  TodoList: [...prev.TodoList, newTodoItem]
                };
              }
            });
          }}
        />
      )
    }}
  </Query>
)

export default QueryApp;