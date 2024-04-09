console.log("Sanity check");

const peopleInSpace = document.querySelector('[data-js="people-in-space"]');
const currentlyPeopleName = document.querySelector(
  '[data-js="currently-people-name"]'
);
const allButton = document.querySelector('[data-js="allButton"]');
const tiangongButton = document.querySelector('[data-js="tiangongButton"]');
const issButton = document.querySelector('[data-js="issButton"]');

async function getPeopleInSpace() {
  const response = await fetch("http://api.open-notify.org/astros.json");
  const data = await response.json();
  console.log("data: ", data);
  peopleInSpace.textContent = data.number;

  allButton.addEventListener("click", () => {
    data.people.forEach((element) => {
      const li = document.createElement("li");
      console.log(element);
      li.innerHTML = `Name: ${element.name}`;

      currentlyPeopleName.append(li);
    });
  });

  tiangongButton.addEventListener("click", () => {
    currentlyPeopleName.textContent = "";
    data.people
      .filter((element) => element.craft === "Tiangong")
      .forEach((element) => {
        const li = document.createElement("li");
        console.log(element);
        li.innerHTML = `Name: ${element.name}`;
        currentlyPeopleName.append(li);
      });
  });

  issButton.addEventListener("click", () => {
    currentlyPeopleName.textContent = "";
    data.people
      .filter((element) => element.craft === "ISS")
      .forEach((element) => {
        const li = document.createElement("li");
        console.log(element);
        li.innerHTML = `Name: ${element.name}`;
        currentlyPeopleName.append(li);
      });
  });
}
getPeopleInSpace();
