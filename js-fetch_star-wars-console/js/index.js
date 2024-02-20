console.clear();

async function fetchData() {
  const response = await fetch("https://swapi.dev/api/people");
  const json = await response.json();
  console.log(json.results[2].eye_color);
  const foundCharacter = json.results.find(({ name }) => name == "R2-D2");
  console.log(foundCharacter);
}

fetchData();
