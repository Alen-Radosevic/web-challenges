import Avatar from "./components/Avatar";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link propHref="#home">Home</Link>
          <Link propHref="#about">About</Link>
          <Link propHref="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
