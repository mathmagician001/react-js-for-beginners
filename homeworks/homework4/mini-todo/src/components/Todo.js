import React, { useEffect, useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";

function Todo() {
  const [todos, setTodos] = useState([{ id: 1, name: "Garo", checkd: false }]);
  useEffect(() => {
    const todosInLocalStorage = localStorage.getItem("todos");
    console.log(todosInLocalStorage);
    if (todosInLocalStorage) {
      setTodos(JSON.parse(todosInLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddClick = (todoName) => {
    setTodos((prevTodos) => {
      const newTodo = {
        id: prevTodos.at(-1)?.id + 1 || 1,
        name: todoName,
        checked: false,
      };

      return [...prevTodos, newTodo];
    });
  };

  return (
    <>
      <TodoHeader handleAddClick={handleAddClick} />
      <TodoList todos={todos} />
      <TodoItem />
    </>
  );
}

export default Todo;
