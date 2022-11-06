import Todo from './Todo';

const Todos = (props: any) => {
  const { todoList, handleToggle } = props;

  return (
    <>
      {todoList.map((todo: any) => {
        return <Todo key={todo.id} todo={todo} handleToggle={handleToggle} />;
      })}
    </>
  );
};

export default Todos;
