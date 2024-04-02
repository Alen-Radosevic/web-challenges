/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

let clickNum = 0;
button.addEventListener("click", () => {
  clickNum++;

  if (clickNum === 1) {
    secondInput = firstInput;
  } else if (clickNum === 2) {
    secondInput.value = firstInput.value.toUpperCase();
  } else {
    const saveFirstInputValue = firstInput.value;
    const saveSecondInputValue = secondInput.value;
    firstInput.value = saveSecondInputValue;
    secondInput.value = saveFirstInputValue;
  }
});
