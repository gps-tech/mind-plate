import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function Check(props) {
  const { todos, setTodos } = props;

  const addTodo = (todo) => {
    // left makes sure there is text, right removes excess spaces
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    // console.log(todo, ...todos);
  };

  const updateTodo = (todoID, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoID ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      // this is toggling between true and false
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Conditions</h1>
      <TodoForm onSubmit={addTodo} />
      {/* <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      /> */}
    </div>
  );
}

export default Check;
