import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [holiday, setHoliday] = useState("");
  const [date, setDate] = useState("");
  const [code, setCode] = useState("");

  // const [formData, setFormData] = useState({ holiday: "", date: "", code: "" });

  function handleSubmit(event) {
    event.preventDefault();

    const holidayInput = event.target[0].value;
    const codeInput = event.target[1].value;
    const dateInput = event.target[2].value;

    setHoliday(holidayInput);
    setCode(codeInput);
    setDate(dateInput);

    // setFormData({ holiday: holidayInput, code: codeInput, date: dateInputt });
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />

        <label htmlFor="password">My password:</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="e.g. password"
        />

        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday: <span className="output">{holiday}</span>
      </p>
      <p>
        Date: <span className="output">{date}</span>
      </p>

      <p>
        Password: <span className="output">{code}</span>
      </p>
    </div>
  );
}
