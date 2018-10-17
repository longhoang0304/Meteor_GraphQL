import React, { PureComponent } from 'react';
import TodoItem from '../TodoItem';
import _ from 'lodash';

class TodoList extends PureComponent {
  componentDidMount() {
    this.props.getMoreTodo();
  }
  render() {
    const { todoList } = this.props;

    return (
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
  }
}

export default TodoList;