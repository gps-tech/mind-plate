import React, { useState } from "react";
import Check from "./Check";

//This is the first container in terms of path.

function Conditions(props) {
  const { thoughts, setThoughts } = props;

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

  // // modify so that it pushes checked items to array into corresponding thought object state in App.js
  // const handleClick = (index, i) => {
  //   setThoughts(thoughts[i].dependencies.push(todos[index]));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <h1 className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 pt-20">
          Conditions for thoughts
        </h1>
        <form className="todo-form" onSubmit={handleSubmit}>
          <ul>
            {thoughts.map((thought, i) => (
              <div key={thought.id} className="thought">
                {thought.content}

                {/* create collapsable toggle for all the conditions here */}
                <div id="condition toggle">
                  {todos.map((todo, index) => (
                    <div key={todo.id} className="flex">
                      <input
                        type="checkbox"
                        className="mt-1.5"
                        // onClick={handleClick(index, i)}
                      />
                      <div className="pl-2.5">{todo.text}</div>
                    </div>
                  ))}
                </div>
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
