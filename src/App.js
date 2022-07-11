import React, { useState } from "react";
import "./App.css";
import Check from "./components/Check";
import Input from "./components/Input";
import Output from "./components/Output";

// functions handling the conditionals

function App() {
  const [thoughts, setThoughts] = useState([
    {
      // condition based example
      content: "Update Ableton",
      isCompleted: false,
      timeBased: false,
      conditionBased: false,
    },
    {
      // time based example
      content: "Replace External Drive",
      isCompleted: false,
      timeBased: false,
      conditionBased: false,
    },
  ]);

  return (
    <div class="container items-center">
      <Input />
      <Check />
      <Output />
    </div>

    // <div className="App">
    //   {/* main container that holds all */}
    //   <div className="main-container">
    //     {/* input container */}
    //     <form className="todo-list">
    //       <ul>
    //         {thoughts.map((todo, i) => (
    //           <div className="thoughts">
    //             <div className="checkbox-time" />

    //             <input type="text" value={thoughts.content} />
    //           </div>
    //         ))}
    //       </ul>
    //     </form>
    //     <div className="input-container">
    //       {/* text input */}
    //       <div className="text-input"></div>
    //       {/* conditional flags, check all that apply */}
    //       <div className="conditional-flags"></div>
    //     </div>

    //     {/* Conditionals container */}
    //     <div className="conditionals-container">
    //       {/* system time container */}
    //       <div className="system-date-time"></div>
    //       {/* milestone container */}
    //       <div className="milestone-container"></div>
    //     </div>

    //     {/* output container */}
    //     <div className="output-container"></div>
    //   </div>
    // </div>
  );
}

export default App;
