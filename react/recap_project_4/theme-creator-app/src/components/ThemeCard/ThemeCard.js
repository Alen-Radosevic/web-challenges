import ColorCard from "../ColorCard/ColorCard";

function ThemeCard({ theme }) {
  return (
    <li>
      <h2>{theme.name}</h2>
      <ul>
        {theme.colors.map((color) => (
          <ColorCard color={color} key={color.value} />
        ))}
      </ul>
    </li>
  );
}

export default ThemeCard;
