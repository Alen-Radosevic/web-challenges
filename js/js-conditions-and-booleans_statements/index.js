console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;
if (number % 2 == 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;
let price;

if (numberOfHotdogs < 5) {
  price = 2 * numberOfHotdogs;
} else if (numberOfHotdogs < 100) {
  price = 1.5 * numberOfHotdogs;
} else if (numberOfHotdogs < 1000000) {
  price = 1 * numberOfHotdogs;
} else if (numberOfHotdogs > 100000) {
  price = 0.5 * numberOfHotdogs;
}
console.log(price);

// Part 4: Daytime
const currentHour = 12;
/* if (currentHour < 17) {
  console.log("Still need to learn...");
} else {
  console.log("Partytime!!!");
} */

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const name = "Archibald";
const coach = "Mark";
const isCoach = name === coach ? "Coach" : name;
const greeting = "Hello " + isCoach + "!";

console.log(greeting);

//druga verzija
/* const name = "Archibald";
const coach = "Max";

const greeting = "Hello " + (name === coach ? "coach" : name) + "!";

console.log(greeting); */
