import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  // let code = "?"
  const [code, setCode] = useState(""); //new code

  const validCode = "🐡🐠🐋";

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={(event) => {
            //new code-add event
            setCode(code + event.target.textContent); //new code
            console.log(code + event.target.textContent); //new code
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={(event) => {
            //new code-add event
            setCode(code + event.target.textContent); //new code
            console.log(code + event.target.textContent); //new code
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={(event) => {
            //new code-add event
            setCode(code + event.target.textContent); //new code
            console.log(code + event.target.textContent); //new code
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          console.log("Code is empty now!"); //new code-text in console.log
        }}
      >
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
