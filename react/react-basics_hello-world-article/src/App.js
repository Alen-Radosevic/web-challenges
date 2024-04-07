import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello, hello, hello!</h1>
      <p>
        Add whatever tags you like, but the predefined styles are limited ; In
        the return statement of your `App` function, replace the `div` with your
        `HelloWorldArticle` component.
      </p>
    </article>
  );
}
