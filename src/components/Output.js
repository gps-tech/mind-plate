import React from "react";

const checkClear = ({ content, isAllowed }) => {
  if (isAllowed) {
    return <div className="thought">{content}</div>;
  }
};

function Output(props) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Output</h1>
      <ul>
        {props.thoughts.map((thought, i) => (
          <div key={thought.id}>{checkClear(thought)}</div>
        ))}
      </ul>
    </div>
  );
}

export default Output;
