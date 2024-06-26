import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // let count = 0;
  const [count, setCount] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  console.log(isHidden);
  return (
    <div className="container">
      <button
        type="button"
        onClick={() => {
          setIsHidden(!isHidden);
        }}
      >
        {isHidden ? "Hide" : "Show"}
      </button>

      {isHidden ? (
        <>
          <h1>{count}</h1>
          <div className="button-container">
            <button
              type="button"
              onClick={() => {
                setCount(count - 1);
                // console.log("🤔");
              }}
            >
              -
            </button>
            <button
              type="button"
              onClick={() => {
                setCount(count + 1);
                // console.log("🤔");
              }}
            >
              +
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
}
