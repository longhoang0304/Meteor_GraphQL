import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import m from 'moment';

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

const TodoItemFooter = ({ id, createdAt, error }) => (
  <Mutation
    mutation={DELETE_TODO}
    refetchQueries={['TodoList']}
  >
    {(deleteTodo) => (
      <div className='item-footer'>
        {
          !error ?
          <div className='item-date'>
            {m(createdAt).format('ddd, DD MMM YYYY')}
          </div> :
          <div className='item-error'>
            {error}
          </div>
        }
       <div
         className='item-delete'
         onClick={() => {
           deleteTodo({
             variables: {
               id,
             }
           });
         }}
       >
         Delete
       </div>
     </div>
    )}
  </Mutation>
);

export default TodoItemFooter;