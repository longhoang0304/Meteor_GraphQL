import React from 'react';
import Header from '../Header';
import InputForm from '../InputForm';
import TodoList from '../TodoList';

const dummyData = [
  {
    title: 'Title 1',
    content: 'Content 1',
    createdAt: Date.now(),
  },
  {
    title: 'Title 2',
    content: 'Content 2',
    createdAt: Date.now(),
  },
  {
    title: 'Title 3',
    content: 'Content 3',
    createdAt: Date.now(),
  },
  {
    title: 'Title 1',
    content: 'Content 1',
    createdAt: Date.now(),
  },
  {
    title: 'Title 2',
    content: 'Content 2',
    createdAt: Date.now(),
  },
  {
    title: 'Title 3',
    content: 'Content 3',
    createdAt: Date.now(),
  },
  {
    title: 'Title 1',
    content: 'Content 1',
    createdAt: Date.now(),
  },
  {
    title: 'Title 2',
    content: 'Content 2',
    createdAt: Date.now(),
  },
  {
    title: 'Title 3',
    content: 'Content 3',
    createdAt: Date.now(),
  },
  {
    title: 'Title 1',
    content: 'Content 1',
    createdAt: Date.now(),
  },
  {
    title: 'Title 2',
    content: 'Content 2',
    createdAt: Date.now(),
  },
  {
    title: 'Title 3',
    content: 'Content 3',
    createdAt: Date.now(),
  },
  {
    title: 'Title 1',
    content: 'Content 1',
    createdAt: Date.now(),
  },
  {
    title: 'Title 2',
    content: 'Content 2',
    createdAt: Date.now(),
  },
  {
    title: 'Title 3',
    content: 'Content 3',
    createdAt: Date.now(),
  },
]

const HomePage = () => ([
  <Header key={1} />,
  <div id="main-form" key={2}>
    <InputForm />
  </div>,
  <TodoList todoList={dummyData} />
]);

export default HomePage;