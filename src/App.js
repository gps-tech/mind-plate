import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Conditions from "./components/Conditions";
import Output from "./components/Output";

function App() {
  const [thoughts, setThoughts] = useState([
    {
      content: "Update Ableton",
      isAllowed: false,
      timeBased: false,
      conditionBased: false,
      id: 1,
      dependencies: [],
    },
    {
      content: "Replace External Drive",
      isAllowed: true,
      timeBased: false,
      conditionBased: false,
      id: 2,
      dependencies: [],
    },
  ]);

  const [input, setInput] = useState("");

  const addThought = (newThought) => {
    // left makes sure there is text, right removes excess spaces
    if (!newThought.content || /^\s*$/.test(newThought.content)) {
      return;
    }
    const newThoughts = [newThought, ...thoughts];
    setThoughts(newThoughts);
    console.log(newThoughts);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // This is passed onto the form after the return to prevent the page from reloading when submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    addThought({
      content: input,
      isAllowed: true,
      timeBased: false,
      conditionBased: false,
      id: Math.floor(Math.random() * 10000),
      dependencies: [],
    });
    setInput("");
  };

  return (
    <div className="flex flex-col space-y-8 px-10 mx-10 text-left place-content-center border-black">
      <h1 className="text-3xl font-bold underline">Thoughts</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a thought"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="thought-button">Add Thought</button>
      </form>

      <Conditions thoughts={thoughts} setThoughts={setThoughts} />
      <Output thoughts={thoughts} setThoughts={setThoughts} />
    </div>
  );
}

export default App;
