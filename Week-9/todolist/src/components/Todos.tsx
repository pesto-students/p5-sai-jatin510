import React, { useState } from 'react';
import Todo from './Todo';
import todoListData from '../data/todolist.json';

function Todos() {
  const [todoList, setTodoList] = useState(todoListData);

  const handleToggle = (id: any) => {
    let mapped = todoList.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodoList(mapped);
  };

  return (
    <>
      {todoList.map((todo) => {
        return <Todo key={todo.id} todo={todo} handleToggle={handleToggle} />;
      })}
    </>
  );
}

export default Todos;
