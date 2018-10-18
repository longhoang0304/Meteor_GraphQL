import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import TodoItem from './TodoItem';

const UPDATE_TODO = gql`
  mutation updateTodo(
      $id: String!
      $title: String!
      $content: String
    ) {
    updateTodo(
      id: $id
      title: $title
      content: $content
    ) {
      _id
      title
      content
      createdAt
    }
  }
`;

const TodoItemMutation = (props) => (
  <Mutation
    mutation={UPDATE_TODO}
    refetchQueries={['TodoList']}
  >
    {(updateTodo) => (
      <TodoItem
        {...props}
        updateTodo={updateTodo}
      />
    )}
  </Mutation>
);

export default TodoItemMutation;
