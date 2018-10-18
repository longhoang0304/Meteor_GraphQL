import React, { PureComponent } from 'react';
import TodoItemFooter from './TodoItem.footer';

class TodoItem extends PureComponent {

  state = {
    title: '',
    content: '',
    error: '',
  }

  componentDidMount() {
    const { title, content } = this.props;
    this.setState({
      title,
      content
    });
  }

  handleInput = (field, value) => {
    this.setState((preState) => ({
      [field]: value,
    }));
  }

  handleUpdate = () => {
    const { updateTodo, id } = this.props;
    const { title, content } = this.state;
    updateTodo({
      variables: {
        id,
        title,
        content
      }
    }).catch(err => {
      this.setState({
        error: err.message
      })
    });
  }

  render() {
    const { createdAt, id } = this.props;
    const { title, content, error } = this.state;

    return (
      <div className='todo-item'>
        <input
          type='text'
          className='item-title'
          value={title}
          onChange={({target}) => this.handleInput('title', target.value)}
          onBlur={this.handleUpdate}
        />
        <textarea
          className="item-content"
          placeholder="Nothing here to see"
          value={content}
          onChange={({target}) => this.handleInput('content', target.value)}
          onBlur={this.handleUpdate}
        />
        <TodoItemFooter
          id={id}
          createdAt={createdAt}
          error={error}
        />
      </div>
    );
  }
}
export default TodoItem;