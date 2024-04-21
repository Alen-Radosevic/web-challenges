import "./App.css";
import ThemeCard from "./components/ThemeCard/ThemeCard.js";
import { themes } from "./db.js";

function App() {
  // const theme = themes(0);
  return (
    <>
      <header className="header">
        <h1>Theme Creator</h1>
      </header>
      <main className="main-container">
        <ul>
          {themes.map((theme) => (
            <ThemeCard theme={theme} key={theme.id} />
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
