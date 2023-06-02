import React from "react";

function TodoItem({ todo }) {
  const { id, name, checked } = todo;
  return (
    <>
      <input type="checkbox" checked={checked} />
      <span>{name}</span>
      <button>delete</button>
    </>
  );
}

export default TodoItem;
