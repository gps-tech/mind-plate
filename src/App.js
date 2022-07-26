import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";

// functions handling the conditionals

//the state exists in the master app.js and is accessed by children
function App() {
  const [thoughts, setThoughts] = useState([
    {
      // condition based example
      content: "Update Ableton",
      isAllowed: false,
      timeBased: false,
      conditionBased: false,
      id: 1,
    },
    {
      // time based example
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
    setThoughts(e.target.value);
  };

  // This is passed onto the form after the return to prevent the page from reloading when submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    // Creates and ID randomly within 10,000 or less range
    addThought({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <div class="flex flex-col items-center border-black">
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
