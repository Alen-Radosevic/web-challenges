import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  // new code

  function handleAddTag(newTag) {
    setTags([...tags, newTag]);
  }
  function handleDeleteTag(tagToDelete) {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  }

  // new code

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
