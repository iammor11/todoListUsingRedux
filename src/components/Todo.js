import React from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Todo = () => {
  
  return (
    <React.Fragment>
        <AddTodo />
        <TodoList />
     </React.Fragment>
  );
}

export default Todo;