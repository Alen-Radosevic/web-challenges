import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article_title">
        To work locally, please install the dependencies using `npm i` first.
      </h2>
      <label htmlFor="input-field">How are you</label>
      <input id="input-field" />
      <a
        className="article__link"
        href="https://developer.mozilla.org/en-US/docs/Web/API/Element/className"
      >
        Something about className
      </a>
    </article>
  );
}
