import React, { useState } from 'react';
import Todo from './Todo';
import todoListData from '../data/todolist.json';

function Todos() {
  const [todoList, setTodoList] = useState(todoListData);

  return (
    <>
      {todoList.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </>
  );
}

export default Todos;
