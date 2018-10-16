import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import TodoItem from './TodoItem';

const DELETE_TODO = gql`
  mutation DeleteTodo($id: String!) {
    removeTodo(
      id: $id
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
    mutation={DELETE_TODO}
    refetchQueries={['TodoList']}
  >
    {(deleteTodo, { data }) => (
      <TodoItem
        {...props}
        deleteTodo={deleteTodo}
        data={data}
      />
    )}
  </Mutation>
);

export default TodoItemMutation;
