import React, { Component } from 'react';
import HomePage from './HomePage';

const App = ({ todoList }) => (
  <HomePage todoList={todoList} />
);

export default App;