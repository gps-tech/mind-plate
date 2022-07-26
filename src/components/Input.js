import React from "react";
import Check from "./Check";
import Flag from "./Flag";

//This is the first container in terms of path.

function Input(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div class="border-black">
      <h1 className="text-3xl font-bold underline">Inputt</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <ul>
          {props.thoughts.map((thought, i) => (
            <div className="thought">{thought.content}</div>
          ))}
        </ul>
      </form>
      <Flag />
      <Check thoughts={props.thoughts} setThoughts={props.setThoughts} />
    </div>
  );
}

export default Input;
