import React, { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchItem } from "../redux/action";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";

const Todo = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  // console.log(newTodoText);

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== "") {
      handleAddTodo(newTodoText.trim());
      setNewTodoText("");
    }
  };

  const handleSearch = (value) => {
    setSearchText(value);
    dispatch(updateSearchItem(value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="text-center font-bold uppercase text-2xl text-default mt-3 mb-6">
        Todo Application
      </h2>
      {/* Input Box and Btn */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          name="addTodoInput"
          id="addTodoInput"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          <BsPlus />
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex items-center justify-between">
        <FilterButton />
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            name="addTodoInput"
            id="addTodoInput"
            placeholder="Search Text"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out"
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none">
            <BsSearch />
          </button>
        </div>
      </div>
      <TodoList />
    </div>
  );
};

export default Todo;
