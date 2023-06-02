import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  console.log(todos);
  return (
    <ul>
      {todos.map((todo) => {
        const { id } = todo;
        return <TodoItem key={id} todo={todo} />;
      })}
    </ul>
  );
}

export default TodoList;
