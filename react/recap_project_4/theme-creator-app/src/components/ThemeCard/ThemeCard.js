import ColorCard from "../ColorCard/ColorCard";
import classes from "./ThemeCard.module.css";

function ThemeCard({ theme }) {
  console.log(theme);
  return (
    <li className={classes["theme-card"]}>
      <h2>{theme.name}</h2>
      <ul className={classes["card-list"]}>
        {theme.colors.map((color) => (
          <ColorCard color={color} key={color.value} />
        ))}
      </ul>
    </li>
  );
}

export default ThemeCard;
