const DeleteTodo = (props: any) => {
  const { deleteCompletedTask } = props;
  function deleteTask(e: any) {
    e.preventDefault();
    deleteCompletedTask();
  }
  return (
    <>
      <button onClick={deleteTask}>Delete Completed Task</button>
    </>
  );
};

export default DeleteTodo;
