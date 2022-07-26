import React from "react";

// this gets updated depending on time passing, or a condition being checked off

const checkClear = ({ content, isAllowed }) => {
  if (isAllowed) {
    return <div className="thought">{content}</div>;
  }
};

function Output(props) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Output</h1>
      <ul>{props.thoughts.map((thought, i) => checkClear(thought))}</ul>
    </div>
  );
}

export default Output;
