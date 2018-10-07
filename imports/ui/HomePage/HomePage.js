import React from 'react';
import Header from '../Header';
import InputForm from '../InputForm';

const HomePage = () => ([
  <Header key={1} />,
  <div id="main-form" key={2}>
    <InputForm />
  </div>
]);

export default HomePage;