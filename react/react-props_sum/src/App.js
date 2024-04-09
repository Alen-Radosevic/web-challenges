import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={32} valueB={22} />;
}

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return (
    <h1>
      {valueA}+{valueB}={sum}
    </h1>
  );
}
