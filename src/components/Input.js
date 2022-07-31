import React from "react";
import Check from "./Check";

//This is the first container in terms of path.

function Input(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline border-black">Inputt</h1>
        <form className="todo-form" onSubmit={handleSubmit}>
          <ul>
            {props.thoughts.map((thought, i) => (
              <div key={thought.id} className="thought">
                {thought.content}
              </div>
            ))}
          </ul>
        </form>
        <Check thoughts={props.thoughts} setThoughts={props.setThoughts} />
      </div>
    </div>
  );
}

export default Input;
