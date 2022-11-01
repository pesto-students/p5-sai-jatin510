import { useState } from 'react';

const TodoForm = (props: any) => {
  const [userInput, setUserInput] = useState('');

  const { addTodo } = props;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTodo(userInput);
    console.log(userInput);
    setUserInput('');
  };

  const handleOnChange = (e: any) => {
    setUserInput(e.currentTarget.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task"
          value={userInput}
          onChange={handleOnChange}
        />
        <button> Submit</button>
      </form>
    </div>
  );
};

export default TodoForm;
