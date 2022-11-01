import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import todoListData from './data/todolist.json';

function App() {
  const [todoList, setTodoList] = useState(todoListData);

  const handleToggle = (id: any) => {
    let mapped = todoList.map((task) => {
      return task.id == id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setTodoList(mapped);
  };

  const addTodo = (userInput: any) => {
    setTodoList([
      ...todoList,
      { id: todoList.length + 1, task: userInput, complete: false },
    ]);
  };

  return (
    <div className="App">
      <Header />
      <Todos todoList={todoList} handleToggle={handleToggle} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
