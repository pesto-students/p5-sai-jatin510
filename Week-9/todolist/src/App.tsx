import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './App.css';
import DeleteTodo from './components/DeleteTodo';
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
      { id: uuidv4(), task: userInput, complete: false },
    ]);
  };

  const deleteCompletedTask = () => {
    const nonCompletedTasks = todoList.filter(
      (todo: any) => todo.complete === false
    );
    setTodoList(nonCompletedTasks);
  };

  return (
    <div className="App">
      <Header />
      <Todos todoList={todoList} handleToggle={handleToggle} />
      <DeleteTodo deleteCompletedTask={deleteCompletedTask} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
