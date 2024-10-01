import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchText = state.searchText;
    return todos.filter((todo) => {
      const matchFilter =
        (filter === "COMPLETED" && todos.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchSearch = todo.text.toLowerCase().includes(searchText);

      return matchFilter && matchSearch;
    });
  });
  return <div>Todo List</div>;
};

export default TodoList;
