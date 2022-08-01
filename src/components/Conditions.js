import React, { useState } from "react";
import Check from "./Check";

//This is the first container in terms of path.

function Conditions(props) {
  const [todos, setTodos] = useState([
    {
      text: "Plugins compatible",
      done: false,
      id: 1,
    },
    {
      text: "Warranty Expired",
      done: false,
      id: 2,
    },
  ]);

  const handleClick = (i) => {
    setTodos((todos[i].done = true));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline border-black">
          Conditions for thoughts
        </h1>
        <form className="todo-form" onSubmit={handleSubmit}>
          <ul>
            {props.thoughts.map((thought, i) => (
              <div key={thought.id} className="thought">
                {thought.content}
                {todos.map((todo, i) => (
                  <div key={todo.id} className="todo">
                    <input type="checkbox" onClick={handleClick} />
                    {todo.text}
                  </div>
                ))}
              </div>
            ))}
          </ul>
        </form>
        <Check todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default Conditions;
