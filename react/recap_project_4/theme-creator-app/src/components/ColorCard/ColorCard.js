import classes from "./ColorCard.module.css";

function ColorCard({ color }) {
  return (
    <li className={classes["color-card"]}>
      <div className={classes["section-left"]}>
        <h3>{color.role}</h3>
        <p>{color.value}</p>
      </div>
      <div
        className={classes["section-right"]}
        style={{ backgroundColor: color.value }}
      ></div>
    </li>
  );
}

export default ColorCard;
