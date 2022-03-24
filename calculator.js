const numbers = document.querySelectorAll(".number-js");
const operands = document.querySelectorAll(".operand-js");
const deleteButton = document.querySelector("button[value='Delete']");
const equalButton = document.querySelector("button[value='=']");
const resetButton = document.querySelector("button[value='Reset']");
const decimalButton = document.querySelector('button[value="."]');
const screenNumber = document.querySelector("#current-number");
const calculator = {
  displayNumber: "0",
  firstOperator: null,
  waiting: false,
  operator: null,
};

const handleDisplayUpdate = () => {
  screenNumber.innerText = calculator.displayNumber;
};
handleDisplayUpdate();
const handleNumber = (number) => {
  if (calculator.displayNumber === "0" && number === "0") return;
  if (calculator.displayNumber === "0") {
    calculator.displayNumber = number;
  } else {
    calculator.displayNumber += number;
  }
  handleDisplayUpdate();
};
const handleOperand = (operand) => {
  console.log(operand);
};
const handleReset = () => {
  calculator.displayNumber = "0";
  handleDisplayUpdate();
};
const handleDelete = () => {
  if (calculator.displayNumber === "0") return;
  if (calculator.displayNumber.length === 1) {
    console.log("oops");
    calculator.displayNumber = 0;
  } else {
    calculator.displayNumber.replace(
      calculator.displayNumber[calculator.displayNumber.length - 1],
      ""
    );
  }
  console.log(calculator.displayNumber);
  handleDisplayUpdate();
};
const handleEqual = (equal) => {
  console.log(equal);
};
const handleDecimal = (dec) => {
  console.log(dec);
};
numbers.forEach((number) => {
  number.addEventListener("click", (e) => handleNumber(e.target.value));
});
operands.forEach((operand) => {
  operand.addEventListener("click", (e) => handleNumber(e.target.value));
});
resetButton.addEventListener("click", handleReset);
equalButton.addEventListener("click", (e) => handleEqual(e.target.value));
decimalButton.addEventListener("click", (e) => handleDecimal(e.target.value));
deleteButton.addEventListener("click", handleDelete);

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
