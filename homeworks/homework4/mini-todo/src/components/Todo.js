import { useEffect, useState } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const todosInLocalStorage = localStorage.getItem("todos");
    if (todosInLocalStorage) {
      setTodos(JSON.parse(todosInLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (value) => setInputValue(value);

  const handleCheckChange = (id) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos];
      const targetTodo = newTodos.find((todo) => todo.id === id);
      targetTodo.checked = !targetTodo.checked;

      return newTodos;
    });
  };

  const handleAddClick = (newTodoName) => {
    if (!newTodoName.trim()) {
      return;
    }

    setTodos((prevTodos) => {
      const newTodo = {
        id: prevTodos.at(-1)?.id + 1 || 1,
        name: newTodoName,
        checked: false,
      };

      return [...prevTodos, newTodo];
    });

    setInputValue("");
  };

  const handleDeleteClick = (id) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

  const todoHeaderProps = {
    inputValue,
    handleInputChange,
    handleAddClick,
  };

  const todoListProps = {
    todos,
    handleCheckChange,
    handleDeleteClick,
  };

  return (
    <>
      <TodoHeader {...todoHeaderProps} />
      <TodoList {...todoListProps} />
    </>
  );
}

export default Todo;
