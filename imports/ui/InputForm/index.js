import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import InputForm from './InputForm';

const ADD_TODO = gql`
  mutation AddTodo($title: String, $content: String!) {
    addTodo(
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

const InputFormMutation = () => (
  <Mutation
    mutation={ADD_TODO}
  >
    {(addTodo, { data }) => (
      <InputForm
        addTodo={addTodo}
        data={data}
      />
    )}
  </Mutation>
);

export default InputFormMutation;