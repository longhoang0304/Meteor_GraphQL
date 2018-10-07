import React from 'react'

const TodoItem = ({ title, content, createdAt }) => {(
  <div className='item'>
    <div className='item-title'>
      {title}
    </div>
    <div className='item-content'>
      {content}
    </div>
    <div className='item-date'>
      {createdAt}
    </div>
  </div>
)};

export default TodoItem;