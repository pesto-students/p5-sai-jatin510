import React from 'react';

const Todo = (props: any) => {
  const { todo, handleToggle } = props;

  const handleClick = (e: any) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  return (
    <div
      id={todo.id}
      className={todo.complete ? 'strike' : ''}
      onClick={handleClick}
    >
      {todo.task}
    </div>
  );
};

export default Todo;
