import React from 'react';
import Header from '../Header';
import InputForm from '../InputForm';
import TodoList from '../TodoList';

const HomePage = ({todoList, getMoreTodo}) => ([
  <Header key={1} />,
  <div id="main-form" key={2}>
    <InputForm />
  </div>,
  <TodoList
    todoList={todoList || []} key={3}
    getMoreTodo={getMoreTodo}
  />
]);

export default HomePage;