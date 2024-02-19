console.clear();

async function fetchData() {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();
  return data;
}

fetchData();
