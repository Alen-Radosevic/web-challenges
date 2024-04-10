import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <>
        <Button />
        Hi
      </>
      <>
        <Button />
        How are you?
      </>
      <>
        <Button />
        I`m fine.
      </>
      <>
        <Button />
        And you?
      </>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
