import React, { Component } from 'react';
import HomePage from './HomePage';

const App = ({ todoList, getMoreTodo }) => (
  <HomePage
    todoList={todoList}
    getMoreTodo={getMoreTodo}
  />
);

export default App;