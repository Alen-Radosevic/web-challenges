import "./Tag.css";

export default function Tag({ tag }) {
  const isHighlightTag = tag === "admin";
  return (
    <li className={`tag ${isHighlightTag ? "tag--highlight" : ""}`}>{tag}</li>
  );
}
