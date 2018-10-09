import React from 'react';
import m from 'moment';

const TodoItem = ({ title, content, createdAt }) => (
  <div className='todo-item'>
    <div className='item-title'>
      {title}
    </div>
    <div className='item-content'>
      {content}
    </div>
    <div className='item-footer'>
      <div className='item-date'>
        {m(createdAt).format('ddd, DD MMM YYYY')}
      </div>
      <div className='item-delete'>
        Delete
      </div>
    </div>
  </div>
);

export default TodoItem;