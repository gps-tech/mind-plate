import React from "react";

//This is the first container in terms of path.

function Input(props) {
  return (
    <div class="border-black">
      <h1>Input</h1>
      <form className="input-list">
        <ul>
          {props.thoughts.map((thought, i) => (
            <div className="thought">{thought.content}</div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Input;
