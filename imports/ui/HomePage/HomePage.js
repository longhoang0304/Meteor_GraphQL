import React from 'react';
import Header from '../Header';
import InputForm from '../InputForm';
import TodoList from '../TodoList';

const HomePage = ({todoList}) => ([
  <Header key={1} />,
  <div id="main-form" key={2}>
    <InputForm />
  </div>,
  <TodoList todoList={todoList || []} />
]);

export default HomePage;