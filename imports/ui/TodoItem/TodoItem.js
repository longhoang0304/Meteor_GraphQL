import React from 'react'

const TodoItem = ({ title, content, createdAt }) => (
  <div className='todo-item'>
    <div className='item-title'>
      {title}
    </div>
    <div className='item-content'>
      {content}
    </div>
    <div className='item-date'>
      {createdAt}
    </div>
    <div className='item-footer'>
      <div>Delete</div>
    </div>
  </div>
);

export default TodoItem;