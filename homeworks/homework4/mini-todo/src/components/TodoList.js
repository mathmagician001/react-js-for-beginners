import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todos, handleCheckChange, handleDeleteClick } = props;

  return (
    <ul>
      {todos.map((todo) => {
        const { id } = todo;
        return (
          <TodoItem
            key={id}
            todo={todo}
            handleCheckChange={handleCheckChange}
            handleDeleteClick={handleDeleteClick}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
