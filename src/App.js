import React from 'react';

import Count from './components/Count'
import Heading from './components/Heading';
import Todo from './components/Todo'

const App = () => {
  
  return (
    <div className="App">
      <Heading />
      <Count /><br /><br />
      <Todo />
    </div>
  );
}

export default App;