import React from "react";

import Todo from "./Todo";
const TodoList = ({ todos, setTodos, filteredTodos }) => {
  const todoItems = filteredTodos?.length > 0 ? filteredTodos : todos;
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todoItems.length > 0 &&
          todoItems.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              key={todo.id}
              todo={todo}
              text={todo.text}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
