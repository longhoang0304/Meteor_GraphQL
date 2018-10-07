import React from 'react';

const InputForm = () => (
  <div className="input-form">
    <input
      type="text"
      className="input-title"
      placeholder="Title"
    />
    <textarea
      className="input-content"
      placeholder="Take a note..."
    />
    <div className="input-save-btn">
      <span>Save</span>
    </div>
  </div>
);

export default InputForm;