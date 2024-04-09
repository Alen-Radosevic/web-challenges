import "./styles.css";

export default function App() {
  return (
    <>
      <Greeting name="Kaya" />
      <Greeting name="Roland" />
    </>
  );
}

function Greeting({ name }) {
  return <h1>Hello, {name === "Roland" ? "Coach" : name}! </h1>;
}
