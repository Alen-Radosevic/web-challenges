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

if (numberOfHotdogs < 5) {
  let price = 2 * numberOfHotdogs;
  console.log(price);
} else if (numberOfHotdogs < 100) {
  let price = 1.5 * numberOfHotdogs;
  console.log(price);
} else if (numberOfHotdogs < 1000000) {
  let price = 1 * numberOfHotdogs;
  console.log(price);
} else if (numberOfHotdogs > 100000) {
  let price = 0.5 * numberOfHotdogs;
  console.log(price);
}
// Part 4: Daytime
const currentHour = 12;

const statement = "";

console.log(statement);

// Part 5: Greeting
const name = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
