import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("You clicked me!");
  }
  return (
    <>
      <Button
        propText="Click"
        propColor="white"
        propDisabled={false}
        propOnClick={handleClick}
      />
    </>
  );
}

function Button({ propText, propColor, propDisabled, propOnClick }) {
  return (
    <button
      style={{ color: propColor, backgroundColor: "red" }}
      disabled={propDisabled}
      onClick={propOnClick}
    >
      {propText}
    </button>
  );
}
