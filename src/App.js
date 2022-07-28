import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  const [thoughts, setThoughts] = useState([
    {
      content: "Update Ableton",
      isAllowed: false,
      timeBased: false,
      conditionBased: false,
      id: 1,
    },
    {
      content: "Replace External Drive",
      isAllowed: true,
      timeBased: false,
      conditionBased: false,
      id: 2,
    },
  ]);

  const [input, setInput] = useState("");

  const addThought = (newThought) => {
    // left makes sure there is text, right removes excess spaces
    if (!newThought.text || /^\s*$/.test(newThought.text)) {
      return;
    }
    const newThoughts = [newThought, ...thoughts];
    setThoughts(newThoughts);
    console.log(newThought, ...thoughts);
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
      text: input,
      isAllowed: true,
      timeBased: false,
      conditionBased: false,
      id: Math.floor(Math.random() * 10000),
    });
    setInput("");
  };

  return (
    <div className="flex flex-col items-center border-black">
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
      <Input thoughts={thoughts} setThoughts={setThoughts} />
      <Output thoughts={thoughts} setThoughts={setThoughts} />
    </div>
  );
}

export default App;
