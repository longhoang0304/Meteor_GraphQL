import React from 'react';
import TodoItem from '../TodoItem';
import _ from 'lodash';

const TodoList = ({ todoList }) => (
  <div id='todo-list-container'>
    {
      _.map(
        todoList,
        (e, i) => (
          <TodoItem
            key={i}
            id={e._id}
            title={e.title}
            content={e.content}
            createdAt={e.createdAt}
          />
        )
      )
    }
  </div>
);

export default TodoList;