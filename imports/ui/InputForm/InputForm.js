import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class InputForm extends PureComponent {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    data: PropTypes.objectOf(PropTypes.any),
  }

  state = {
    title: '',
    content: '',
    error: '',
  }

  handleInput = (field, value) => {
    this.setState((preState) => ({
      [field]: value,
    }));
  }

  handleSubmit = () => {
    const { addTodo } = this.props;

    const { title, content } = this.state;
    if (!content.trim().length) {
      this.setState(() => ({
        error: 'Content cannot be empty',
      }));
      return;
    }
    addTodo({
      variables: {
        title,
        content,
      }
    });
    this.setState(() => ({
      error: '',
    }));
  }
  render() {
    const { title, content, error } = this.state;

    return (
      <div className="input-form">
        <input
          type="text"
          className="input-title"
          placeholder="Title"
          value={title}
          onChange={({target}) => this.handleInput('title', target.value)}
        />
        <textarea
          className="input-content"
          placeholder="Take a note..."
          value={content}
          onChange={({target}) => this.handleInput('content', target.value)}
        />
        <div className="input-save-btn">
          <span className="error-msg">
            {error}
          </span>
          <span
            onClick={this.handleSubmit}
            className="save-btn"
          >
            Save
          </span>
        </div>
      </div>
    );
  }
}

export default InputForm;