import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1337, name: "🍌 Banana", color: "yellow" },

    { id: 1338, name: "🍎 Apple", color: "red" },

    { id: 1339, name: "🥝 Kiwi", color: "green" },

    { id: 1340, name: "🍇 Grapes", color: "purple" },
  ];

  return (
    <div className="app">
      {fruits.map(({ name, id, color }) => {
        return <Card key={id} id={id} name={name} color={color} />;
      })}
    </div>
  );
}
