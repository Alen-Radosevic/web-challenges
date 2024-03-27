import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  const foundCountry = countries.filter((country) =>
    country.name.startsWith(searchString)
  );

  if (foundCountry.length > 0) {
    foundCountry.forEach((country) => {
      const countryElement = Country(country);
      container.append(countryElement);
    });
  }
});
