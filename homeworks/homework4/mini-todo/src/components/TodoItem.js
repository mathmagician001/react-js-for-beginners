import React from "react";

function TodoItem(props) {
  const { todo, handleCheckChange, handleDeleteClick } = props;
  const { id, name, checked } = todo;
  return (
    <li>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleCheckChange(id)}
        id={`todo${id}`}
      />
      <label htmlFor={`todo${id}`}>{name}</label>
      <button onClick={() => handleDeleteClick(id)}>X</button>
    </li>
  );
}

export default TodoItem;
