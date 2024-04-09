import React from "react";
import "./styles.css";
import Article from "./components/article/Article";

export default function App() {
  return (
    <>
      <Article
        title="
To work locally, please install the dependencies using `npm i` first."
        label="How are you"
        isFavorite={null}
      />
      <Article title="blablabala" label="hi i am hier" />
    </>
  );
}
